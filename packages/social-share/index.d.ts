import { File, ImageSource } from '@nativescript/core';

/**
 * Share an image.
 * @param {ImageSource} image - The image to share.
 * @param {string} [subject] - The subject of the share *** ANDROID ONLY ***
 * @param {string} [caption] - Caption to share alongside the image
 */
export function shareImage(image?: ImageSource, subject?: string, caption?: string);

/**
 * Share text.
 * @param {string} text - Text to share.
 * @param {string} [subject] - The subject of the share *** ANDROID ONLY ***
 */
export function shareText(text: string, subject?: string);

/**
 * Share a PDF document.
 * @param {File} pdf - PDF file to share.
 * @param {string} [subject] - The subject of the share *** ANDROID ONLY ***
 * @param {string} [caption] - Caption to share alongside the file
 */
export function sharePdf(pdf: File, subject?: string, caption?: string);

/**
 * Share URL.
 * @param {string} url - URL to share.
 * @param {string} text - Text to share with URL.
 * @param {string} [subject] - The subject of the share *** ANDROID ONLY ***
 */
export function shareUrl(url: string, text: string, subject?: string);

/**
 * Share via Twitter
 * @param {string} text - Text to share with URL.
 * @param {string} url - URL to share.
 */
export function shareViaTwitter(text?: string, url?: string): Promise<void>;

/**
 * Share via Facebook
 * @param {string} text - Text to share with URL.
 * @param {string} url - URL to share.
 */
export function shareViaFacebook(text?: string, url?: string): Promise<void>;
