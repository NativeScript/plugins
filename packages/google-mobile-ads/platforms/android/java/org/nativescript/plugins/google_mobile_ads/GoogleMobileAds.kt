package org.nativescript.plugins.google_mobile_ads

import android.app.Activity
import android.content.Context
import android.graphics.Bitmap
import android.graphics.drawable.Drawable
import android.os.Bundle
import android.os.Handler
import android.os.Looper
import android.util.Log
import androidx.core.graphics.drawable.toBitmap
import com.google.ads.mediation.admob.AdMobAdapter
import com.google.android.gms.ads.*
import com.google.android.gms.ads.admanager.AdManagerAdRequest
import com.google.android.gms.ads.formats.AdManagerAdViewOptions
import com.google.android.gms.ads.initialization.AdapterStatus
import com.google.android.gms.ads.interstitial.InterstitialAdLoadCallback
import com.google.android.gms.ads.nativead.NativeAdOptions
import com.google.android.gms.ads.rewarded.RewardItem
import com.google.android.gms.ads.rewarded.RewardedAdLoadCallback
import com.google.android.gms.ads.rewardedinterstitial.RewardedInterstitialAdLoadCallback
import com.google.android.ump.*
import org.json.JSONArray
import org.json.JSONObject
import java.util.concurrent.Executors

private const val NATIVE_AD_OPTIONS_KEY = "nativeAdOptions"

private const val AD_CHOICES_PLACEMENT_KEY = "adChoicesPlacement"
private const val AD_CHOICES_PLACEMENT_TOP_LEFT_KEY = "topLeft"
private const val AD_CHOICES_PLACEMENT_TOP_RIGHT_KEY = "topRight"
private const val AD_CHOICES_PLACEMENT_BOTTOM_RIGHT_KEY = "bottomRight"
private const val AD_CHOICES_PLACEMENT_BOTTOM_LEFT_KEY = "bottomLeft"

private const val MEDIA_ASPECT_RATIO_KEY = "mediaAspectRatio"
private const val MEDIA_ASPECT_RATIO_LANDSCAPE_KEY = "landscape"
private const val MEDIA_ASPECT_RATIO_PORTRAIT_KEY = "portrait"
private const val MEDIA_ASPECT_RATIO_SQUARE_KEY = "square"
private const val MEDIA_ASPECT_RATIO_SQUARE_ANY = "any"

private const val CUSTOM_MUTE_THIS_ADD_KEY = "customMuteThisAdd"

private const val MULTIPLE_IMAGES_KEY = "multipleImages"
private const val RETURN_URLS_FOR_IMAGE_ASSETS_KEY = "returnUrlsForImageAssets"

private const val VIDEO_OPTIONS_KEY = "videoOptions"
private const val VIDEO_OPTIONS_START_MUTED_KEY = "startMuted"
private const val VIDEO_OPTIONS_CLICK_TO_EXPAND_REQUESTED_KEY = "clickToExpandRequested"
private const val VIDEO_OPTIONS_CUSTOM_CONTROLS_REQUESTED_KEY = "customControlsRequested"

private const val AD_SIZES_KEY = "adSizes"

private const val AD_MANAGER_AD_VIEW_OPTIONS_KEY = "adManagerAdViewOptions"

private const val AD_MANAGER_AD_VIEW_OPTIONS_MANUAL_IMPRESSIONS_ENABLED_KEY =
  "manualImpressionsEnabled"

private const val AD_MANAGER_AD_VIEW_OPTIONS_SHOULD_DELAY_BANNER_RENDERING_KEY =
  "shouldDelayBannerRendering"

private const val AD_MANAGER_AD_VIEW_LOADED_EVENT = "adManagerAdViewLoaded"

private const val AD_MANAGER_AD_CLICKED_EVENT = "adClicked"

private const val AD_MANAGER_AD_CLOSED_EVENT = "adClosed"

private const val AD_MANAGER_AD_FAILED_TO_LOAD_EVENT = "adFailedToLoad"

private const val AD_MANAGER_AD_IMPRESSION_EVENT = "adImpression"

private const val AD_MANAGER_AD_LOADED_EVENT = "adLoaded"

private const val AD_MANAGER_AD_OPENED_EVENT = "adOpened"

