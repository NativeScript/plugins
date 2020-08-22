package com.telerik.localnotifications;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.os.AsyncTask;
import android.util.Log;

import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;

class DownloadFileFromUrl extends AsyncTask<String, Void, Bitmap> {

  private static final String TAG = "DownloadFileFromUrl";

  private String imageUrl;

  DownloadFileFromUrl(final String imageUrl) {
    super();

    this.imageUrl = imageUrl;
  }

  @Override
  protected Bitmap doInBackground(String... strings) {
    try {
      HttpURLConnection connection = (HttpURLConnection) new URL(this.imageUrl).openConnection();
      connection.setDoInput(true);
      connection.connect();

      BitmapFactory.Options opts = new BitmapFactory.Options();
      opts.inJustDecodeBounds = false;

      InputStream is = connection.getInputStream();

      Bitmap bitmap = BitmapFactory.decodeStream(is, null, opts);

      try {
        is.close();
      } catch (IOException e) {
        Log.e(TAG, "Error closing image InputStream: " + e.getMessage(), e);
      }

      return bitmap;
    } catch (IOException e) {
      Log.d(TAG, "Error while loading image: " + e.getMessage(), e);
    }

    return null;
  }
}
