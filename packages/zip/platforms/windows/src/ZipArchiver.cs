#nullable enable
using System;
using System.Buffers.Binary;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace NativeScriptZip
{
    public static class ZipArchiver
    {
        public static Task<string> ZipAsync(string directory, string archive, bool keepParent, string password, Action<int> onProgress) =>
            Task.Run(() =>
            {
                ArgumentNullException.ThrowIfNull(directory);
                ArgumentNullException.ThrowIfNull(archive);
                ZipWriter.Write(directory, archive, keepParent, string.IsNullOrEmpty(password) ? null : password, onProgress);
                return archive;
            });

        public static Task<string> UnzipAsync(string archive, string destination, bool overwrite, string password, Action<int> onProgress) =>
            Task.Run(() =>
            {
                ArgumentNullException.ThrowIfNull(archive);
                ArgumentNullException.ThrowIfNull(destination);
                ZipReader.Extract(archive, destination, overwrite, string.IsNullOrEmpty(password) ? null : password, onProgress);
                return destination;
            });
    }

    internal static class ZipFormat
    {
        public const uint SigLocal = 0x04034b50;
        public const uint SigCentral = 0x02014b50;
        public const uint SigEnd = 0x06054b50;
        public const uint SigZip64End = 0x06064b50;
        public const uint SigZip64Locator = 0x07064b50;
        public const ushort Store = 0;
        public const ushort Deflate = 8;
        public const ushort MethodAes = 99;
        public const ushort FlagEncrypted = 0x0001;
        public const ushort FlagDataDescriptor = 0x0008;
        public const ushort FlagUtf8 = 0x0800;
        public const ushort ExtraZip64 = 0x0001;
        public const ushort ExtraAes = 0x9901;
        public const ushort ExtraUnicodePath = 0x7075;
        public const ushort MadeByUnix = (3 << 8) | 63;
        public const int Chunk = 256 * 1024;
        public const int MacLength = 10;
        public const long MaxCentralDirectory = 1L << 30;

        public static void W16(Span<byte> b, int at, ushort v) => BinaryPrimitives.WriteUInt16LittleEndian(b.Slice(at), v);
        public static void W32(Span<byte> b, int at, uint v) => BinaryPrimitives.WriteUInt32LittleEndian(b.Slice(at), v);
        public static void W64(Span<byte> b, int at, ulong v) => BinaryPrimitives.WriteUInt64LittleEndian(b.Slice(at), v);
        public static ushort R16(ReadOnlySpan<byte> b, int at) => BinaryPrimitives.ReadUInt16LittleEndian(b.Slice(at));
        public static uint R32(ReadOnlySpan<byte> b, int at) => BinaryPrimitives.ReadUInt32LittleEndian(b.Slice(at));
        public static ulong R64(ReadOnlySpan<byte> b, int at) => BinaryPrimitives.ReadUInt64LittleEndian(b.Slice(at));

        public static void WriteAesExtra(Span<byte> b, ushort method)
        {
            W16(b, 0, ExtraAes);
            W16(b, 2, 7);
            W16(b, 4, 2);
            b[6] = (byte)'A';
            b[7] = (byte)'E';
            b[8] = 3;
            W16(b, 9, method);
        }

        public static (ushort time, ushort date) ToDos(DateTime t)
        {
            if (t.Year < 1980)
            {
                return (0, (1 << 5) | 1);
            }
            int year = Math.Min(t.Year, 2107);
            return ((ushort)((t.Hour << 11) | (t.Minute << 5) | (t.Second >> 1)), (ushort)(((year - 1980) << 9) | (t.Month << 5) | t.Day));
        }

        public static DateTime? FromDos(ushort time, ushort date)
        {
            try
            {
                return new DateTime(((date >> 9) & 0x7f) + 1980, (date >> 5) & 0x0f, date & 0x1f, (time >> 11) & 0x1f, (time >> 5) & 0x3f, Math.Min((time & 0x1f) * 2, 59), DateTimeKind.Local);
            }
            catch (ArgumentOutOfRangeException)
            {
                return null;
            }
        }

        public static void TryDelete(string path)
        {
            try
            {
                File.Delete(path);
            }
            catch
            {
            }
        }
    }

    internal sealed class Progress
    {
        private readonly Action<int>? callback;
        private ulong done;
        private ulong total;
        private int last;
        public bool Enabled = true;

        public Progress(Action<int>? callback) => this.callback = callback;

        public static ulong Add(ulong a, ulong b) => a > ulong.MaxValue - b ? ulong.MaxValue : a + b;

        public void AddTotal(ulong units) => total = Add(total, units);

        public void Advance(ulong units)
        {
            if (!Enabled)
            {
                return;
            }
            done = Add(done, units);
            int percent = total > 0 ? (int)Math.Min(100.0, (double)done * 100.0 / total) : 100;
            if (percent > last)
            {
                last = percent;
                callback?.Invoke(percent);
            }
        }
    }

    internal static class Crc32
    {
        private static readonly uint[] Table = Build();

        private static uint[] Build()
        {
            var t = new uint[8 * 256];
            for (uint i = 0; i < 256; i++)
            {
                uint c = i;
                for (int k = 0; k < 8; k++)
                {
                    c = (c & 1) != 0 ? 0xEDB88320u ^ (c >> 1) : c >> 1;
                }
                t[i] = c;
            }
            for (int i = 0; i < 256; i++)
            {
                for (int s = 1; s < 8; s++)
                {
                    uint prev = t[(s - 1) * 256 + i];
                    t[s * 256 + i] = (prev >> 8) ^ t[prev & 0xff];
                }
            }
            return t;
        }

        public static uint Byte(uint crc, byte b) => Table[(crc ^ b) & 0xff] ^ (crc >> 8);

        public static uint Update(uint crc, ReadOnlySpan<byte> data)
        {
            var t = Table;
            crc = ~crc;
            int i = 0;
            for (; data.Length - i >= 8; i += 8)
            {
                uint one = BinaryPrimitives.ReadUInt32LittleEndian(data.Slice(i)) ^ crc;
                uint two = BinaryPrimitives.ReadUInt32LittleEndian(data.Slice(i + 4));
                crc = t[7 * 256 + (one & 0xff)] ^ t[6 * 256 + ((one >> 8) & 0xff)] ^ t[5 * 256 + ((one >> 16) & 0xff)] ^ t[4 * 256 + (one >> 24)]
                    ^ t[3 * 256 + (two & 0xff)] ^ t[2 * 256 + ((two >> 8) & 0xff)] ^ t[256 + ((two >> 16) & 0xff)] ^ t[two >> 24];
            }
            for (; i < data.Length; i++)
            {
                crc = t[(crc ^ data[i]) & 0xff] ^ (crc >> 8);
            }
            return ~crc;
        }
    }

    internal sealed class AesCtr : IDisposable
    {
        private const int Blocks = 256;
        private readonly Aes aes;
        private readonly byte[] counters = new byte[Blocks * 16];
        private readonly byte[] stream = new byte[Blocks * 16];
        private int pos = Blocks * 16;
        private ulong counter;

        public AesCtr(byte[] key)
        {
            aes = Aes.Create();
            aes.Key = key;
        }

        public void Transform(Span<byte> data)
        {
            for (int i = 0; i < data.Length; i++)
            {
                if (pos == stream.Length)
                {
                    for (int b = 0; b < Blocks; b++)
                    {
                        BinaryPrimitives.WriteUInt64LittleEndian(counters.AsSpan(b * 16), ++counter);
                    }
                    aes.EncryptEcb(counters, stream, PaddingMode.None);
                    pos = 0;
                }
                data[i] ^= stream[pos++];
            }
        }

        public void Dispose() => aes.Dispose();
    }

    internal static class WinZipAes
    {
        public static int SaltLength(int strength) => strength switch
        {
            1 => 8,
            2 => 12,
            3 => 16,
            _ => throw new InvalidDataException("Unsupported AES strength"),
        };

        public static (byte[] enc, byte[] mac, byte[] verifier) Derive(string password, byte[] salt, int strength)
        {
            int keyLength = SaltLength(strength) * 2;
            byte[] secret = Encoding.UTF8.GetBytes(password);
            byte[] d = Rfc2898DeriveBytes.Pbkdf2(secret, salt, 1000, HashAlgorithmName.SHA1, keyLength * 2 + 2);
            var result = (d[..keyLength], d[keyLength..(keyLength * 2)], d[(keyLength * 2)..]);
            CryptographicOperations.ZeroMemory(d);
            CryptographicOperations.ZeroMemory(secret);
            return result;
        }
    }

    internal sealed class ZipCrypto
    {
        private uint k0 = 0x12345678, k1 = 0x23456789, k2 = 0x34567890;

        public ZipCrypto(string password)
        {
            foreach (byte b in Encoding.UTF8.GetBytes(password))
            {
                Update(b);
            }
        }

        private void Update(byte c)
        {
            unchecked
            {
                k0 = Crc32.Byte(k0, c);
                k1 = (k1 + (k0 & 0xff)) * 134775813 + 1;
                k2 = Crc32.Byte(k2, (byte)(k1 >> 24));
            }
        }

        public void Decrypt(Span<byte> data)
        {
            for (int i = 0; i < data.Length; i++)
            {
                uint t = (k2 | 2) & 0xffff;
                byte c = (byte)(data[i] ^ (byte)((t * (t ^ 1)) >> 8));
                Update(c);
                data[i] = c;
            }
        }
    }

    internal sealed class EntrySink : Stream
    {
        private readonly Stream output;
        private readonly AesCtr? ctr;
        private readonly IncrementalHash? hmac;
        private byte[]? scratch;

        public EntrySink(Stream output, AesCtr? ctr, IncrementalHash? hmac)
        {
            this.output = output;
            this.ctr = ctr;
            this.hmac = hmac;
        }

        public override void Write(byte[] buffer, int offset, int count) => Write(buffer.AsSpan(offset, count));

        public override void Write(ReadOnlySpan<byte> data)
        {
            if (ctr == null)
            {
                output.Write(data);
                return;
            }
            scratch ??= new byte[ZipFormat.Chunk];
            while (data.Length > 0)
            {
                int n = Math.Min(data.Length, scratch.Length);
                var chunk = scratch.AsSpan(0, n);
                data.Slice(0, n).CopyTo(chunk);
                ctr.Transform(chunk);
                hmac!.AppendData(chunk);
                output.Write(chunk);
                data = data.Slice(n);
            }
        }

        public override bool CanRead => false;
        public override bool CanSeek => false;
        public override bool CanWrite => true;
        public override long Length => throw new NotSupportedException();
        public override long Position { get => throw new NotSupportedException(); set => throw new NotSupportedException(); }
        public override void Flush() { }
        public override int Read(byte[] buffer, int offset, int count) => throw new NotSupportedException();
        public override long Seek(long offset, SeekOrigin origin) => throw new NotSupportedException();
        public override void SetLength(long value) => throw new NotSupportedException();
    }

    internal sealed class EntryReader : Stream
    {
        private readonly Stream file;
        private readonly AesCtr? ctr;
        private readonly IncrementalHash? hmac;
        private readonly ZipCrypto? zipCrypto;
        private long remaining;

        public EntryReader(Stream file, long length, AesCtr? ctr, IncrementalHash? hmac, ZipCrypto? zipCrypto)
        {
            this.file = file;
            remaining = length;
            this.ctr = ctr;
            this.hmac = hmac;
            this.zipCrypto = zipCrypto;
        }

        public override int Read(byte[] buffer, int offset, int count) => Read(buffer.AsSpan(offset, count));

        public override int Read(Span<byte> buffer)
        {
            if (remaining <= 0 || buffer.Length == 0)
            {
                return 0;
            }
            int n = file.Read(buffer.Slice(0, (int)Math.Min(buffer.Length, remaining)));
            if (n <= 0)
            {
                throw new EndOfStreamException("Unexpected end of archive");
            }
            remaining -= n;
            var chunk = buffer.Slice(0, n);
            if (hmac != null)
            {
                hmac.AppendData(chunk);
                ctr!.Transform(chunk);
            }
            else
            {
                zipCrypto?.Decrypt(chunk);
            }
            return n;
        }

        public void Drain()
        {
            var tmp = new byte[64 * 1024];
            while (Read(tmp) > 0)
            {
            }
        }

        public override bool CanRead => true;
        public override bool CanSeek => false;
        public override bool CanWrite => false;
        public override long Length => throw new NotSupportedException();
        public override long Position { get => throw new NotSupportedException(); set => throw new NotSupportedException(); }
        public override void Flush() { }
        public override long Seek(long offset, SeekOrigin origin) => throw new NotSupportedException();
        public override void SetLength(long value) => throw new NotSupportedException();
        public override void Write(byte[] buffer, int offset, int count) => throw new NotSupportedException();
    }

    internal static class ZipWriter
    {
        internal static ulong Zip64Threshold = uint.MaxValue;

        private sealed class Source
        {
            public string Name = "";
            public string? Path;
            public bool Directory;
            public long Size;
            public DateTime Modified;
        }

        private sealed class Record
        {
            public byte[] Name = Array.Empty<byte>();
            public ushort Version, Flags, Method, Time, Date, AesMethod;
            public uint Crc;
            public ulong CompressedSize, Size, Offset;
            public bool Directory, Aes;
        }

        private static ulong LocalZip64Limit => Zip64Threshold > 65536 ? Zip64Threshold - 65536 : 0;

        public static void Write(string directory, string archive, bool keepParent, string? password, Action<int>? onProgress)
        {
            var root = new DirectoryInfo(directory);
            if (!root.Exists)
            {
                throw new DirectoryNotFoundException("Directory does not exist, invalid directory path: " + directory);
            }
            var sources = new List<Source>();
            string prefix = "";
            if (keepParent && root.Parent != null)
            {
                prefix = root.Name + "/";
                sources.Add(new Source { Name = prefix, Directory = true, Modified = root.LastWriteTime });
            }
            string rootFull = Path.TrimEndingDirectorySeparator(root.FullName) + Path.DirectorySeparatorChar;
            Collect(root, rootFull, prefix, sources);
            string archivePath = Path.GetFullPath(archive);
            sources.RemoveAll(s => s.Path != null && string.Equals(Path.GetFullPath(s.Path), archivePath, OperatingSystem.IsWindows() ? StringComparison.OrdinalIgnoreCase : StringComparison.Ordinal));

            var progress = new Progress(onProgress);
            foreach (var s in sources)
            {
                progress.AddTotal((ulong)s.Size + 1);
            }
            string? parent = Path.GetDirectoryName(Path.GetFullPath(archive));
            if (!string.IsNullOrEmpty(parent))
            {
                Directory.CreateDirectory(parent);
            }

            var records = new List<Record>(sources.Count);
            var input = new byte[ZipFormat.Chunk];
            bool success = false;
            try
            {
                using (var output = new FileStream(archive, FileMode.Create, FileAccess.ReadWrite, FileShare.None, 1 << 20))
                {
                    foreach (var source in sources)
                    {
                        var record = new Record { Name = Encoding.UTF8.GetBytes(source.Name), Directory = source.Directory, Offset = (ulong)output.Position };
                        if (record.Name.Length > 0xffff)
                        {
                            throw new PathTooLongException("Path too long for a zip entry: " + source.Name);
                        }
                        (record.Time, record.Date) = ZipFormat.ToDos(source.Modified);
                        if (source.Directory)
                        {
                            WriteDirectory(output, record);
                        }
                        else if (!WriteFile(output, record, source, password, source.Size > 0 ? ZipFormat.Deflate : ZipFormat.Store, progress, input))
                        {
                            output.SetLength((long)record.Offset);
                            output.Position = (long)record.Offset;
                            progress.Enabled = false;
                            WriteFile(output, record, source, password, ZipFormat.Store, progress, input);
                            progress.Enabled = true;
                        }
                        records.Add(record);
                        progress.Advance(1);
                    }
                    ulong cdOffset = (ulong)output.Position;
                    foreach (var r in records)
                    {
                        WriteCentral(output, r);
                    }
                    WriteEnd(output, (ulong)records.Count, cdOffset, (ulong)output.Position - cdOffset);
                }
                success = true;
            }
            finally
            {
                if (!success)
                {
                    ZipFormat.TryDelete(archive);
                }
            }
        }

        private static void Collect(DirectoryInfo dir, string root, string prefix, List<Source> into)
        {
            var children = dir.GetFileSystemInfos();
            Array.Sort(children, (a, b) => string.CompareOrdinal(a.Name, b.Name));
            foreach (var child in children)
            {
                if (child is DirectoryInfo d)
                {
                    if (d.LinkTarget != null)
                    {
                        continue;
                    }
                    string name = prefix + d.Name + "/";
                    into.Add(new Source { Name = name, Directory = true, Modified = d.LastWriteTime });
                    Collect(d, root, name, into);
                }
                else if (child is FileInfo f)
                {
                    long size = f.Length;
                    if (OperatingSystem.IsWindows() && ZipReader.IsReservedName(f.Name))
                    {
                        continue;
                    }
                    if (f.LinkTarget != null)
                    {
                        var comparison = OperatingSystem.IsWindows() ? StringComparison.OrdinalIgnoreCase : StringComparison.Ordinal;
                        if (f.ResolveLinkTarget(true) is not FileInfo target || !target.Exists || !Path.GetFullPath(target.FullName).StartsWith(root, comparison))
                        {
                            continue;
                        }
                        size = target.Length;
                    }
                    into.Add(new Source { Name = prefix + f.Name, Path = f.FullName, Size = size, Modified = f.LastWriteTime });
                }
            }
        }

        private static void WriteDirectory(Stream output, Record r)
        {
            r.Version = 20;
            r.Flags = ZipFormat.FlagUtf8;
            r.Method = ZipFormat.Store;
            Span<byte> h = stackalloc byte[30];
            h.Clear();
            ZipFormat.W32(h, 0, ZipFormat.SigLocal);
            ZipFormat.W16(h, 4, r.Version);
            ZipFormat.W16(h, 6, r.Flags);
            ZipFormat.W16(h, 10, r.Time);
            ZipFormat.W16(h, 12, r.Date);
            ZipFormat.W16(h, 26, (ushort)r.Name.Length);
            output.Write(h);
            output.Write(r.Name);
        }

        private static bool WriteFile(FileStream output, Record r, Source s, string? password, ushort method, Progress progress, byte[] input)
        {
            bool aes = password != null;
            bool zip64 = (ulong)s.Size >= LocalZip64Limit;
            r.Aes = aes;
            r.AesMethod = method;
            r.Method = aes ? ZipFormat.MethodAes : method;
            r.Flags = (ushort)(ZipFormat.FlagUtf8 | (aes ? ZipFormat.FlagEncrypted : 0));
            r.Version = (ushort)(aes ? 51 : zip64 ? 45 : 20);

            int extraLength = (zip64 ? 20 : 0) + (aes ? 11 : 0);
            var header = new byte[30 + r.Name.Length + extraLength];
            var h = header.AsSpan();
            ZipFormat.W32(h, 0, ZipFormat.SigLocal);
            ZipFormat.W16(h, 4, r.Version);
            ZipFormat.W16(h, 6, r.Flags);
            ZipFormat.W16(h, 8, r.Method);
            ZipFormat.W16(h, 10, r.Time);
            ZipFormat.W16(h, 12, r.Date);
            ZipFormat.W32(h, 18, zip64 ? uint.MaxValue : 0);
            ZipFormat.W32(h, 22, zip64 ? uint.MaxValue : 0);
            ZipFormat.W16(h, 26, (ushort)r.Name.Length);
            ZipFormat.W16(h, 28, (ushort)extraLength);
            r.Name.CopyTo(h.Slice(30));
            int e = 30 + r.Name.Length;
            if (zip64)
            {
                ZipFormat.W16(h, e, ZipFormat.ExtraZip64);
                ZipFormat.W16(h, e + 2, 16);
                e += 20;
            }
            if (aes)
            {
                ZipFormat.WriteAesExtra(h.Slice(e), method);
            }
            output.Write(header);
            long dataStart = output.Position;

            AesCtr? ctr = null;
            IncrementalHash? hmac = null;
            uint crc = 0;
            ulong size = 0;
            try
            {
                if (aes)
                {
                    byte[] salt = RandomNumberGenerator.GetBytes(16);
                    var (enc, mac, verifier) = WinZipAes.Derive(password!, salt, 3);
                    ctr = new AesCtr(enc);
                    hmac = IncrementalHash.CreateHMAC(HashAlgorithmName.SHA1, mac);
                    CryptographicOperations.ZeroMemory(enc);
                    CryptographicOperations.ZeroMemory(mac);
                    output.Write(salt);
                    output.Write(verifier);
                }
                var sink = new EntrySink(output, ctr, hmac);
                using (var src = new FileStream(s.Path!, FileMode.Open, FileAccess.Read, FileShare.ReadWrite, 0, FileOptions.SequentialScan))
                using (Stream target = method == ZipFormat.Deflate ? new DeflateStream(sink, CompressionLevel.Optimal, leaveOpen: true) : sink)
                {
                    int n;
                    while ((n = src.Read(input, 0, input.Length)) > 0)
                    {
                        crc = Crc32.Update(crc, input.AsSpan(0, n));
                        size += (ulong)n;
                        target.Write(input, 0, n);
                        progress.Advance((ulong)n);
                    }
                }
                if (hmac != null)
                {
                    output.Write(hmac.GetHashAndReset().AsSpan(0, ZipFormat.MacLength));
                }
            }
            finally
            {
                ctr?.Dispose();
                hmac?.Dispose();
            }

            long end = output.Position;
            ulong compressed = (ulong)(end - dataStart);
            ulong overhead = aes ? 16UL + 2 + ZipFormat.MacLength : 0;
            if (method == ZipFormat.Deflate && compressed - overhead > size)
            {
                return false;
            }
            if (!zip64 && (size >= Zip64Threshold || compressed >= Zip64Threshold))
            {
                throw new IOException(s.Path + " changed size while it was being zipped");
            }
            r.Crc = aes ? 0 : crc;
            r.CompressedSize = compressed;
            r.Size = size;

            Span<byte> patch = stackalloc byte[12];
            ZipFormat.W32(patch, 0, r.Crc);
            ZipFormat.W32(patch, 4, zip64 ? uint.MaxValue : (uint)compressed);
            ZipFormat.W32(patch, 8, zip64 ? uint.MaxValue : (uint)size);
            output.Position = (long)r.Offset + 14;
            output.Write(patch);
            if (zip64)
            {
                Span<byte> z = stackalloc byte[16];
                ZipFormat.W64(z, 0, size);
                ZipFormat.W64(z, 8, compressed);
                output.Position = (long)r.Offset + 30 + r.Name.Length + 4;
                output.Write(z);
            }
            output.Position = end;
            return true;
        }

        private static void WriteCentral(Stream output, Record r)
        {
            bool zSize = r.Size >= Zip64Threshold, zCompressed = r.CompressedSize >= Zip64Threshold, zOffset = r.Offset >= Zip64Threshold;
            int zip64Length = (zSize ? 8 : 0) + (zCompressed ? 8 : 0) + (zOffset ? 8 : 0);
            int extraLength = (zip64Length > 0 ? zip64Length + 4 : 0) + (r.Aes ? 11 : 0);
            uint external = r.Directory ? (0x41EDu << 16) | 0x10 : 0x81A4u << 16;
            ushort version = zip64Length > 0 && r.Version < 45 ? (ushort)45 : r.Version;

            var h = new byte[46 + r.Name.Length + extraLength];
            var s = h.AsSpan();
            ZipFormat.W32(s, 0, ZipFormat.SigCentral);
            ZipFormat.W16(s, 4, ZipFormat.MadeByUnix);
            ZipFormat.W16(s, 6, version);
            ZipFormat.W16(s, 8, r.Flags);
            ZipFormat.W16(s, 10, r.Method);
            ZipFormat.W16(s, 12, r.Time);
            ZipFormat.W16(s, 14, r.Date);
            ZipFormat.W32(s, 16, r.Crc);
            ZipFormat.W32(s, 20, zCompressed ? uint.MaxValue : (uint)r.CompressedSize);
            ZipFormat.W32(s, 24, zSize ? uint.MaxValue : (uint)r.Size);
            ZipFormat.W16(s, 28, (ushort)r.Name.Length);
            ZipFormat.W16(s, 30, (ushort)extraLength);
            ZipFormat.W32(s, 38, external);
            ZipFormat.W32(s, 42, zOffset ? uint.MaxValue : (uint)r.Offset);
            r.Name.CopyTo(s.Slice(46));
            int e = 46 + r.Name.Length;
            if (zip64Length > 0)
            {
                ZipFormat.W16(s, e, ZipFormat.ExtraZip64);
                ZipFormat.W16(s, e + 2, (ushort)zip64Length);
                e += 4;
                if (zSize)
                {
                    ZipFormat.W64(s, e, r.Size);
                    e += 8;
                }
                if (zCompressed)
                {
                    ZipFormat.W64(s, e, r.CompressedSize);
                    e += 8;
                }
                if (zOffset)
                {
                    ZipFormat.W64(s, e, r.Offset);
                    e += 8;
                }
            }
            if (r.Aes)
            {
                ZipFormat.WriteAesExtra(s.Slice(e), r.AesMethod);
            }
            output.Write(h);
        }

        private static void WriteEnd(Stream output, ulong count, ulong cdOffset, ulong cdSize)
        {
            bool zip64 = count >= 0xffff || cdOffset >= Zip64Threshold || cdSize >= Zip64Threshold;
            if (zip64)
            {
                Span<byte> z = stackalloc byte[76];
                z.Clear();
                ZipFormat.W32(z, 0, ZipFormat.SigZip64End);
                ZipFormat.W64(z, 4, 44);
                ZipFormat.W16(z, 12, ZipFormat.MadeByUnix);
                ZipFormat.W16(z, 14, 45);
                ZipFormat.W64(z, 24, count);
                ZipFormat.W64(z, 32, count);
                ZipFormat.W64(z, 40, cdSize);
                ZipFormat.W64(z, 48, cdOffset);
                ZipFormat.W32(z, 56, ZipFormat.SigZip64Locator);
                ZipFormat.W64(z, 64, cdOffset + cdSize);
                ZipFormat.W32(z, 72, 1);
                output.Write(z);
            }
            Span<byte> h = stackalloc byte[22];
            h.Clear();
            ZipFormat.W32(h, 0, ZipFormat.SigEnd);
            ZipFormat.W16(h, 8, zip64 ? (ushort)0xffff : (ushort)count);
            ZipFormat.W16(h, 10, zip64 ? (ushort)0xffff : (ushort)count);
            ZipFormat.W32(h, 12, zip64 ? uint.MaxValue : (uint)cdSize);
            ZipFormat.W32(h, 16, zip64 ? uint.MaxValue : (uint)cdOffset);
            output.Write(h);
        }
    }

    internal static class ZipReader
    {
        private const string Cp437High = "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ";
        private static readonly UTF8Encoding StrictUtf8 = new UTF8Encoding(false, true);

        private sealed class Entry
        {
            public string Name = "";
            public ushort MadeBy, Flags, Method, Time, Date, AesVersion, AesMethod;
            public byte AesStrength;
            public bool Aes;
            public uint Crc, External;
            public ulong CompressedSize, Size, Offset;
        }

        public static void Extract(string archive, string destination, bool overwrite, string? password, Action<int>? onProgress)
        {
            if (!File.Exists(archive))
            {
                throw new FileNotFoundException("File does not exist, invalid archive path: " + archive);
            }
            using var file = new FileStream(archive, FileMode.Open, FileAccess.Read, FileShare.Read, 1 << 16);
            var entries = ReadDirectory(file);
            string root = Path.GetFullPath(destination);
            Directory.CreateDirectory(root);
            string rootPrefix = root.EndsWith(Path.DirectorySeparatorChar) ? root : root + Path.DirectorySeparatorChar;

            var progress = new Progress(onProgress);
            ulong declared = 0;
            foreach (var e in entries)
            {
                declared = Progress.Add(declared, e.Size);
                progress.AddTotal(Progress.Add(e.Size, 1));
            }
            try
            {
                if (declared > (ulong)new DriveInfo(root).AvailableFreeSpace)
                {
                    throw new IOException("Not enough free space to extract " + archive);
                }
            }
            catch (ArgumentException)
            {
            }
            var buffer = new byte[ZipFormat.Chunk];
            var comparison = OperatingSystem.IsWindows() ? StringComparison.OrdinalIgnoreCase : StringComparison.Ordinal;
            foreach (var e in entries)
            {
                var segments = SafeSegments(e.Name);
                string? target = segments is { Length: > 0 } ? Path.GetFullPath(Path.Combine(root, Path.Combine(segments))) : null;
                bool directory = IsDirectory(e);
                if (target == null || !target.StartsWith(rootPrefix, comparison) || !EnsureDirectories(root, segments!, directory ? segments!.Length : segments!.Length - 1))
                {
                    progress.Advance(Progress.Add(e.Size, 1));
                    continue;
                }
                if (directory)
                {
                    progress.Advance(1);
                    continue;
                }
                bool exists = File.Exists(target) || Directory.Exists(target);
                if (IsSymlink(e) || Directory.Exists(target) || (!overwrite && exists))
                {
                    progress.Advance(Progress.Add(e.Size, 1));
                    continue;
                }
                ExtractEntry(file, e, target, password, progress, buffer);
                progress.Advance(1);
            }
        }

        private static List<Entry> ReadDirectory(FileStream file)
        {
            long length = file.Length;
            if (length < 22)
            {
                throw new InvalidDataException("Not a zip archive");
            }
            int tailLength = (int)Math.Min(length, 22 + 0xffff);
            long tailStart = length - tailLength;
            var tail = new byte[tailLength];
            file.Position = tailStart;
            file.ReadExactly(tail);
            int at = -1, fitting = -1;
            for (int i = tailLength - 22; i >= 0; i--)
            {
                if (ZipFormat.R32(tail, i) != ZipFormat.SigEnd)
                {
                    continue;
                }
                if (at < 0)
                {
                    at = i;
                }
                if (i + 22 + ZipFormat.R16(tail, i + 20) != tailLength)
                {
                    continue;
                }
                if (fitting < 0)
                {
                    fitting = i;
                }
                uint size = ZipFormat.R32(tail, i + 12), offset = ZipFormat.R32(tail, i + 16);
                if (size == uint.MaxValue || offset == uint.MaxValue || ZipFormat.R16(tail, i + 10) == 0xffff || (ulong)offset + size == (ulong)(tailStart + i))
                {
                    fitting = i;
                    break;
                }
            }
            if (fitting >= 0)
            {
                at = fitting;
            }
            if (at < 0)
            {
                throw new InvalidDataException("Not a zip archive (end of central directory not found)");
            }
            ulong count = ZipFormat.R16(tail, at + 10);
            ulong cdSize = ZipFormat.R32(tail, at + 12);
            ulong cdOffset = ZipFormat.R32(tail, at + 16);
            long eocd = tailStart + at;

            if ((count == 0xffff || cdSize == uint.MaxValue || cdOffset == uint.MaxValue) && eocd >= 20)
            {
                var locator = new byte[20];
                file.Position = eocd - 20;
                file.ReadExactly(locator);
                if (ZipFormat.R32(locator, 0) == ZipFormat.SigZip64Locator)
                {
                    ulong zip64End = ZipFormat.R64(locator, 8);
                    if (zip64End > (ulong)(length - 56))
                    {
                        throw new InvalidDataException("Corrupt zip64 end of central directory");
                    }
                    var z = new byte[56];
                    file.Position = (long)zip64End;
                    file.ReadExactly(z);
                    if (ZipFormat.R32(z, 0) != ZipFormat.SigZip64End)
                    {
                        throw new InvalidDataException("Corrupt zip64 end of central directory");
                    }
                    count = ZipFormat.R64(z, 32);
                    cdSize = ZipFormat.R64(z, 40);
                    cdOffset = ZipFormat.R64(z, 48);
                }
            }
            if (cdOffset > (ulong)length || cdSize > (ulong)length - cdOffset || cdSize > (ulong)ZipFormat.MaxCentralDirectory)
            {
                throw new InvalidDataException("Corrupt central directory");
            }

            var cd = new byte[cdSize];
            file.Position = (long)cdOffset;
            file.ReadExactly(cd);
            var entries = new List<Entry>();
            int p = 0;
            for (ulong i = 0; i < count; i++)
            {
                if (p + 46 > cd.Length || ZipFormat.R32(cd, p) != ZipFormat.SigCentral)
                {
                    throw new InvalidDataException("Corrupt central directory");
                }
                int nameLength = ZipFormat.R16(cd, p + 28), extraLength = ZipFormat.R16(cd, p + 30), commentLength = ZipFormat.R16(cd, p + 32);
                if (p + 46 + nameLength + extraLength + commentLength > cd.Length)
                {
                    throw new InvalidDataException("Corrupt central directory");
                }
                var rawName = cd.AsSpan(p + 46, nameLength);
                var e = new Entry
                {
                    MadeBy = ZipFormat.R16(cd, p + 4),
                    Flags = ZipFormat.R16(cd, p + 8),
                    Method = ZipFormat.R16(cd, p + 10),
                    Time = ZipFormat.R16(cd, p + 12),
                    Date = ZipFormat.R16(cd, p + 14),
                    Crc = ZipFormat.R32(cd, p + 16),
                    CompressedSize = ZipFormat.R32(cd, p + 20),
                    Size = ZipFormat.R32(cd, p + 24),
                    External = ZipFormat.R32(cd, p + 38),
                    Offset = ZipFormat.R32(cd, p + 42),
                    Name = DecodeName(rawName),
                };

                int x = p + 46 + nameLength, xEnd = x + extraLength;
                while (x + 4 <= xEnd)
                {
                    ushort id = ZipFormat.R16(cd, x), len = ZipFormat.R16(cd, x + 2);
                    int d = x + 4;
                    if (d + len > xEnd)
                    {
                        break;
                    }
                    if (id == ZipFormat.ExtraZip64)
                    {
                        int q = d;
                        if (e.Size == uint.MaxValue && q + 8 <= d + len)
                        {
                            e.Size = ZipFormat.R64(cd, q);
                            q += 8;
                        }
                        if (e.CompressedSize == uint.MaxValue && q + 8 <= d + len)
                        {
                            e.CompressedSize = ZipFormat.R64(cd, q);
                            q += 8;
                        }
                        if (e.Offset == uint.MaxValue && q + 8 <= d + len)
                        {
                            e.Offset = ZipFormat.R64(cd, q);
                        }
                    }
                    else if (id == ZipFormat.ExtraAes && len >= 7)
                    {
                        e.Aes = true;
                        e.AesVersion = ZipFormat.R16(cd, d);
                        e.AesStrength = cd[d + 4];
                        e.AesMethod = ZipFormat.R16(cd, d + 5);
                    }
                    else if (id == ZipFormat.ExtraUnicodePath && len > 5 && cd[d] == 1 && (e.Flags & ZipFormat.FlagUtf8) == 0 && ZipFormat.R32(cd, d + 1) == Crc32.Update(0, rawName))
                    {
                        try
                        {
                            e.Name = StrictUtf8.GetString(cd, d + 5, len - 5);
                        }
                        catch (DecoderFallbackException)
                        {
                        }
                    }
                    x = d + len;
                }
                entries.Add(e);
                p += 46 + nameLength + extraLength + commentLength;
            }
            var sorted = entries.ToArray();
            Array.Sort(sorted, (a, b) => a.Offset.CompareTo(b.Offset));
            for (int i = 1; i < sorted.Length; i++)
            {
                if (sorted[i].Offset < Progress.Add(sorted[i - 1].Offset, Progress.Add(30, sorted[i - 1].CompressedSize)))
                {
                    throw new InvalidDataException("Overlapping entries in archive");
                }
            }
            return entries;
        }

        private static string DecodeName(ReadOnlySpan<byte> bytes)
        {
            try
            {
                return StrictUtf8.GetString(bytes);
            }
            catch (DecoderFallbackException)
            {
                var sb = new StringBuilder(bytes.Length);
                foreach (byte b in bytes)
                {
                    sb.Append(b < 0x80 ? (char)b : Cp437High[b - 0x80]);
                }
                return sb.ToString();
            }
        }

        private static bool EnsureDirectories(string root, string[] segments, int count)
        {
            string path = root;
            for (int i = 0; i < count; i++)
            {
                path = Path.Combine(path, segments[i]);
                var info = new DirectoryInfo(path);
                if (info.Exists || File.Exists(path))
                {
                    if (!info.Exists || (info.Attributes & FileAttributes.ReparsePoint) != 0)
                    {
                        return false;
                    }
                }
                else
                {
                    Directory.CreateDirectory(path);
                }
            }
            return true;
        }

        private static readonly HashSet<string> ReservedNames = new(StringComparer.OrdinalIgnoreCase)
        {
            "CON", "PRN", "AUX", "NUL", "CONIN$", "CONOUT$",
            "COM0", "COM1", "COM2", "COM3", "COM4", "COM5", "COM6", "COM7", "COM8", "COM9", "COM¹", "COM²", "COM³",
            "LPT0", "LPT1", "LPT2", "LPT3", "LPT4", "LPT5", "LPT6", "LPT7", "LPT8", "LPT9", "LPT¹", "LPT²", "LPT³",
        };

        internal static bool IsReservedName(string name)
        {
            int dot = name.IndexOf('.');
            return ReservedNames.Contains((dot < 0 ? name : name.Substring(0, dot)).TrimEnd(' '));
        }

        private static string SafeSegment(string part, char[] invalid)
        {
            var chars = part.ToCharArray();
            for (int i = 0; i < chars.Length; i++)
            {
                if (chars[i] < 0x20 || Array.IndexOf(invalid, chars[i]) >= 0)
                {
                    chars[i] = '_';
                }
            }
            string safe = new string(chars);
            if (OperatingSystem.IsWindows())
            {
                if (safe.EndsWith('.') || safe.EndsWith(' '))
                {
                    safe += "_";
                }
                if (IsReservedName(safe))
                {
                    safe = "_" + safe;
                }
            }
            return safe;
        }

        private static string[]? SafeSegments(string name)
        {
            string normalized = name.Replace('\\', '/');
            if (normalized.StartsWith('/') || (normalized.Length > 1 && char.IsAsciiLetter(normalized[0]) && normalized[1] == ':'))
            {
                return null;
            }
            var invalid = Path.GetInvalidFileNameChars();
            var kept = new List<string>();
            foreach (var part in normalized.Split('/'))
            {
                if (part.Length == 0 || part == ".")
                {
                    continue;
                }
                if (part == "..")
                {
                    return null;
                }
                kept.Add(SafeSegment(part, invalid));
            }
            return kept.ToArray();
        }

        private static bool IsDirectory(Entry e) => e.Name.EndsWith('/') || e.Name.EndsWith('\\') || (e.Size == 0 && (e.External & 0x10) != 0);

        private static bool IsSymlink(Entry e) => (e.MadeBy >> 8) == 3 && ((e.External >> 16) & 0xF000) == 0xA000;

        private static void ExtractEntry(FileStream file, Entry e, string target, string? password, Progress progress, byte[] buffer)
        {
            long length = file.Length;
            if (e.Offset > (ulong)Math.Max(0, length - 30))
            {
                throw new InvalidDataException($"Corrupt local header for {e.Name}");
            }
            var h = new byte[30];
            file.Position = (long)e.Offset;
            file.ReadExactly(h);
            if (ZipFormat.R32(h, 0) != ZipFormat.SigLocal)
            {
                throw new InvalidDataException($"Corrupt local header for {e.Name}");
            }
            long data = (long)e.Offset + 30 + ZipFormat.R16(h, 26) + ZipFormat.R16(h, 28);
            if (data > length || e.CompressedSize > (ulong)(length - data))
            {
                throw new InvalidDataException($"Truncated entry {e.Name}");
            }
            file.Position = data;
            ulong payload = e.CompressedSize;
            ushort method = e.Method;
            bool verifyCrc = true;
            AesCtr? ctr = null;
            IncrementalHash? hmac = null;
            ZipCrypto? zipCrypto = null;
            try
            {
                if ((e.Flags & ZipFormat.FlagEncrypted) != 0)
                {
                    if (password == null)
                    {
                        throw new InvalidDataException($"Entry {e.Name} is encrypted, a password is required");
                    }
                    if (method == ZipFormat.MethodAes)
                    {
                        if (!e.Aes || e.AesStrength < 1 || e.AesStrength > 3)
                        {
                            throw new InvalidDataException($"Corrupt AES entry {e.Name}");
                        }
                        int saltLength = WinZipAes.SaltLength(e.AesStrength);
                        if (payload < (ulong)(saltLength + 2 + ZipFormat.MacLength))
                        {
                            throw new InvalidDataException($"Corrupt AES entry {e.Name}");
                        }
                        var header = new byte[saltLength + 2];
                        file.ReadExactly(header);
                        var (enc, mac, verifier) = WinZipAes.Derive(password, header[..saltLength], e.AesStrength);
                        bool match = CryptographicOperations.FixedTimeEquals(verifier, header.AsSpan(saltLength, 2));
                        if (match)
                        {
                            ctr = new AesCtr(enc);
                            hmac = IncrementalHash.CreateHMAC(HashAlgorithmName.SHA1, mac);
                        }
                        CryptographicOperations.ZeroMemory(enc);
                        CryptographicOperations.ZeroMemory(mac);
                        if (!match)
                        {
                            throw new InvalidDataException("Wrong password");
                        }
                        payload -= (ulong)(saltLength + 2 + ZipFormat.MacLength);
                        method = e.AesMethod;
                        verifyCrc = e.AesVersion != 2;
                    }
                    else
                    {
                        if (payload < 12)
                        {
                            throw new InvalidDataException($"Corrupt encrypted entry {e.Name}");
                        }
                        var header = new byte[12];
                        file.ReadExactly(header);
                        zipCrypto = new ZipCrypto(password);
                        zipCrypto.Decrypt(header);
                        byte check = (e.Flags & ZipFormat.FlagDataDescriptor) != 0 ? (byte)(e.Time >> 8) : (byte)(e.Crc >> 24);
                        if (header[11] != check)
                        {
                            throw new InvalidDataException("Wrong password");
                        }
                        payload -= 12;
                    }
                }
                if (method != ZipFormat.Store && method != ZipFormat.Deflate)
                {
                    throw new NotSupportedException($"Unsupported compression method {method} for {e.Name}");
                }

                var raw = new EntryReader(file, (long)payload, ctr, hmac, zipCrypto);
                string temp = Path.Combine(Path.GetDirectoryName(target)!, ".nszip-" + Convert.ToHexString(RandomNumberGenerator.GetBytes(6)));
                uint crc = 0;
                ulong written = 0;
                bool ok = false;
                try
                {
                    using (var output = new FileStream(temp, FileMode.CreateNew, FileAccess.Write, FileShare.None, 1 << 16))
                    {
                        using (Stream source = method == ZipFormat.Deflate ? new DeflateStream(raw, CompressionMode.Decompress, leaveOpen: true) : raw)
                        {
                            int n;
                            while ((n = source.Read(buffer, 0, buffer.Length)) > 0)
                            {
                                if ((ulong)n > e.Size - written)
                                {
                                    throw new InvalidDataException($"Size mismatch for {e.Name}");
                                }
                                crc = Crc32.Update(crc, buffer.AsSpan(0, n));
                                written += (ulong)n;
                                output.Write(buffer, 0, n);
                                progress.Advance((ulong)n);
                            }
                        }
                        raw.Drain();
                        if (hmac != null)
                        {
                            var expected = new byte[ZipFormat.MacLength];
                            file.ReadExactly(expected);
                            if (!CryptographicOperations.FixedTimeEquals(hmac.GetHashAndReset().AsSpan(0, ZipFormat.MacLength), expected))
                            {
                                throw new InvalidDataException($"AES authentication failed for {e.Name}, the archive is corrupt");
                            }
                        }
                        if (written != e.Size)
                        {
                            throw new InvalidDataException($"Size mismatch for {e.Name}");
                        }
                        if (verifyCrc && crc != e.Crc)
                        {
                            throw new InvalidDataException($"CRC mismatch for {e.Name}");
                        }
                    }
                    if (ZipFormat.FromDos(e.Time, e.Date) is DateTime modified)
                    {
                        File.SetLastWriteTime(temp, modified);
                    }
                    File.Move(temp, target, overwrite: true);
                    ok = true;
                }
                finally
                {
                    if (!ok)
                    {
                        ZipFormat.TryDelete(temp);
                    }
                }
            }
            finally
            {
                ctr?.Dispose();
                hmac?.Dispose();
            }
        }
    }
}
