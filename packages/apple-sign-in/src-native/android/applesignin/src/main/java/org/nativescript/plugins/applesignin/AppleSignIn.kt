package org.nativescript.plugins.applesignin

import android.content.Context
import android.content.pm.PackageManager
import android.net.Uri
import androidx.appcompat.app.AppCompatActivity
import androidx.browser.customtabs.CustomTabsIntent
import androidx.browser.customtabs.CustomTabsService.ACTION_CUSTOM_TABS_CONNECTION

import android.content.Intent

import android.content.pm.ResolveInfo


const val CLIENT_ID = "client_id"
const val REDIRECT_URI = "redirect_uri"
const val RESPONSE_TYPE = "response_type"
const val SCOPE = "scope"
const val RESPONSE_MODE = "response_mode"
const val STATE = "state"
const val NONCE = "nonce"

class AppleSignIn {
	class Configuration {
		var clientId = ""
		var redirectUri = ""
		var scope = ""
		var state = ""
		var nonce = ""
	}

	companion object {
		@JvmStatic
		fun show(config: Configuration, activity: AppCompatActivity) {
			val uri = Uri.parse("https://appleid.apple.com/auth/authorize")
				.buildUpon().apply {
					appendQueryParameter(CLIENT_ID, config.clientId)
					appendQueryParameter(REDIRECT_URI, config.redirectUri)
					appendQueryParameter(RESPONSE_TYPE, "code id_token")
					appendQueryParameter(SCOPE, config.scope)
					appendQueryParameter(RESPONSE_MODE, "form_post")
					appendQueryParameter(STATE, config.state)
					if (config.nonce.isNotEmpty()) {
						appendQueryParameter(NONCE, config.nonce)
					}
				}.build()

			if (isSupported(activity)) {
				val customTab = CustomTabsIntent.Builder()
				customTab
					.build().launchUrl(activity, uri)
			}
		}

		@JvmStatic
		fun isSupported(context: Context): Boolean {
			return getCustomTabsPackages(context).isNotEmpty()
		}

		private fun getCustomTabsPackages(context: Context): ArrayList<ResolveInfo> {
			val pm: PackageManager = context.packageManager
			// Get default VIEW intent handler.
			val activityIntent = Intent()
				.setAction(Intent.ACTION_VIEW)
				.addCategory(Intent.CATEGORY_BROWSABLE)
				.setData(Uri.fromParts("http", "", null))

			// Get all apps that can handle VIEW intents.
			val resolvedActivityList = pm.queryIntentActivities(activityIntent, 0)
			val packagesSupportingCustomTabs: ArrayList<ResolveInfo> = ArrayList()
			for (info in resolvedActivityList) {
				val serviceIntent = Intent()
				serviceIntent.action = ACTION_CUSTOM_TABS_CONNECTION
				serviceIntent.setPackage(info.activityInfo.packageName)
				// Check if this package also resolves the Custom Tabs service.
				if (pm.resolveService(serviceIntent, 0) != null) {
					packagesSupportingCustomTabs.add(info)
				}
			}
			return packagesSupportingCustomTabs
		}
	}
}
