package org.nativescript.plugins.googlemaps

import android.app.Activity
import android.app.Application
import android.content.Context
import android.os.Bundle
import android.util.AttributeSet
import com.google.android.gms.maps.MapView

class MapView @JvmOverloads constructor(
  context: Context, attrs: AttributeSet? = null
) : MapView(context, attrs), Application.ActivityLifecycleCallbacks {

  override fun onActivityCreated(p0: Activity, p1: Bundle?) {
    this.onCreate(p1)
  }

  override fun onActivityStarted(p0: Activity) {
    this.onStart()
  }

  override fun onActivityResumed(p0: Activity) {
    this.onResume()
  }

  override fun onActivityPaused(p0: Activity) {
    this.onPause()
  }

  override fun onActivityStopped(p0: Activity) {
    this.onStop()
  }

  override fun onActivitySaveInstanceState(p0: Activity, p1: Bundle) {
    this.onSaveInstanceState(p1)
  }

  override fun onActivityDestroyed(p0: Activity) {
    this.onDestroy()
  }
}