private const val AD_MANAGER_AD_NATIVE_AD_LOADED_EVENT = "adNativeAdLoaded"

private const val DEBUG_SETTINGS_KEY = "debugSettings"
private const val GEOGRAPHY_KEY = "geography"
private const val DEVICE_IDS_KEY = "deviceIds"
private const val EMULATOR_KEY = "emulator"
private const val FORCE_TESTING_KEY = "forceTesting"
private const val TAG_FOR_UNDER_AGE_OF_CONSENT_KEY = "tagForUnderAgeOfConsent"
private const val ADMOB_ID_KEY = "adMobAppId"


private const val CONTENT_URL_KEY = "contentUrl"
private const val KEYWORDS_KEY = "keywords"
private const val NETWORK_EXTRAS_KEY = "networkExtras"
private const val REQUEST_AGENT_KEY = "requestAgent"
private const val REQUEST_NON_PERSONALIZED_ADS_ONLY_KEY = "requestNonPersonalizedAdsOnly"

private const val PUBLISHER_PROVIDER_ID_KEY = "publisherProvidedId"
private const val CUSTOM_TARGETING_KEY = "customTargeting"
private const val CATEGORY_EXCLUSIONS_KEY = "categoryExclusions"
private const val AD_STRING_KEY = "adString"


private const val AD_CLICKED_EVENT = "adClicked"
private const val AD_CLOSED_EVENT = "adClosed"
private const val AD_FAILED_TO_LOAD_EVENT = "adFailedToLoad"
private const val AD_LOADED_EVENT = "adLoaded"
private const val AD_OPENED_EVENT = "adOpened"
private const val AD_IMPRESSION_EVENT = "adImpression"
private const val AD_FAILED_TO_SHOW_FULL_SCREEN_CONTENT = " adFailedToShowFullScreenContent"


class GoogleMobileAds {
  interface Callback<T> {
    fun onSuccess(result: T?)
    fun onError(error: Any?)
  }

  interface AdCallback {
    fun onEvent(event: String, result: Any?)
  }

  interface AdLoaderCallback {
    fun onEvent(event: String, result: Any?)
  }

  class RewardedAd {
    companion object {
      @JvmStatic
      fun load(activity: Activity, adUnitId: String, request: String, callback: AdCallback): AdRequest {
        val adRequest = buildRequest(request)
        com.google.android.gms.ads.rewarded.RewardedAd.load(
          activity,
          adUnitId,
          adRequest,
          object :
            RewardedAdLoadCallback() {
            override fun onAdFailedToLoad(error: LoadAdError) {
              callback.onEvent(AD_FAILED_TO_LOAD_EVENT, error)
            }

            override fun onAdLoaded(ad: com.google.android.gms.ads.rewarded.RewardedAd) {
              ad.fullScreenContentCallback = object : FullScreenContentCallback() {
                override fun onAdDismissedFullScreenContent() {
                  callback.onEvent(AD_CLOSED_EVENT, null)
                }

                override fun onAdImpression() {
                  callback.onEvent(AD_IMPRESSION_EVENT, null)
                }

                override fun onAdFailedToShowFullScreenContent(error: AdError) {
                  callback.onEvent(AD_FAILED_TO_SHOW_FULL_SCREEN_CONTENT, error)
                }

                override fun onAdShowedFullScreenContent() {
                  callback.onEvent(AD_OPENED_EVENT, null)
                }
              }
              callback.onEvent(AD_LOADED_EVENT, ad)
            }
          })
        return adRequest
      }

      @JvmStatic
      fun show(
        activity: Activity,
        ad: com.google.android.gms.ads.rewarded.RewardedAd,
        callback: Callback<RewardItem>
      ) {
        ad.show(activity) {
          callback.onSuccess(it)
        }
      }
    }
  }

