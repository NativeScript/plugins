export interface Attachment {
  /**
   * The name used for the attachment.
   * Example:
   *
   *   fileName: 'Cute-Kitten.png'
   */
  fileName: string;

  /**
   * There are various ways to use the path param:
   *
   *   - base64 encoded: 'base64://iVBORw..XYZ'
   *   - local app folder 'file://..
   *   - anywhere on the device: 'file:///..'
   *   - or '/some/path/to/file.png'
   */
  path: string;

  /**
   * Used to help the iOS figure out how to send the file (not used on Android).
   * Example:
   *
   *   mimeType: 'image/png'
   */
  mimeType: string;
}

/**
 * The options object passed into the compose function.
 */
export interface ComposeOptions {
  /**
   * The subject of your email.
   */
  subject?: string;

  /**
   * The plugin will automatically handle plain and html email content.
   */
  body?: string;

  /**
   * A string array of email addresses.
   * Known issue: on Android only the first item in the array is added.
   */
  to?: string[];

  /**
   * A string array of email addresses.
   * Known issue: on Android only the first item in the array is added.
   */
  cc?: string[];

  /**
   * A string array of email addresses.
   * Known issue: on Android only the first item in the array is added.
   */
  bcc?: string[];

  /**
   * An optional Array of attachments.
   */
  attachments?: Array<Attachment>;

  /**
   * @deprecated No longer used, but keeping it around to notify you.
   */
  appPickerTitle?: string;
}

/**
 * No email client may be available, so test first.
 */
export function available(): Promise<boolean>;

/**
 * On iOS the returned boolean indicates whether or not the email was sent by the user.
 * On Android it's always true, unfortunately.
 */
export function compose(options: ComposeOptions): Promise<boolean>;
