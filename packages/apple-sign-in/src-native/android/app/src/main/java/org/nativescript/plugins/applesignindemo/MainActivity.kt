package org.nativescript.plugins.applesignindemo

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import org.nativescript.plugins.applesignin.AppleSignIn

class MainActivity : AppCompatActivity() {
	override fun onCreate(savedInstanceState: Bundle?) {
		super.onCreate(savedInstanceState)
		setContentView(R.layout.activity_main)

		val config = AppleSignIn.Configuration()

		config.clientId = "io.github.triniwiz.nativescript.firebasedemo.android"
		config.redirectUri = "https://nativescript-firebase-a55a0.firebaseapp.com/__/auth/handler"
		config.scope = "name email"

		AppleSignIn.show(
			config,
			this
		)
	}
}
