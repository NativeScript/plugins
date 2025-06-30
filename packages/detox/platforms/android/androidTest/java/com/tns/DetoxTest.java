package com.tns;

import com.tns.NativeScriptActivity;

import com.wix.detox.Detox;
import com.wix.detox.config.DetoxConfig;

import org.junit.Rule;
import org.junit.Test;
import org.junit.runner.RunWith;

import androidx.test.ext.junit.runners.AndroidJUnit4;
import androidx.test.filters.LargeTest;
import androidx.test.rule.ActivityTestRule;
import android.util.Log;

@RunWith(AndroidJUnit4.class)
@LargeTest
public class DetoxTest {

  @Rule
  public ActivityTestRule<NativeScriptActivity> mActivityRule = new ActivityTestRule<NativeScriptActivity>(
      NativeScriptActivity.class, false, false);

  @Test
  public void runDetoxTests() {
    DetoxConfig detoxConfig = new DetoxConfig();
    detoxConfig.idlePolicyConfig.masterTimeoutSec = 90;
    detoxConfig.idlePolicyConfig.idleResourceTimeoutSec = 60;
    detoxConfig.rnContextLoadTimeoutSec = getRuntimeTimeout();
    Log.i("Detox", "🚀 Starting Detox tests...");
    Detox.runTests(mActivityRule, detoxConfig);
    Log.i("Detox", "✅ Detox.runTests called");
  }

  private static int getRuntimeTimeout() {
    return "debug".equalsIgnoreCase(System.getenv("E2E_MODE")) ? 180 : 60;
  }
}
