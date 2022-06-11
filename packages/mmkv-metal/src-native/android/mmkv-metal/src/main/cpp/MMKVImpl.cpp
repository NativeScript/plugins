//
// Created by Osei Fortune on 10/06/2022.
//

#include "MMKVImpl.h"
#include <MMKV.h>
#include <MMBuffer.h>
#include <MMKVPredef.h>
#include <MMKVLog.h>
#include <MemoryFile.h>
#include <cstring>


using namespace mmkv;
using namespace std;

MMKVImpl::MMKVImpl(MMKV *mmkv) : mmkv_(mmkv) {

}

void MMKVImpl::Init(v8::Isolate *isolate) {
    v8::Locker locker(isolate);
    v8::Isolate::Scope isolate_scope(isolate);
    v8::HandleScope handle_scope(isolate);
    auto ctor = GetCtor(isolate);
    auto context = isolate->GetCurrentContext();
    auto global = context->Global();
    auto func = ctor->GetFunction(context).ToLocalChecked();
    auto initialize = v8::FunctionTemplate::New(isolate, &Initialize);
    func->Set(context, Helpers::ConvertToV8String(isolate, "initialize"),
              initialize->GetFunction(context).ToLocalChecked());
    global->Set(context, Helpers::ConvertToV8String(isolate, "NSCMMKV"), func);
}

MMKVImpl *MMKVImpl::GetPointer(v8::Local<v8::Object> object) {
    auto ptr = object->GetInternalField(0).As<v8::External>()->Value();
    if (ptr == nullptr) {
        return nullptr;
    }
    return static_cast<MMKVImpl *>(ptr);
}

v8::Local<v8::FunctionTemplate> MMKVImpl::GetCtor(v8::Isolate *isolate) {
    auto cache = Caches::Get(isolate);
    auto ctor = cache->MMKVTmpl.get();
    if (ctor != nullptr) {
        return ctor->Get(isolate);
    }

    v8::Local<v8::FunctionTemplate> ctorTmpl = v8::FunctionTemplate::New(isolate, &Create);
    ctorTmpl->InstanceTemplate()->SetInternalFieldCount(1);
    ctorTmpl->SetClassName(Helpers::ConvertToV8String(isolate, "NSCMMKV"));

    auto tmpl = ctorTmpl->InstanceTemplate();
    tmpl->SetInternalFieldCount(1);
    tmpl->Set(
            Helpers::ConvertToV8String(isolate, "contains"),
            v8::FunctionTemplate::New(isolate, &Contains)
    );
    tmpl->Set(
            Helpers::ConvertToV8String(isolate, "set"),
            v8::FunctionTemplate::New(isolate, &Set)
    );
    tmpl->Set(
            Helpers::ConvertToV8String(isolate, "getBoolean"),
            v8::FunctionTemplate::New(isolate, &GetBoolean)
    );
    tmpl->Set(
            Helpers::ConvertToV8String(isolate, "getString"),
            v8::FunctionTemplate::New(isolate, &GetString)
    );
    tmpl->Set(
            Helpers::ConvertToV8String(isolate, "getNumber"),
            v8::FunctionTemplate::New(isolate, &GetNumber)
    );
    tmpl->Set(
            Helpers::ConvertToV8String(isolate, "getBytes"),
            v8::FunctionTemplate::New(isolate, &GetBytes)
    );
    tmpl->Set(
            Helpers::ConvertToV8String(isolate, "delete"),
            v8::FunctionTemplate::New(isolate, &Delete)
    );
    cache->MMKVTmpl =
            std::make_unique<v8::Persistent<v8::FunctionTemplate >>(isolate, ctorTmpl);
    return ctorTmpl;
}


void MMKVImpl::Initialize(const v8::FunctionCallbackInfo<v8::Value> &args) {
    v8::Isolate *isolate = args.GetIsolate();
    std::string path = Helpers::ConvertFromV8String(isolate, args[0]);
    MMKV::initializeMMKV(path);
}