  class RewardedInterstitialAd {
    companion object {
      @JvmStatic
      fun load(activity: Activity, adUnitId: String, request: String, callback: AdCallback): AdRequest {
        val adRequest = buildRequest(request)
        com.google.android.gms.ads.rewardedinterstitial.RewardedInterstitialAd.load(
          activity,
          adUnitId,
          adRequest,
          object :
            RewardedInterstitialAdLoadCallback() {
            override fun onAdFailedToLoad(error: LoadAdError) {
              callback.onEvent(AD_FAILED_TO_LOAD_EVENT, error)
            }

            override fun onAdLoaded(ad: com.google.android.gms.ads.rewardedinterstitial.RewardedInterstitialAd) {
              ad.fullScreenContentCallback = object : FullScreenContentCallback() {
                override fun onAdDismissedFullScreenContent() {
                  callback.onEvent(AD_CLOSED_EVENT, null)
                }

                override fun onAdImpression() {
                  callback.onEvent(AD_IMPRESSION_EVENT, null)
                }

                override fun onAdFailedToShowFullScreenContent(error: AdError) {
                  callback.onEvent(AD_FAILED_TO_SHOW_FULL_SCREEN_CONTENT, error)
                }

                override fun onAdShowedFullScreenContent() {
                  callback.onEvent(AD_OPENED_EVENT, null)
                }
              }
              callback.onEvent(AD_LOADED_EVENT, ad)
            }
          })
        return adRequest
      }

      @JvmStatic
      fun show(
        activity: Activity,
        ad: com.google.android.gms.ads.rewardedinterstitial.RewardedInterstitialAd,
        callback: Callback<RewardItem>
      ) {
        ad.show(activity) {
          callback.onSuccess(it)
        }
      }
    }
  }

  class InterstitialAd {
    companion object {
      @JvmStatic
      fun load(
        activity: Activity,
        adUnitId: String,
        request: String,
        callback: AdCallback
      ): AdRequest {
        val adRequest = buildRequest(request)
        com.google.android.gms.ads.interstitial.InterstitialAd.load(
          activity,
          adUnitId,
          adRequest,
          object :
            InterstitialAdLoadCallback() {
            override fun onAdFailedToLoad(error: LoadAdError) {
              callback.onEvent(AD_FAILED_TO_LOAD_EVENT, error)
            }

            override fun onAdLoaded(ad: com.google.android.gms.ads.interstitial.InterstitialAd) {
              ad.fullScreenContentCallback = object : FullScreenContentCallback() {
                override fun onAdDismissedFullScreenContent() {
                  callback.onEvent(AD_CLOSED_EVENT, null)
                }

                override fun onAdImpression() {
                  callback.onEvent(AD_IMPRESSION_EVENT, null)
                }

                override fun onAdFailedToShowFullScreenContent(error: AdError) {
                  callback.onEvent(AD_FAILED_TO_SHOW_FULL_SCREEN_CONTENT, error)
                }

                override fun onAdShowedFullScreenContent() {
                  callback.onEvent(AD_OPENED_EVENT, null)
                }
              }
              callback.onEvent(AD_LOADED_EVENT, ad)
            }
          })
        return adRequest
      }
    }
  }

  class NativeAd {

    enum class BannerAdSize(private val value: String) {
      BANNER("BANNER"),
      FLUID("FLUID"),
      FULL_BANNER("FULL_BANNER"),
      LARGE_BANNER("LARGE_BANNER"),
      LEADERBOARD("LEADERBOARD"),
      MEDIUM_RECTANGLE("MEDIUM_RECTANGLE"),
      SMART_BANNER("SMART_BANNER"),
      WIDE_SKYSCRAPER("WIDE_SKYSCRAPER"),
      INVALID("INVALID");

      override fun toString(): String {
        return value
      }

      fun toAdSize(): AdSize {
        return when (this) {
          BANNER -> AdSize.BANNER
          FLUID -> AdSize.FLUID
          FULL_BANNER -> AdSize.FULL_BANNER
          LARGE_BANNER -> AdSize.LARGE_BANNER
          LEADERBOARD -> AdSize.LEADERBOARD
          MEDIUM_RECTANGLE -> AdSize.MEDIUM_RECTANGLE
          SMART_BANNER -> AdSize.SMART_BANNER
          WIDE_SKYSCRAPER -> AdSize.WIDE_SKYSCRAPER
          else -> AdSize.INVALID
        }
      }

