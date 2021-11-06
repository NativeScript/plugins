package org.nativescript.plugins.twitter

import android.os.Handler
import android.os.Looper
import com.twitter.sdk.android.core.TwitterCore
import com.twitter.sdk.android.core.models.User
import java.util.concurrent.Executors

class Twitter {

	interface Callback<T> {
		fun onSuccess(result: T?)
		fun onError(error: Any?)
	}

	companion object {

		@JvmStatic
		fun verifyUser(
			includeEntities: Boolean,
			skipStatus: Boolean,
			includeEmail: Boolean, callback: Callback<User>
		) {
			executors.execute {
				try {
					val result = TwitterCore.getInstance().apiClient.accountService.verifyCredentials(
						includeEntities, skipStatus, includeEmail
					).execute()
					if (result.isSuccessful) {
						runOnMain {
							callback.onSuccess(result.body())
						}
					} else {
						runOnMain {
							callback.onError(
								Exception(result.message())
							)
						}
					}
				} catch (e: Exception) {
					runOnMain {
						callback.onError(e)
					}
				}
			}
		}

		@JvmStatic
		var executorsCount = 3
			set(value) {
				executors = Executors.newFixedThreadPool(value)
				field = value
			}

		private var executors = Executors.newFixedThreadPool(executorsCount)

		private var handler = Handler(Looper.getMainLooper())
		private fun runOnMain(runnable: Runnable) {
			handler.post(runnable)
		}
	}
}
