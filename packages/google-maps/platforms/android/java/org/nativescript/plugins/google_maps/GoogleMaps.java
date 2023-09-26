package org.nativescript.plugins.google_maps;

import android.location.Location;
import android.view.View;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.google.android.gms.maps.GoogleMap;
import com.google.android.gms.maps.model.CameraPosition;
import com.google.android.gms.maps.model.Circle;
import com.google.android.gms.maps.model.GroundOverlay;
import com.google.android.gms.maps.model.IndoorBuilding;
import com.google.android.gms.maps.model.LatLng;
import com.google.android.gms.maps.model.Marker;
import com.google.android.gms.maps.model.PointOfInterest;
import com.google.android.gms.maps.model.Polygon;
import com.google.android.gms.maps.model.Polyline;

import android.graphics.Bitmap;
import java.io.ByteArrayOutputStream;
import com.google.android.gms.maps.model.Tile;

public class GoogleMaps {

  final static String CAMERA_POSITION_EVENT_IDLE = "idle";
  final static String CAMERA_POSITION_EVENT_START = "start";
  final static String CAMERA_POSITION_EVENT_MOVE = "move";

  final static String MARKER_EVENT_START = "start";
  final static String MARKER_EVENT_DRAG = "drag";
  final static String MARKER_EVENT_END = "end";
  final static String MARKER_EVENT_CLICK = "click";

  final static String INFO_WINDOW_EVENT_CLICK = "click";
  final static String INFO_WINDOW_EVENT_CLOSE = "close";

  final static String ITEM_CLICK_EVENT_CIRCLE = "circle";
  final static String ITEM_CLICK_EVENT_POLYGON = "polygon";
  final static String ITEM_CLICK_EVENT_POLYLINE = "polyline";
  final static String ITEM_CLICK_EVENT_POI = "poi";
  final static String ITEM_CLICK_EVENT_GROUND_OVERLAY = "groundOverlay";

  final static String INDOOR_EVENT_BUILDING_FOCUSED = "buildingFocused";
  final static String INDOOR_EVENT_LEVEL_ACTIVATED = "levelActivated";

  final static String INFO_WINDOW_ADAPTER_EVENT_CONTENTS = "contents";
  final static String INFO_WINDOW_ADAPTER_EVENT_WINDOW = "window";


  public interface Callback {
		
		void onMapLoaded();
    
    void onCameraEvent(CameraPosition position, String event, boolean isGesture);

    void onMarkerEvent(Marker marker, String event);

    void onMapClickEvent(LatLng latLng, boolean isLongClick);

    void onMyLocationEvent(@Nullable Location location);

    void onItemClickEvent(Object item, String name);

    void onInfoWindowEvent(Marker marker, String event, boolean isLongClick);

    View onInfoWindowAdapterEvent(Marker marker, String event);

    void onIndoorEvent(Object object, String name);
  }

  public static void registerMapListeners(final GoogleMap map, final Callback callback) {
		map.setOnMapLoadedCallback(callback::onMapLoaded);
    map.setOnCameraIdleListener(() -> callback.onCameraEvent(map.getCameraPosition(), CAMERA_POSITION_EVENT_IDLE, false));

    map.setOnCameraMoveListener(() -> callback.onCameraEvent(map.getCameraPosition(), CAMERA_POSITION_EVENT_MOVE, false));

    map.setOnCameraMoveStartedListener(i -> {
			boolean isGesture = i == GoogleMap.OnCameraMoveStartedListener.REASON_GESTURE;
			callback.onCameraEvent(map.getCameraPosition(), CAMERA_POSITION_EVENT_START, isGesture);
		});


    map.setOnMarkerDragListener(new GoogleMap.OnMarkerDragListener() {
      @Override
      public void onMarkerDrag(@NonNull Marker marker) {
        callback.onMarkerEvent(marker, MARKER_EVENT_DRAG);
      }

      @Override
      public void onMarkerDragEnd(@NonNull Marker marker) {
        callback.onMarkerEvent(marker, MARKER_EVENT_END);
      }

      @Override
      public void onMarkerDragStart(@NonNull Marker marker) {
        callback.onMarkerEvent(marker, MARKER_EVENT_START);
      }
    });

    map.setOnMarkerClickListener(marker -> {
			callback.onMarkerEvent(marker, MARKER_EVENT_CLICK);
			return false;
		});


    map.setOnMapClickListener(latLng -> callback.onMapClickEvent(latLng, false));

    map.setOnMapLongClickListener(latLng -> callback.onMapClickEvent(latLng, true));


    map.setOnMyLocationClickListener(callback::onMyLocationEvent);

    map.setOnMyLocationButtonClickListener(() -> {
			callback.onMyLocationEvent(null);
			return false;
		});

    map.setOnCircleClickListener(circle -> callback.onItemClickEvent(circle, ITEM_CLICK_EVENT_CIRCLE));

    map.setOnPolygonClickListener(polygon -> callback.onItemClickEvent(polygon, ITEM_CLICK_EVENT_POLYGON));

    map.setOnPolylineClickListener(polyline -> callback.onItemClickEvent(polyline, ITEM_CLICK_EVENT_POLYLINE));

    map.setOnPoiClickListener(pointOfInterest -> callback.onItemClickEvent(pointOfInterest, ITEM_CLICK_EVENT_POI));

    map.setOnGroundOverlayClickListener(groundOverlay -> callback.onItemClickEvent(groundOverlay, ITEM_CLICK_EVENT_GROUND_OVERLAY));

    map.setOnIndoorStateChangeListener(new GoogleMap.OnIndoorStateChangeListener() {
      @Override
      public void onIndoorBuildingFocused() {
        callback.onIndoorEvent(null, INDOOR_EVENT_BUILDING_FOCUSED);
      }

      @Override
      public void onIndoorLevelActivated(@NonNull IndoorBuilding indoorBuilding) {
        callback.onIndoorEvent(indoorBuilding, INDOOR_EVENT_LEVEL_ACTIVATED);
      }
    });

    map.setOnInfoWindowClickListener(marker -> callback.onInfoWindowEvent(marker, INFO_WINDOW_EVENT_CLICK, false));

    map.setOnInfoWindowCloseListener(marker -> callback.onInfoWindowEvent(marker, INFO_WINDOW_EVENT_CLOSE, false));

    map.setOnInfoWindowLongClickListener(marker -> callback.onInfoWindowEvent(marker, INFO_WINDOW_EVENT_CLICK, true));

    map.setInfoWindowAdapter(new GoogleMap.InfoWindowAdapter() {
      @Nullable
      @Override
      public View getInfoContents(@NonNull Marker marker) {
        return callback.onInfoWindowAdapterEvent(marker, INFO_WINDOW_ADAPTER_EVENT_CONTENTS);
      }

      @Nullable
      @Override
      public View getInfoWindow(@NonNull Marker marker) {
        return callback.onInfoWindowAdapterEvent(marker, INFO_WINDOW_ADAPTER_EVENT_WINDOW);
      }
    });

  }

  public static Tile bitmapToTile(Bitmap bitmap) {
			ByteArrayOutputStream stream = new ByteArrayOutputStream();
			bitmap.compress(Bitmap.CompressFormat.PNG, 100, stream);
			byte[] data = stream.toByteArray();
			return new Tile(bitmap.getWidth(), bitmap.getHeight(), data);
		}
}