      companion object {
        fun fromString(value: String): BannerAdSize {
          return when (value) {
            "BANNER" -> BANNER
            "FLUID" -> FLUID
            "FULL_BANNER" -> FULL_BANNER
            "LARGE_BANNER" -> LARGE_BANNER
            "LEADERBOARD" -> LEADERBOARD
            "MEDIUM_RECTANGLE" -> MEDIUM_RECTANGLE
            "SMART_BANNER" -> SMART_BANNER
            "WIDE_SKYSCRAPER" -> WIDE_SKYSCRAPER
            else -> INVALID
          }
        }
      }

    }

    companion object {

      @JvmStatic
      fun createLoader(
        activity: Activity,
        adUnitId: String,
        configuration: String,
        callback: AdLoaderCallback
      ): AdLoader {
        val adLoader = AdLoader.Builder(activity, adUnitId)
        try {
          val config = JSONObject(configuration)

          config.optJSONObject(NATIVE_AD_OPTIONS_KEY)?.let { adOptions ->
            val nativeAdOptions = NativeAdOptions.Builder()

            if (adOptions.has(AD_CHOICES_PLACEMENT_KEY)) {
              when (adOptions.getString(AD_CHOICES_PLACEMENT_KEY)) {
                AD_CHOICES_PLACEMENT_TOP_LEFT_KEY -> {
                  nativeAdOptions.setAdChoicesPlacement(
                    NativeAdOptions.ADCHOICES_TOP_LEFT
                  )
                }
                AD_CHOICES_PLACEMENT_TOP_RIGHT_KEY -> {
                  nativeAdOptions.setAdChoicesPlacement(
                    NativeAdOptions.ADCHOICES_TOP_RIGHT
                  )
                }
                AD_CHOICES_PLACEMENT_BOTTOM_LEFT_KEY -> {
                  nativeAdOptions.setAdChoicesPlacement(
                    NativeAdOptions.ADCHOICES_BOTTOM_LEFT
                  )
                }
                AD_CHOICES_PLACEMENT_BOTTOM_RIGHT_KEY -> {
                  nativeAdOptions.setAdChoicesPlacement(
                    NativeAdOptions.ADCHOICES_BOTTOM_RIGHT
                  )
                }
              }
            }

            if (adOptions.has(MEDIA_ASPECT_RATIO_KEY)) {
              when (adOptions.getString(MEDIA_ASPECT_RATIO_KEY)) {
                MEDIA_ASPECT_RATIO_LANDSCAPE_KEY -> {
                  nativeAdOptions.setMediaAspectRatio(NativeAdOptions.NATIVE_MEDIA_ASPECT_RATIO_LANDSCAPE)
                }
                MEDIA_ASPECT_RATIO_PORTRAIT_KEY -> {
                  nativeAdOptions.setMediaAspectRatio(NativeAdOptions.NATIVE_MEDIA_ASPECT_RATIO_PORTRAIT)
                }
                MEDIA_ASPECT_RATIO_SQUARE_KEY -> {
                  nativeAdOptions.setMediaAspectRatio(NativeAdOptions.NATIVE_MEDIA_ASPECT_RATIO_SQUARE)
                }
                MEDIA_ASPECT_RATIO_SQUARE_ANY -> {
                  nativeAdOptions.setMediaAspectRatio(NativeAdOptions.NATIVE_MEDIA_ASPECT_RATIO_ANY)
                }
              }
            }

            if (adOptions.has(CUSTOM_MUTE_THIS_ADD_KEY)) {
              nativeAdOptions.setRequestCustomMuteThisAd(
                adOptions.getBoolean(CUSTOM_MUTE_THIS_ADD_KEY)
              )
            }

            if (adOptions.has(MULTIPLE_IMAGES_KEY)) {
              nativeAdOptions.setRequestMultipleImages(adOptions.getBoolean(MULTIPLE_IMAGES_KEY))
            }

            if (adOptions.has(RETURN_URLS_FOR_IMAGE_ASSETS_KEY)) {
              nativeAdOptions.setReturnUrlsForImageAssets(
                adOptions.getBoolean(
                  RETURN_URLS_FOR_IMAGE_ASSETS_KEY
                )
              )
            }

            adOptions.optJSONObject(VIDEO_OPTIONS_KEY)?.let {
              val videoOptions = VideoOptions.Builder()
              if (it.has(VIDEO_OPTIONS_START_MUTED_KEY)) {
                videoOptions.setStartMuted(it.getBoolean(VIDEO_OPTIONS_START_MUTED_KEY))
              }

              if (it.has(VIDEO_OPTIONS_CLICK_TO_EXPAND_REQUESTED_KEY)) {
                videoOptions.setClickToExpandRequested(
                  it.getBoolean(
                    VIDEO_OPTIONS_CLICK_TO_EXPAND_REQUESTED_KEY
                  )
                )
              }

              if (it.has(VIDEO_OPTIONS_CUSTOM_CONTROLS_REQUESTED_KEY)) {
                videoOptions.setCustomControlsRequested(
                  it.getBoolean(
                    VIDEO_OPTIONS_CUSTOM_CONTROLS_REQUESTED_KEY
                  )
                )
              }

              nativeAdOptions.setVideoOptions(videoOptions.build())
            }

            adLoader.withNativeAdOptions(nativeAdOptions.build())
          }

          config.optJSONArray(AD_SIZES_KEY)?.let {
            val sizes = mutableListOf<AdSize>()
            for (i in 0 until it.length()) {
              sizes.add(BannerAdSize.fromString(it.getString(i)).toAdSize())
            }
            adLoader.forAdManagerAdView({ view ->
              callback.onEvent(AD_MANAGER_AD_VIEW_LOADED_EVENT, view)
            }, *sizes.toTypedArray())
          }

          config.optJSONObject(AD_MANAGER_AD_VIEW_OPTIONS_KEY)?.let {
            val options = AdManagerAdViewOptions.Builder()
            if (it.has(AD_MANAGER_AD_VIEW_OPTIONS_MANUAL_IMPRESSIONS_ENABLED_KEY)) {
              options.setManualImpressionsEnabled(
                it.getBoolean(AD_MANAGER_AD_VIEW_OPTIONS_MANUAL_IMPRESSIONS_ENABLED_KEY)
              )
            }

//            if (it.has(AD_MANAGER_AD_VIEW_OPTIONS_SHOULD_DELAY_BANNER_RENDERING_KEY)) {
//              options.setShouldDelayBannerRenderingListener(object :
//                ShouldDelayBannerRenderingListener {
//                override fun shouldDelayBannerRendering(p0: Runnable): Boolean {
//                  return it.getBoolean(AD_MANAGER_AD_VIEW_OPTIONS_SHOULD_DELAY_BANNER_RENDERING_KEY)
//                }
//              })
//            }
            adLoader.withAdManagerAdViewOptions(options.build())

          }

          adLoader.forNativeAd {
            callback.onEvent(AD_MANAGER_AD_NATIVE_AD_LOADED_EVENT, it)
          }.withAdListener(object : AdListener() {
            override fun onAdClicked() {
              callback.onEvent(AD_MANAGER_AD_CLICKED_EVENT, null)
            }

            override fun onAdClosed() {
              callback.onEvent(AD_MANAGER_AD_CLOSED_EVENT, null)
            }

            override fun onAdFailedToLoad(error: LoadAdError) {
              callback.onEvent(AD_MANAGER_AD_FAILED_TO_LOAD_EVENT, error)
            }

            override fun onAdImpression() {
              callback.onEvent(AD_MANAGER_AD_IMPRESSION_EVENT, null)
            }

            override fun onAdLoaded() {
              callback.onEvent(AD_MANAGER_AD_LOADED_EVENT, null)
            }

            override fun onAdOpened() {
              callback.onEvent(AD_MANAGER_AD_OPENED_EVENT, null)
            }
          })

        } catch (e: Exception) {
          e.message?.let {
            Log.e("JS", it)
          }
        }

        return adLoader.build()
      }


      @JvmStatic
      fun load(adLoader: AdLoader, request: String, isAdManager: Boolean): AdRequest {
        val adRequest: AdRequest
        if (isAdManager) {
          adRequest = buildAdManagerRequest(request)
          adLoader.loadAd(adRequest)
        } else {
          adRequest = buildRequest(request)
          adLoader.loadAd(adRequest)
        }
        return adRequest
      }


      @JvmStatic
      fun load(adLoader: AdLoader, request: String, maxAdsCount: Int): AdRequest {
        val adRequest = buildRequest(request)
        adLoader.loadAds(adRequest, maxAdsCount)
        return adRequest
      }
    }
  }

