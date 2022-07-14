# @nativescript/video

A NativeScript plugin to provide the ability to play local and remote videos.

---

### Installation

From your command prompt/terminal go to your app's root folder and execute:

NativeScript Version 7+:
`npm install nativescript-videoplayer`

NativeScript version prior to 7:
`npm install nativescript-videoplayer@4.2.1`

#### Platform controls used:

| Android                                                                                       | iOS                                                                                                                               |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| [Android MediaPlayer](https://developer.android.com/reference/android/media/MediaPlayer.html) | [iOS AVPlayer](https://developer.apple.com/library/prerelease/ios/documentation/AVFoundation/Reference/AVPlayer_Class/index.html) |

| Sample 1                                 | Sample 2                                   |
| ---------------------------------------- | ------------------------------------------ |
| ![Sample Usage](./screenshots/video.gif) | ![Sample 2](./screenshots/videoplayer.gif) |

## Usage

###

```XML
<Page xmlns="http://schemas.nativescript.org/tns.xsd"
      xmlns:VideoPlayer="nativescript-videoplayer">
        <StackLayout>

            <VideoPlayer:Video id="nativeVideoPlayer"
            controls="true" loop="true" autoplay="false" height="280"
            src="~/videos/big_buck_bunny.mp4" />

            <!-- Remote file to test with https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4 -->

        </StackLayout>
</Page>
```

```typescript
import { Video } from 'nativescript-videoplayer';

const video = topmost().currentPage.getViewById('nativeVideoPlayer') as Video;
// Setting event listeners on the Video
video.on(Video.pausedEvent, () => {
  console.log('Video has been paused.');
});

video.on(Video.mutedEvent, () => {
  console.log('Video has been muted.');
});

// changing the src
video.src = 'some video file or url';

// set loop
video.loop = false;
```

## Angular NativeScript Usage

```TS
// somewhere at top of your component or bootstrap file
import { registerElement } from '@nativescript/angular';
import { Video } from '@nstudio/nativescript-exoplayer';
registerElement('VideoPlayer', () => Video);
// documentation: https://docs.nativescript.org/angular/plugins/angular-third-party.html#simple-elements
```

_With AngularNative you have to explicitly close all components so the correct template code is below._

```XML
  <VideoPlayer
      src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      autoplay="true"
      height="300"></VideoPlayer>
```

## Properties

| Property                            | Description                                                                                                                                                                                                                             |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **src**                             | The src file for the video. Set the video file to play, for best performance use local video files if possible. The file must adhere to the platforms accepted video formats. For reference check the platform specs on playing videos. |
| **autoplay - (boolean)**            | Set if the video should start playing as soon as possible or to wait for user interaction.                                                                                                                                              |
| **controls - (boolean)**            | Set to use the native video player's media playback controls.                                                                                                                                                                           |
| **muted - (boolean)**               | Mutes the native video player.                                                                                                                                                                                                          |
| **loop - (boolean)**                | Sets the native video player to loop once playback has finished.                                                                                                                                                                        |
| **fill - (boolean)**                | If true, the aspect ratio of the video will not be honored and it will fill the entire space available.                                                                                                                                 |
| **observeCurrentTime - (boolean)**  | If true, currentTimeUpdated callback is possible.                                                                                                                                                                                       |
| **headers - (Map<string, string>)** | Set headers to add when loading a video from URL.                                                                                                                                                                                       |

## API

| Method                        | Description                                                         |
| ----------------------------- | ------------------------------------------------------------------- |
| **play**                      | Start playing the video.                                            |
| **pause**                     | Pause the video                                                     |
| **seekToTime(time: number)**  | Seek the video to a time (milliseconds)                             |
| **getCurrentTime**            | Returns the current time in the video duration (milliseconds)       |
| **getDuration**               | Returns the current time in the video duration (milliseconds)       |
| **destroy**                   | Destroy the video player and free resources                         |
| **mute(boolean)**             | If true, mutes the video. If false, unmute the video.               |
| **setVolume(volume: number)** | Set the volume - Must be between 0 and 1.                           |
| **ANDROID ONLY** - **stop**   | Stop the playback - this resets the player and remove the video src |

## Observable Properties

- **currentTime()** - Current time of video.

## Events

| Event                   | Description                                                         |
| ----------------------- | ------------------------------------------------------------------- |
| errorEvent              | This event fires when an error in the source code is thrown.        |
| playbackReadyEvent      | This event fires when the video is ready.                           |
| playbackStartEvent      | This event fires when video starts playback.                        |
| seekToTimeCompleteEvent | This event fires when seeking is complete.                          |
| currentTimeUpdatedEvent | This event fires when the current time of playing video is changed. |
| finishedEvent           | This event fires when the video is complete.                        |
| mutedEvent              | This event fires when video is muted.                               |
| unmutedEvent            | This event fires when video is unmutedEvent.                        |
| pausedEvent             | This event fires when video is paused.                              |
| volumeSetEvent          | This event fires when the volume is set.                            |

## iOS Logging

When running the iOS Simulator, after playing a video the iOS system may write
log messages to the console every few seconds of the form

```
[aqme] 254: AQDefaultDevice (173): skipping input stream 0 0 0x0
```

They will continue being logged even after the video has been properly destroyed.
These messages can be safely ignored. To turn them off completely, run the following
command in your shell before running `tns run ios`:

```
export SIMCTL_CHILD_OS_ACTIVITY_MODE="disable"
```

