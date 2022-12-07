import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import YouTube from 'react-native-youtube';
export default function YouTubePlayer(props) {
  const [isReady, setIsReady] = useState(false);
  const [status, setStatus] = useState(null);
  const [quality, setQuality] = useState(null);
  const [error, setError] = useState(null);
  return (
    <SafeAreaView style={{flex: 1}}>
      <YouTube
        apiKey="AIzaSyC1AVRX9OTeAll2XR5SAqdL3xBngPlcuVE"
        videoId="mfNWxURTJEA" // The YouTube video ID
        play={false} // control playback of video with true/false
        fullscreen={false} // control whether the video should play in fullscreen or inline
        loop // control whether the video should loop when ended
        onReady={e => setIsReady(true)}
        onChangeState={e => setStatus(e.state)}
        onChangeQuality={e => setQuality(e.quality)}
        onError={e => setError(e.error)}
        style={{alignSelf: 'stretch', height: 300}}
      />
    </SafeAreaView>
  );
}