  class BannerAd {
    companion object {
      @JvmStatic
      fun load(request: String, baseAdView: BaseAdView): AdRequest {
        val adRequest = buildRequest(request)
        baseAdView.loadAd(adRequest)
        return adRequest
      }
    }
  }

  class AdConsent {

    enum class AdsConsentDebugGeography(private val value: String) {
      DISABLED("DISABLED"),
      EEA("EEA"),
      NOT_EEA("NOT_EEA");

      override fun toString(): String {
        return value
      }
    }

    companion object {

      @JvmStatic
      fun reset(context: Context) {
        UserMessagingPlatform.getConsentInformation(context).reset()
      }

      @JvmStatic
      fun getStatus(context: Context): String {
        return when (UserMessagingPlatform.getConsentInformation(context).consentStatus) {
          ConsentInformation.ConsentStatus.REQUIRED -> "REQUIRED"
          ConsentInformation.ConsentStatus.OBTAINED -> "OBTAINED"
          ConsentInformation.ConsentStatus.NOT_REQUIRED -> "NOT_REQUIRED"
          else -> "UNKNOWN"
        }
      }

      @JvmStatic
      fun requestInfoUpdate(activity: Activity, parameters: String, callback: Callback<Void>) {
        try {
          val params = JSONObject(parameters)
          val requestParameters = ConsentRequestParameters.Builder()

          params.optJSONObject(DEBUG_SETTINGS_KEY)?.let { debugSettings ->
            val debug = ConsentDebugSettings.Builder(activity)

            when (debugSettings.optString(GEOGRAPHY_KEY)) {
              AdsConsentDebugGeography.DISABLED.toString() -> {
                debug.setDebugGeography(
                  ConsentDebugSettings.DebugGeography.DEBUG_GEOGRAPHY_DISABLED
                )
              }
              AdsConsentDebugGeography.EEA.toString() -> {
                debug.setDebugGeography(
                  ConsentDebugSettings.DebugGeography.DEBUG_GEOGRAPHY_EEA
                )
              }
              AdsConsentDebugGeography.NOT_EEA.toString() -> {
                debug.setDebugGeography(
                  ConsentDebugSettings.DebugGeography.DEBUG_GEOGRAPHY_NOT_EEA
                )
              }
              else -> {
              }
            }

            debugSettings.optJSONArray(DEVICE_IDS_KEY)?.let { deviceIds ->
              for (i in 0 until deviceIds.length()) {
                val deviceId = deviceIds.getString(i)
                if (deviceId == EMULATOR_KEY) {
                  debug.addTestDeviceHashedId(AdRequest.DEVICE_ID_EMULATOR)
                } else {
                  debug.addTestDeviceHashedId(deviceId)
                }

              }
            }

            if (debugSettings.has(FORCE_TESTING_KEY)) {
              debug.setForceTesting(debugSettings.getBoolean(FORCE_TESTING_KEY))
            }

            requestParameters.setConsentDebugSettings(debug.build())

            if (debugSettings.has(TAG_FOR_UNDER_AGE_OF_CONSENT_KEY)) {
              requestParameters.setTagForUnderAgeOfConsent(
                debugSettings.getBoolean(
                  TAG_FOR_UNDER_AGE_OF_CONSENT_KEY
                )
              )
            }

            if (debugSettings.has(ADMOB_ID_KEY)) {
              requestParameters.setAdMobAppId(debugSettings.getString(ADMOB_ID_KEY))
            }
          }

          UserMessagingPlatform.getConsentInformation(activity).requestConsentInfoUpdate(
            activity, requestParameters.build(),
            {
              callback.onSuccess(null)
            },
            {
              callback.onError(it)
            }
          )
        } catch (e: Exception) {
          callback.onError(e)
        }
      }


      @JvmStatic
      fun load(context: Context, callback: Callback<ConsentForm>) {
        UserMessagingPlatform.loadConsentForm(context, {
          callback.onSuccess(it)
        }, {
          callback.onError(it)
        })
      }

      @JvmStatic
      fun show(activity: Activity, form: ConsentForm, callback: Callback<Void>) {
        form.show(activity) {
          if (it != null) {
            callback.onError(it)
          } else {
            callback.onSuccess(null)
          }
        }
      }
    }
  }

