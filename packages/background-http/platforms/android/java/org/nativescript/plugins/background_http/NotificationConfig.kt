package org.nativescript.plugins.background_http

import net.gotev.uploadservice.data.UploadNotificationConfig
import net.gotev.uploadservice.data.UploadNotificationStatusConfig
import net.gotev.uploadservice.placeholders.Placeholder
import android.content.Context

import net.gotev.uploadservice.HttpUploadRequest;
import net.gotev.uploadservice.UploadServiceConfig
import net.gotev.uploadservice.data.UploadNotificationAction
import net.gotev.uploadservice.extensions.getCancelUploadIntent

class NotificationConfig {
	val uploadRatePlaceholder = "[upload_rate]"
	val uploadProgressPlaceholder = "[upload_progress]"
	val uploadElapsedTimePlaceholder = "[upload_elapsed_time]"
	var ringToneEnabled: Boolean = false
	val titleForAllStatuses: String = "File Upload"
	var autoClearNotification: Boolean = false
	var notificationChannelId: String? = null


	fun replacePlaceHolders(value: String): String {
		return value.replace(uploadRatePlaceholder, "${Placeholder.UploadRate}")
			.replace(uploadProgressPlaceholder, "${Placeholder.Progress}")
			.replace(uploadElapsedTimePlaceholder, "${Placeholder.ElapsedTime}")
	}

	var onProgressTitle: String = titleForAllStatuses
		set(value) {
			field = replacePlaceHolders(value)
		}

	var onProgressMessage: String = "Uploading at ${Placeholder.UploadRate} (${Placeholder.Progress})"
		set(value) {
			field = replacePlaceHolders(value)
		}


	var onCompleteTitle: String = titleForAllStatuses
		set(value) {
			field = replacePlaceHolders(value)
		}

	var onCompleteMessage: String = "Upload completed successfully in ${Placeholder.ElapsedTime}"
		set(value) {
			field = replacePlaceHolders(value)
		}

	var onErrorTitle: String = titleForAllStatuses
		set(value) {
			field = replacePlaceHolders(value)
		}

	var onErrorMessage: String = "Error during upload"
		set(value) {
			field = replacePlaceHolders(value)
		}


	var onCancelledTitle: String = titleForAllStatuses
		set(value) {
			field = replacePlaceHolders(value)
		}

	var onCancelledMessage: String = "Upload cancelled"
		set(value) {
			field = replacePlaceHolders(value)
		}


	fun into(context: Context, uploadId: String): UploadNotificationConfig {
		return UploadNotificationConfig(
			notificationChannelId = notificationChannelId
				?: UploadServiceConfig.defaultNotificationChannel!!,
			isRingToneEnabled = ringToneEnabled,
			progress = UploadNotificationStatusConfig(
				title = onProgressTitle,
				message = onProgressMessage,
				actions = arrayListOf(
					UploadNotificationAction(
						icon = android.R.drawable.ic_menu_close_clear_cancel,
						title = "Cancel",
						intent = context.getCancelUploadIntent(uploadId)
					)
				)
			),
			success = UploadNotificationStatusConfig(
				title = onCompleteTitle,
				message = onCompleteMessage,
				autoClear = autoClearNotification
			),
			error = UploadNotificationStatusConfig(
				title = onErrorTitle,
				message = onErrorMessage,
				autoClear = autoClearNotification
			),
			cancelled = UploadNotificationStatusConfig(
				title = onCancelledTitle,
				message = onCancelledMessage,
				autoClear = autoClearNotification
			)
		)

	}

	companion object {
		@JvmStatic()
		fun setConfig(request: HttpUploadRequest<*>, config: NotificationConfig) {
			request.setNotificationConfig { context: Context, uploadId: String ->
				config.into(context, uploadId)
			}
		}
	}

}
