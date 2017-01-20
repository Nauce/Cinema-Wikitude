package com.wikitude.cinema;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

import android.Manifest;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.graphics.Bitmap;
import android.hardware.SensorManager;
import android.location.LocationListener;
import android.net.Uri;
import android.os.Bundle;
import android.os.Environment;
import android.support.v4.app.ActivityCompat;
import android.support.v4.content.ContextCompat;
import android.widget.Toast;

import com.wikitude.architect.ArchitectView;
import com.wikitude.architect.ArchitectView.ArchitectUrlListener;
import com.wikitude.architect.ArchitectView.CaptureScreenCallback;
import com.wikitude.architect.ArchitectView.SensorAccuracyChangeListener;
import com.wikitude.architect.StartupConfiguration.CameraPosition;

public class SampleCamActivity extends AbstractArchitectCamActivity {

	/**
	 * last time the calibration toast was shown, this avoids too many toast shown when compass needs calibration
	 */
	private long lastCalibrationToastShownTimeMillis = System.currentTimeMillis();

    protected Bitmap screenCapture = null;

    private static final int WIKITUDE_PERMISSIONS_REQUEST_EXTERNAL_STORAGE = 3;

	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);

		if (ContextCompat.checkSelfPermission(this,
				Manifest.permission.CAMERA)
				!= PackageManager.PERMISSION_GRANTED) {

			// Should we show an explanation?

			if (ActivityCompat.shouldShowRequestPermissionRationale(this,
					Manifest.permission.CAMERA)) {

				// Show an expanation to the user *asynchronously* -- don't block
				// this thread waiting for the user's response! After the user
				// sees the explanation, try again to request the permission.

			} else {

				// No explanation needed, we can request the permission.

				ActivityCompat.requestPermissions(this,
						new String[]{Manifest.permission.CAMERA},
						10);

				// MY_PERMISSIONS_REQUEST_READ_CONTACTS is an
				// app-defined int constant. The callback method gets the
				// result of the request.
			}
		}
	}

	@Override
	public void onRequestPermissionsResult(int requestCode,
										   String permissions[], int[] grantResults) {
		try {
			this.architectView.load(getARchitectWorldPath());
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	@Override
	public String getARchitectWorldPath() {
		return "index.html";
	}

	@Override
	public String getActivityTitle() {
		return getString(R.string.app_name);
	}

	@Override
	public int getContentViewId() {
		return R.layout.sample_cam;
	}

	@Override
	public int getArchitectViewId() {
		return R.id.architectView;
	}
	
	@Override
	public String getWikitudeSDKLicenseKey() {
		return "HAtDNfPEIzbZ+yi8Vk3FN54AGJYFxmxgGrCM2dyTP/LlYm730E4SZhjfwt7AZx6ozVJ6mJzp25WKp/rn7j9YHoWIdceUvZo7d8jn7nNtykWsGwMAZH7WyMw3ikdFc4kJpTb2idr3DONMJHo5qQx+0Zj78jYFm6yaahLhnnMiBEpTYWx0ZWRfXymgOfKm2Vtj01UxijXK8l6/joyFP/gtyQhxvYMNXCyNvvoay79P4hBw6kym7KsLRYZnXtAhnGEj8srcn1j43vPWtvcCqL9K3hVABiJPwgagQcsHAVint1ssvxAQ6GmSHB+mgI6S/ROBjFaRAFYtk7X1qoIC5u6s8jmnX0sLL36iOir3ewAaDVLFUfJygpZpbN3WQs0OH77KY/0xKY6o++d6Ig0IVY+RTVFsWYe57zadfrAHFO3C65PmeYDVOnBqO3qYcdKFdKLuNLXa+kQPNQ6547xGNwFbjKY9Kck+iY0OE3jqQa2p4fYUd6HfWRlm5AfhpVA/2t6jXreBg4WoEDNsnPmxYQzyqzdHKq9vstiCf1dZOGI6kihvs8XKNAsVh7tu5vYirQWd/1RoURWAkX1sfi7C03ivzlsmTyfaAxdIU0c2i5u2MESDd+r7bq79yV/91QkhIrUKY9GGoXQCoarYcNn/ceGL5B8quaegp2GVGHRTQt+yU4M=";
	}
	
	@Override
	public SensorAccuracyChangeListener getSensorAccuracyListener() {
		return new SensorAccuracyChangeListener() {
			@Override
			public void onCompassAccuracyChanged( int accuracy ) {
				/* UNRELIABLE = 0, LOW = 1, MEDIUM = 2, HIGH = 3 */
				if ( accuracy < SensorManager.SENSOR_STATUS_ACCURACY_MEDIUM && SampleCamActivity.this != null && !SampleCamActivity.this.isFinishing() && System.currentTimeMillis() - SampleCamActivity.this.lastCalibrationToastShownTimeMillis > 5 * 1000) {
					Toast.makeText( SampleCamActivity.this, R.string.compass_accuracy_low, Toast.LENGTH_LONG ).show();
					SampleCamActivity.this.lastCalibrationToastShownTimeMillis = System.currentTimeMillis();
				}
			}
		};
	}

	@Override
	public ArchitectUrlListener getUrlListener() {
		return new ArchitectUrlListener() {

			@Override
			public boolean urlWasInvoked(String uriString) {
				Uri invokedUri = Uri.parse(uriString);
				
				// pressed "More" button on POI-detail panel
				if ("markerselected".equalsIgnoreCase(invokedUri.getHost())) {
					return true;
				}
				
				// pressed snapshot button. check if host is button to fetch e.g. 'architectsdk://button?action=captureScreen', you may add more checks if more buttons are used inside AR scene
				else if ("button".equalsIgnoreCase(invokedUri.getHost())) {
					SampleCamActivity.this.architectView.captureScreen(ArchitectView.CaptureScreenCallback.CAPTURE_MODE_CAM_AND_WEBVIEW, new CaptureScreenCallback() {
						
						@Override
						public void onScreenCaptured(final Bitmap screenCapture) {
							if ( ContextCompat.checkSelfPermission(SampleCamActivity.this, Manifest.permission.WRITE_EXTERNAL_STORAGE) != PackageManager.PERMISSION_GRANTED ) {
                                SampleCamActivity.this.screenCapture = screenCapture;
                                ActivityCompat.requestPermissions(SampleCamActivity.this, new String[]{Manifest.permission.WRITE_EXTERNAL_STORAGE}, WIKITUDE_PERMISSIONS_REQUEST_EXTERNAL_STORAGE);
                            } else {
                                SampleCamActivity.this.saveScreenCaptureToExternalStorage(screenCapture);
                            }
						}
					});
				}
				return true;
			}
		};
	}

	@Override
	public ILocationProvider getLocationProvider(final LocationListener locationListener) {
		return new LocationProvider(this, locationListener);
	}
	
	@Override
	public float getInitialCullingDistanceMeters() {
		// you need to adjust this in case your POIs are more than 50km away from user here while loading or in JS code (compare 'AR.context.scene.cullingDistance')
		return ArchitectViewHolderInterface.CULLING_DISTANCE_DEFAULT_METERS;
	}

	@Override
	protected boolean hasGeo() {
		return false;
	}

	@Override
	protected boolean hasIR() {
		return false;
	}

	@Override
	protected CameraPosition getCameraPosition() {
		return CameraPosition.DEFAULT;
	}

    protected void saveScreenCaptureToExternalStorage(Bitmap screenCapture) {
        if ( screenCapture != null ) {
            // store screenCapture into external cache directory
            final File screenCaptureFile = new File(Environment.getExternalStorageDirectory().toString(), "screenCapture_" + System.currentTimeMillis() + ".jpg");

            // 1. Save bitmap to file & compress to jpeg. You may use PNG too
            try {

                final FileOutputStream out = new FileOutputStream(screenCaptureFile);
                screenCapture.compress(Bitmap.CompressFormat.JPEG, 90, out);
                out.flush();
                out.close();

                // 2. create send intent
                final Intent share = new Intent(Intent.ACTION_SEND);
                share.setType("image/jpg");
                share.putExtra(Intent.EXTRA_STREAM, Uri.fromFile(screenCaptureFile));

                // 3. launch intent-chooser
                final String chooserTitle = "Share Snaphot";
                SampleCamActivity.this.startActivity(Intent.createChooser(share, chooserTitle));

            } catch (final Exception e) {
                // should not occur when all permissions are set
                SampleCamActivity.this.runOnUiThread(new Runnable() {

                    @Override
                    public void run() {
                        // show toast message in case something went wrong
                        Toast.makeText(SampleCamActivity.this, "Unexpected error, " + e, Toast.LENGTH_LONG).show();
                    }
                });
            }
        }
    }
}
