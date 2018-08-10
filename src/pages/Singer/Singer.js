import React  from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import NormalNavbar from '../../layout/Top/type/NormalNavbar.js'
import SuperButton from '../../components/SuperButton.js'

import Video from 'react-native-video'

export default class Singer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NormalNavbar />

        <Text onPress={()=>{this.openControlPanel()}} >歌手</Text>
        <SuperButton label="登录" />

        <View style={styles.backgroundVideo} >
          <Video source={{uri: "http://music.jesbrian.local/resource/test2.mp3"}}   // Can be a URL or a local file.
                 ref={(ref) => {
                   this.player = ref
                 }}                                      // Store reference
            // onBuffer={this.onBuffer}                // Callback when remote video is buffering
            // onEnd={this.onEnd}                      // Callback when playback finishes
            // onError={this.videoError}               // Callback when video cannot be loaded
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent'
  },

  backgroundVideo: {
    width:108,
    height:108,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor:'#555'
  },
});