void MMKVImpl::Create(const v8::FunctionCallbackInfo<v8::Value> &args) {
    v8::Isolate *isolate = args.GetIsolate();
    auto context = isolate->GetCurrentContext();
    MMKV *val = nullptr;
    auto ret = args.This();

    Helpers::SetInternalClassName(isolate, ret, "NSCMMKV");

    if (args.Length() == 1) {
        auto opts = args[0];
        if (opts->IsObject()) {
            auto options = opts->ToObject(context).ToLocalChecked();
            auto id = options->Get(context, Helpers::ConvertToV8String(isolate, "id"));
            auto path = options->Get(context, Helpers::ConvertToV8String(isolate, "path"));
            auto encryptionKey = options->Get(context,
                                              Helpers::ConvertToV8String(isolate, "encryptionKey"));
            auto mode = options->Get(context, Helpers::ConvertToV8String(isolate, "mode"));


            if (!id.IsEmpty() && !encryptionKey.IsEmpty() && !path.IsEmpty()) {
                auto key = Helpers::ConvertFromV8String(isolate, encryptionKey.ToLocalChecked());
                auto localPath = Helpers::ConvertFromV8String(isolate, path.ToLocalChecked());
                val = MMKV::mmkvWithID(
                        Helpers::ConvertFromV8String(isolate, id.ToLocalChecked()),
                        mmkv::DEFAULT_MMAP_SIZE, MMKV_SINGLE_PROCESS,
                        &key,
                        &localPath
                );
            } else if (!id.IsEmpty() && !encryptionKey.IsEmpty() && !mode.IsEmpty()) {
                auto key = Helpers::ConvertFromV8String(isolate, encryptionKey.ToLocalChecked());
                auto realMode = Helpers::ConvertFromV8String(isolate, mode.ToLocalChecked());
                val = MMKV::mmkvWithID(
                        Helpers::ConvertFromV8String(isolate, id.ToLocalChecked()),
                        mmkv::DEFAULT_MMAP_SIZE,
                        std::strcmp(realMode.c_str(), "MULTI") ? MMKV_MULTI_PROCESS
                                                               : MMKV_SINGLE_PROCESS,
                        &key,
                        nullptr
                );

            } else if (!id.IsEmpty() && !encryptionKey.IsEmpty() && path.IsEmpty() &&
                       mode.IsEmpty()) {
                auto key = Helpers::ConvertFromV8String(isolate, encryptionKey.ToLocalChecked());
                val = MMKV::mmkvWithID(
                        Helpers::ConvertFromV8String(isolate, id.ToLocalChecked()),
                        mmkv::DEFAULT_MMAP_SIZE,
                        MMKV_SINGLE_PROCESS,
                        &key,
                        nullptr
                );


            } else if (!id.IsEmpty() && encryptionKey.IsEmpty() && !path.IsEmpty() &&
                       mode.IsEmpty()) {
                auto localPath = Helpers::ConvertFromV8String(isolate, path.ToLocalChecked());
                val = MMKV::mmkvWithID(
                        Helpers::ConvertFromV8String(isolate, id.ToLocalChecked()),
                        mmkv::DEFAULT_MMAP_SIZE, MMKV_SINGLE_PROCESS,
                        nullptr,
                        &localPath
                );

            } else if (!id.IsEmpty() && encryptionKey.IsEmpty() && !mode.IsEmpty() &&
                       path.IsEmpty()) {
                auto realMode = Helpers::ConvertFromV8String(isolate, mode.ToLocalChecked());
                val = MMKV::mmkvWithID(
                        Helpers::ConvertFromV8String(isolate, id.ToLocalChecked()),
                        mmkv::DEFAULT_MMAP_SIZE,
                        std::strcmp(realMode.c_str(), "MULTI") ? MMKV_MULTI_PROCESS
                                                               : MMKV_SINGLE_PROCESS,
                        nullptr,
                        nullptr
                );

            } else if (!id.IsEmpty() && encryptionKey.IsEmpty() && path.IsEmpty() &&
                       mode.IsEmpty()) {
                val = MMKV::mmkvWithID(
                        Helpers::ConvertFromV8String(isolate, id.ToLocalChecked()),
                        mmkv::DEFAULT_MMAP_SIZE,
                        MMKV_SINGLE_PROCESS,
                        nullptr,
                        nullptr
                );
            } else if (!id.IsEmpty() && !encryptionKey.IsEmpty() && path.IsEmpty() &&
                       mode.IsEmpty()) {
                auto key = Helpers::ConvertFromV8String(isolate, encryptionKey.ToLocalChecked());
                val = MMKV::defaultMMKV(MMKV_SINGLE_PROCESS, &key);
            }

        }
    }


    if (val == nullptr) {
        val = MMKV::defaultMMKV();
    }
    auto *impl = new MMKVImpl(val);
    auto ext = v8::External::New(isolate, impl);

    if (ret->InternalFieldCount() > 0) {
        ret->SetInternalField(0, ext);
    } else {
        ret->SetPrivate(context,
                        v8::Private::New(isolate, Helpers::ConvertToV8String(isolate, "ptr")),
                        ext);
    }
    args.GetReturnValue().Set(ret);
}

void MMKVImpl::Contains(const v8::FunctionCallbackInfo<v8::Value> &args) {
    auto isolate = args.GetIsolate();
    auto ptr = GetPointer(args.Holder());
    if (ptr != nullptr) {
        auto key = Helpers::ConvertFromV8String(isolate, args[0]);
        args.GetReturnValue().Set(ptr->mmkv_->containsKey(""));
        return;
    }
    args.GetReturnValue().Set(false);
}

