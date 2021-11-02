package org.nativescript.plugins.googlesignin

import android.annotation.SuppressLint
import android.app.Activity
import android.content.Context
import android.content.Intent
import android.os.Handler
import android.os.Looper
import com.google.android.gms.auth.GoogleAuthException
import com.google.android.gms.auth.GoogleAuthUtil
import com.google.android.gms.auth.UserRecoverableAuthException
import com.google.android.gms.auth.api.signin.GoogleSignIn
import com.google.android.gms.auth.api.signin.GoogleSignInAccount
import com.google.android.gms.auth.api.signin.GoogleSignInClient
import com.google.android.gms.auth.api.signin.GoogleSignInOptions
import com.google.android.gms.common.ConnectionResult
import com.google.android.gms.common.GoogleApiAvailability
import com.google.android.gms.common.api.Scope
import org.json.JSONArray
import org.json.JSONObject
import java.io.IOException
import java.util.concurrent.Executors

class GoogleSignIn {
	interface Callback<T> {
		fun onSuccess(result: T?)
		fun onError(error: Any?)
	}

	class User {
		companion object {
			@JvmStatic
			fun requestScopes(
				scopes: String,
				user: GoogleSignInAccount,
				activity: Activity,
			) {
				try {
					val values = JSONArray(scopes)
					val parsedScopes = mutableListOf<Scope>()
					for (i in 0 until values.length()) {
						parsedScopes.add(
							Scope(values.getString(i))
						)
					}
					val scopeArgs = parsedScopes.toTypedArray()
					user.requestExtraScopes(
						*scopeArgs
					)
					GoogleSignIn.requestPermissions(activity, REQUEST_CODE_REQUEST_SCOPE, user, *scopeArgs)
				} catch (e: Exception) {
				}
			}

			const val REQUEST_CODE_REQUEST_SCOPE = 10211
		}
	}

	class GoogleUser(val user: GoogleSignInAccount, val accessToken: String?) {}