  enum class MaxAdContentRating(private val value: String) {
    G("G"),
    PG("PG"),
    T("T"),
    MA("MA"),
    UNSPECIFIED("UNSPECIFIED");

    override fun toString(): String {
      return value
    }
  }

  enum class RequestConfiguration(private val value: String) {
    MaxAdContentRating("maxAdContentRating"),
    TagForChildDirectedTreatment("tagForChildDirectedTreatment"),
    TagForUnderAgeOfConsent("tagForUnderAgeOfConsent"),
    TestDevices("testDevices");

    override fun toString(): String {
      return value
    }
  }

  companion object {

    @JvmStatic
    fun getBitmap(drawable: Drawable?): Bitmap? {
      return drawable?.toBitmap()
    }

    @JvmStatic
    fun setRequestConfiguration(configuration: String) {
      try {
        val currentConfig = MobileAds.getRequestConfiguration().toBuilder()
        val config = JSONObject(configuration)

        when (config.optString(RequestConfiguration.MaxAdContentRating.toString())) {
          MaxAdContentRating.G.toString() -> {
            currentConfig.setMaxAdContentRating(
              com.google.android.gms.ads.RequestConfiguration.MAX_AD_CONTENT_RATING_G
            )
          }
          MaxAdContentRating.MA.toString() -> {
            currentConfig.setMaxAdContentRating(
              com.google.android.gms.ads.RequestConfiguration.MAX_AD_CONTENT_RATING_MA
            )
          }
          MaxAdContentRating.PG.toString() -> {
            currentConfig.setMaxAdContentRating(
              com.google.android.gms.ads.RequestConfiguration.MAX_AD_CONTENT_RATING_PG
            )
          }
          MaxAdContentRating.T.toString() -> {
            currentConfig.setMaxAdContentRating(
              com.google.android.gms.ads.RequestConfiguration.MAX_AD_CONTENT_RATING_T
            )
          }
          MaxAdContentRating.UNSPECIFIED.toString() -> {
            currentConfig.setMaxAdContentRating(
              com.google.android.gms.ads.RequestConfiguration.MAX_AD_CONTENT_RATING_UNSPECIFIED
            )
          }
          else -> {
          }
        }

        when (config.optString(RequestConfiguration.TagForChildDirectedTreatment.toString())) {
          "true" -> {
            currentConfig.setTagForChildDirectedTreatment(
              com.google.android.gms.ads.RequestConfiguration.TAG_FOR_CHILD_DIRECTED_TREATMENT_TRUE
            )
          }
          "false" -> {
            currentConfig.setTagForChildDirectedTreatment(
              com.google.android.gms.ads.RequestConfiguration.TAG_FOR_CHILD_DIRECTED_TREATMENT_FALSE
            )
          }
          "unspecified" -> {
            currentConfig.setTagForChildDirectedTreatment(
              com.google.android.gms.ads.RequestConfiguration.TAG_FOR_CHILD_DIRECTED_TREATMENT_UNSPECIFIED
            )
          }

        }

        when (config.optString(RequestConfiguration.TagForUnderAgeOfConsent.toString())) {
          "true" -> {
            currentConfig.setTagForUnderAgeOfConsent(
              com.google.android.gms.ads.RequestConfiguration.TAG_FOR_UNDER_AGE_OF_CONSENT_TRUE
            )
          }
          "false" -> {
            currentConfig.setTagForUnderAgeOfConsent(
              com.google.android.gms.ads.RequestConfiguration.TAG_FOR_UNDER_AGE_OF_CONSENT_FALSE
            )
          }
          "unspecified" -> {
            currentConfig.setTagForUnderAgeOfConsent(
              com.google.android.gms.ads.RequestConfiguration.TAG_FOR_UNDER_AGE_OF_CONSENT_UNSPECIFIED
            )
          }
        }

        config.optJSONArray(RequestConfiguration.TestDevices.toString())?.let { testDevices ->
          val list = mutableListOf<String>()
          for (i in 0 until testDevices.length()) {
            val value = testDevices.getString(i)
            if (value == "EMULATOR") {
              list.add(AdRequest.DEVICE_ID_EMULATOR)
            } else {
              list.add(value)
            }
          }

          currentConfig.setTestDeviceIds(list)
        }

        MobileAds.setRequestConfiguration(currentConfig.build())

      } catch (e: Exception) {
      }
    }

    private fun buildRequest(request: String): AdRequest {
      val builder = AdRequest.Builder()
      buildRequest(builder, request)
      return builder.build()
    }

    private fun buildRequest(adRequest: AdRequest.Builder, request: String) {
      try {
        val json = JSONObject(request)
        if (json.has(CONTENT_URL_KEY)) {
          adRequest.setContentUrl(
            json.getString(CONTENT_URL_KEY)
          )
        }

        json.optJSONArray(KEYWORDS_KEY)?.let {
          for (i in 0 until it.length()) {
            adRequest.addKeyword(it.getString(i))
          }
        }

        val extras = Bundle()


        if (json.has(REQUEST_NON_PERSONALIZED_ADS_ONLY_KEY)) {
          extras.putString("npa", "1")
        }

        json.optJSONObject(NETWORK_EXTRAS_KEY)?.let {
          for (key in it.keys()) {
            extras.putString(
              key, it.getString(key)
            )
          }
        }

        adRequest.addNetworkExtrasBundle(AdMobAdapter::class.java, extras)

        if (json.has(REQUEST_AGENT_KEY)) {
          adRequest.setRequestAgent(json.getString(REQUEST_AGENT_KEY))
        }

      } catch (e: Exception) {
      }
    }

    private fun buildManagerRequest(adRequest: AdManagerAdRequest.Builder, request: String) {
      try {
        val json = JSONObject(request)
        if (json.has(CONTENT_URL_KEY)) {
          adRequest.setContentUrl(
            json.getString(CONTENT_URL_KEY)
          )
        }

        json.optJSONArray(KEYWORDS_KEY)?.let {
          for (i in 0 until it.length()) {
            adRequest.addKeyword(it.getString(i))
          }
        }

        val extras = Bundle()


        if (json.has(REQUEST_NON_PERSONALIZED_ADS_ONLY_KEY)) {
          extras.putString("npa", "1")
        }

        json.optJSONObject(NETWORK_EXTRAS_KEY)?.let {
          for (key in it.keys()) {
            extras.putString(
              key, it.getString(key)
            )
          }
        }

        adRequest.addNetworkExtrasBundle(AdMobAdapter::class.java, extras)

        if (json.has(REQUEST_AGENT_KEY)) {
          adRequest.setRequestAgent(json.getString(REQUEST_AGENT_KEY))
        }

      } catch (e: Exception) {
      }
    }

    private fun buildAdManagerRequest(request: String): AdManagerAdRequest {
      val adRequest = AdManagerAdRequest.Builder()

      buildManagerRequest(adRequest, request)
      try {
        val json = JSONObject(request)

        if (json.has(PUBLISHER_PROVIDER_ID_KEY)) {
          adRequest.setPublisherProvidedId(json.getString(PUBLISHER_PROVIDER_ID_KEY))
        }

        json.optJSONObject(CUSTOM_TARGETING_KEY)?.let {
          for (key in it.keys()) {
            when (val value = it[key]) {
              is JSONArray -> {
                val list = mutableListOf<String>()
                for (i in 0 until value.length()) {
                  list.add(value.getString(i))
                }
                adRequest.addCustomTargeting(key, list)
              }
              is String -> {
                adRequest.addCustomTargeting(key, value)
              }
            }
          }
        }

        json.optJSONArray(CATEGORY_EXCLUSIONS_KEY)?.let {
          for (i in 0 until it.length()) {
            adRequest.addCategoryExclusion(it.getString(i))
          }
        }

        if (json.has(AD_STRING_KEY)) {
          adRequest.setAdString(json.getString(AD_STRING_KEY))
        }

      } catch (e: Exception) {
      }


      return adRequest.build()
    }

    @JvmStatic
    fun toJSONStatusMap(status: Map<String, AdapterStatus>): String {
      val json = JSONObject();
      for (entry in status.entries) {
        val obj = JSONObject()
        obj.put(
          "description", entry.value.description
        )
        obj.put(
          "latency", entry.value.latency
        )
        obj.put(
          "state", entry.value.initializationState
        )
        json.put(entry.key, obj)
      }
      return json.toString()
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
