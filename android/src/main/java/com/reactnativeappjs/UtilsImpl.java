package com.reactnativeappjs;

import android.content.res.Configuration;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeArray;
import com.facebook.react.bridge.WritableNativeMap;
import android.os.Build;
import androidx.annotation.RequiresApi;
import java.util.Base64;

public class UtilsImpl {

  public static final String NAME = "Utils";

  public static String getOrientation(ReactApplicationContext context) {
    int orientation = context.getResources().getConfiguration().orientation;
    if (orientation == Configuration.ORIENTATION_LANDSCAPE) {
      return "horizontal";
    } else {
      return "vertical";
    }
  }

  // public static WritableArray getLocation() {
  //   return null; // TODO: implement
  // }

  // public static WritableMap getDeviceInfo() {
  //   return null; // TODO: implement
  // }

  // public static void encode(String data, Promise promise) {
  //   // TODO: implement
  // }

}