	companion object {

		@SuppressLint("StaticFieldLeak")
		private var googleSignInClient: GoogleSignInClient? = null

		private var retrieveAccessToken = false

		private var accessToken: String? = null

		@JvmStatic
		fun isConfigured(): Boolean {
			return googleSignInClient != null
		}

		@JvmStatic
		fun playServicesAvailable(
			showPlayServicesUpdateDialog: Boolean,
			activity: Activity
		): Boolean {
			val availability = GoogleApiAvailability.getInstance()
			val status = availability.isGooglePlayServicesAvailable(activity)

			return if (status != ConnectionResult.SUCCESS) {
				if (showPlayServicesUpdateDialog && availability.isUserResolvableError(status)) {
					val requestCode = 210
					availability.getErrorDialog(activity, status, requestCode)?.show()
				}
				false
			} else {
				true
			}
		}


		@JvmStatic
		fun configure(
			options: String,
			activity: Activity,
			callback: Callback<Void>
		) {
			try {
				val parsedOptions = JSONObject(options)
				val builder: GoogleSignInOptions.Builder =
					when (parsedOptions.optString("signInOptions", "default")) {
						"games" -> {
							GoogleSignInOptions.Builder(GoogleSignInOptions.DEFAULT_GAMES_SIGN_IN)
						}
						else -> {
							GoogleSignInOptions.Builder(GoogleSignInOptions.DEFAULT_SIGN_IN).requestEmail()
						}
					}

				parsedOptions.optJSONArray("scopes")?.let {
					for(i in 0 until it.length()) {
						builder.requestScopes(Scope(it.getString(i)))
					}
				}

				retrieveAccessToken = parsedOptions.optBoolean("retrieveAccessToken", false)

				val clientIdIdentifier: Int = activity
					.resources
					.getIdentifier("default_web_client_id", "string", activity.packageName)

				val clientId = parsedOptions.optString("clientId")
				if (clientId.isNotEmpty()) {
					builder.requestIdToken(clientId)
					builder.requestServerAuthCode(clientId)
				} else {
					builder.requestIdToken(activity.getString(clientIdIdentifier))
					builder.requestServerAuthCode(activity.getString(clientIdIdentifier))
				}

				val accountName = parsedOptions.optString("accountName")

				if (accountName.isNotEmpty()) {
					builder.setAccountName(accountName)
				}


				val hostedDomain = parsedOptions.optString("hostedDomain")

				if (hostedDomain.isNotEmpty()) {
					builder.setHostedDomain(hostedDomain)
				}

				googleSignInClient = GoogleSignIn.getClient(activity, builder.build())

				callback.onSuccess(null)

			} catch (e: Exception) {
				callback.onError(e)
			}
		}

		@JvmStatic
		fun disconnect(callback: Callback<Void>) {
			revokeAccess(callback)
		}

		@JvmStatic
		fun signIn(activity: Activity) {
			activity.startActivityForResult(
				googleSignInClient?.signInIntent,
				REQUEST_CODE_SIGNIN
			)
		}

		@JvmStatic
		fun signInSilently(callback: Callback<GoogleUser>) {
			googleSignInClient?.silentSignIn()?.addOnCompleteListener(executors) {
				if (it.isSuccessful) {
					var token: String? = null
					if (retrieveAccessToken) {
						try {
							token = getAccessToken(googleSignInClient!!.applicationContext, it.result)
							accessToken = token
						} catch (e: Exception) {
						}
					}
					val user = GoogleUser(
						it.result, token
					)
					runOnMain {
						callback.onSuccess(
							user
						)
					}
				} else {
					runOnMain {
						callback.onError(it.exception)
					}
				}
			}
		}

		@JvmStatic
		fun signOut(callback: Callback<Void>) {
			googleSignInClient?.signOut()
				?.addOnCompleteListener(executors) {
					if (it.isSuccessful) {
						accessToken = null
						runOnMain {
							callback.onSuccess(it.result)
						}
					} else {
						runOnMain {
							callback.onError(it.exception)
						}
					}
				}
		}

		@JvmStatic
		fun revokeAccess(callback: Callback<Void>) {
			googleSignInClient?.revokeAccess()
				?.addOnCompleteListener(executors) {
					if (it.isSuccessful) {
						accessToken = null
						runOnMain {
							callback.onSuccess(it.result)
						}
					} else {
						runOnMain {
							callback.onError(it.exception)
						}
					}
				}
		}

		@JvmStatic
		fun isSignedIn(context: Context): Boolean {
			return GoogleSignIn.getLastSignedInAccount(context) != null
		}

		@JvmStatic
		fun getCurrentUser(context: Context): GoogleUser? {
			val account = GoogleSignIn.getLastSignedInAccount(context)
			if (account != null) {
				return GoogleUser(account, accessToken)
			}
			return null
		}

		@JvmStatic
		fun clearCachedAccessToken(context: Context, token: String) {
			accessToken = null
			GoogleAuthUtil.clearToken(context, token)
		}

		private fun scopesToString(scopes: Set<Scope>): String {
			val sb = StringBuilder("oauth2:")
			for (scope in scopes) {
				sb.append(scopes.toString()).append(" ")
			}
			return sb.toString().trim { it <= ' ' }
		}

		@Throws(
			IOException::class,
			UserRecoverableAuthException::class,
			GoogleAuthException::class,
			Exception::class
		)

		private fun getAccessToken(context: Context): String? {
			return getAccessToken(context, GoogleSignIn.getLastSignedInAccount(context))
		}

		private fun getAccessToken(context: Context, account: GoogleSignInAccount?): String? {
			if (account?.account != null) {
				return GoogleAuthUtil.getToken(
					context,
					account.account,
					scopesToString(account.grantedScopes)
				)
			} else {
				throw Exception("getTokens requires a user to be signed in")
			}
		}

		@JvmStatic
		fun getTokens(context: Context, callback: Callback<String>) {
			executors.submit {
				try {
					val account = GoogleSignIn.getLastSignedInAccount(context)
						?: throw Exception("getTokens requires a user to be signed in")
					val token = getAccessToken(context)
					val tokens = JSONObject()
					tokens.put("idToken", account.idToken)
					tokens.put("accessToken", token)
					runOnMain {
						callback.onSuccess(tokens.toString())
					}
				} catch (e: Exception) {
					runOnMain {
						callback.onError(Exception("getTokens requires a user to be signed in"))
					}
				}
			}
		}


		@JvmStatic
		fun getSignedInAccountFromIntent(intent: Intent, callback: Callback<GoogleUser>) {
			GoogleSignIn.getSignedInAccountFromIntent(intent)
				.addOnCompleteListener(executors) {
					if (it.isSuccessful) {
						if (retrieveAccessToken) {
							try {
								accessToken = getAccessToken(googleSignInClient!!.applicationContext)
							} catch (e: Exception) {
							}
						}
						val user = GoogleUser(it.result, accessToken)
						runOnMain {
							callback.onSuccess(user)
						}
					} else {
						runOnMain {
							callback.onError(it.exception)
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

		const val REQUEST_CODE_SIGNIN = 10210
	}
}