void MMKVImpl::Set(const v8::FunctionCallbackInfo<v8::Value> &args) {
    auto isolate = args.GetIsolate();
    auto context = isolate->GetCurrentContext();
    auto ptr = GetPointer(args.Holder());
    if (ptr != nullptr && args.Length() == 2) {
        auto key = Helpers::ConvertFromV8String(isolate, args[0]);
        auto value = args[1];
        if (value->IsBoolean()) {
            ptr->mmkv_->set(value->BooleanValue(isolate), key);
        } else if (value->IsString()) {
            ptr->mmkv_->set(
                    Helpers::ConvertFromV8String(isolate, value),
                    key
            );
        } else if (value->IsNumber()) {
            ptr->mmkv_->set(
                    value->NumberValue(context).ToChecked(),
                    key
            );
        } else if (value->IsTypedArray()) {
            auto array = value.As<v8::TypedArray>();
            auto buffer = array->Buffer();
            auto store = buffer->GetBackingStore();
            auto data = static_cast<u_int8_t *>(store->Data()) + array->ByteOffset();
            auto len = array->Length();
            ptr->mmkv_->set(
                    mmkv::MMBuffer(data, len),
                    key
            );
        }
    }
}

void MMKVImpl::GetBoolean(const v8::FunctionCallbackInfo<v8::Value> &args) {
    auto isolate = args.GetIsolate();
    auto ptr = GetPointer(args.Holder());
    if (ptr != nullptr) {
        auto key = Helpers::ConvertFromV8String(isolate, args[0]);
        bool hasValue;
        auto ret = ptr->mmkv_->getBool(key, false, &hasValue);
        if (hasValue) {
            args.GetReturnValue().Set(ret);
        }
        return;
    }
    args.GetReturnValue().Set(v8::Null(isolate));
}

void MMKVImpl::GetString(const v8::FunctionCallbackInfo<v8::Value> &args) {
    auto isolate = args.GetIsolate();
    auto ptr = GetPointer(args.Holder());
    if (ptr != nullptr) {
        auto key = Helpers::ConvertFromV8String(isolate, args[0]);
        std::string buf;
        ptr->mmkv_->getString(key, buf);
        args.GetReturnValue().Set(
                Helpers::ConvertToV8String(isolate, buf)
        );
        return;
    }
    args.GetReturnValue().Set(v8::Null(isolate));
}

void MMKVImpl::GetNumber(const v8::FunctionCallbackInfo<v8::Value> &args) {
    auto isolate = args.GetIsolate();
    auto ptr = GetPointer(args.Holder());
    if (ptr != nullptr) {
        auto key = Helpers::ConvertFromV8String(isolate, args[0]);

        bool hasValue;
        auto ret = ptr->mmkv_->getDouble(key, 0, &hasValue);

        if (hasValue) {
            args.GetReturnValue().Set(ret);
            return;
        }
    }
    args.GetReturnValue().Set(v8::Null(isolate));
}

void MMKVImpl::GetBytes(const v8::FunctionCallbackInfo<v8::Value> &args) {
    auto isolate = args.GetIsolate();
    auto context = isolate->GetCurrentContext();
    auto ptr = GetPointer(args.Holder());
    if (ptr != nullptr) {
        auto key = Helpers::ConvertFromV8String(isolate, args[0]);

        if (ptr->mmkv_->containsKey(key)) {
            auto ret = ptr->mmkv_->getBytes(key);
            void *data = malloc(ret.length());
            std::memcpy(&data, ret.getPtr(), 1);
            auto buf = v8::ArrayBuffer::New(isolate, data, ret.length(),
                                            v8::ArrayBufferCreationMode::kInternalized);

//            auto store = v8::ArrayBuffer::NewBackingStore(data, ret.length(),
//                                                          [](void *data, size_t length,
//                                                             void *deleter_data) {
//                                                              if (data != nullptr) {
//                                                                  free(data);
//                                                              }
//                                                          }, nullptr);
//            args.GetReturnValue().Set(
//                    v8::ArrayBuffer::New(isolate, std::move(store))
//            );
            args.GetReturnValue().Set(buf);
        }
    }
    args.GetReturnValue().Set(v8::Null(isolate));
}

void MMKVImpl::Delete(const v8::FunctionCallbackInfo<v8::Value> &args) {
    auto isolate = args.GetIsolate();
    auto ptr = GetPointer(args.Holder());
    if (ptr != nullptr) {
        auto key = Helpers::ConvertFromV8String(isolate, args[0]);
        ptr->mmkv_->removeValueForKey(key);
    }
}
