import { ImageSource } from '@nativescript/core';

/**
 * Share an image.
 * @param {ImageSource} image - The image to share.
 * @param {string} [subject] - The subject of the share *** ANDROID ONLY ***
 */
export function shareImage(image?: ImageSource, subject?: string);

/**
 * Share text.
 * @param {string} text - Text to share.
 * @param {string} [subject] - The subject of the share *** ANDROID ONLY ***
 */
export function shareText(text: string, subject?: string);

/**
 * Share URL.
 * @param {string} url - URL to share.
 * @param {string} text - Text to share with URL.
 * @param {string} [subject] - The subject of the share *** ANDROID ONLY ***
 */
export function shareUrl(url: string, text: string, subject?: string);
