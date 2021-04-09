import React from 'react';
import Video from 'react-native-video';
import resolveAssetSource from 'resolveAssetSource';
import video1 from '../asset/videos/CmT3hR8x39NVM9r5.mp4';
import sub1 from '../asset/videos/The.Walking.Dead.S04E01.480p.Exclusive.Farsi.Dubbed.vtt';


// Within your render function, assuming you have a file called
// "background.mp4" in your project. You can include multiple videos
// on a single screen if you like.
const VideoP = () =>{
  
  return(
    <Video source={video1}   // Can be a URL or a local file.
       ref={(ref) => {
         this.player = ref
       }}                                      // Store reference
       onBuffer={this.onBuffer}                // Callback when remote video is buffering
       onError={this.videoError}               // Callback when video cannot be loaded
       style={styles.backgroundVideo} controls/>
  );

}


// Later on in your styles..
var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default VideoP;