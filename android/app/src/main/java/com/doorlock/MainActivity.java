package com.doorlock;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactActivityDelegate;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "doorlock";
  }

  /**
   * Returns the instance of the {@link ReactActivityDelegate}. Here we use a util class {@link
   * DefaultReactActivityDelegate} which allows you to easily enable Fabric and Concurrent React
   * (aka React 18) with two boolean flags.
   */
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new DefaultReactActivityDelegate(
      this,
      getMainComponentName(),
      // If you opted-in for the New Architecture, we enable the Fabric Renderer.
      DefaultNewArchitectureEntryPoint.getFabricEnabled(), // fabricEnabled
      // If you opted-in for the New Architecture, we enable Concurrent React (i.e. React 18).
      DefaultNewArchitectureEntryPoint.getConcurrentReactEnabled() // concurrentRootEnabled
    );
  }
  // @Override
  // protected void onNewIntent(Intent intent) {
  //   super.onNewIntent(intent);
  //   Tag tag = intent.getParcelableExtra(NfcAdapter.EXTRA_TAG);

  //   if (NfcAdapter.ACTION_NDEF_DISCOVERED.equals(intent.getAction())) {
  //     Parcelable[] rawMessages = intent.getParcelableArrayExtra(
  //       NfcAdapter.EXTRA_NDEF_MESSAGES
  //     );
  //     if (rawMessages != null) {
  //       NdefMessage[] messages = new NdefMessage[rawMessages.length];
  //       for (int i = 0; i < rawMessages.length; i++) {
  //         messages[i] = (NdefMessage) rawMessages[i];
  //       }
  //       // Process the messages array.

  //     }
  //   }
  // }
}
