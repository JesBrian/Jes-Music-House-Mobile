import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';

import SongNavbar from '../../layout/Top/SongNavbar.js'
import SongImg from '../Singer/type/SongImg.js'
import SongLyric from '../Singer/type/SongLyric.js'


import {common} from "../../assets/styles/common";

export default class Song extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      showSongContentType: 'lyric', // [img/lyric]
      playModel: 'loop'
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <SongNavbar/>

        {
          this.state.showSongContentType === 'img' ?
            (<SongImg changeSongContentType={showSongContentType => this.changeShowContentType(showSongContentType)} />) :
            (<SongLyric changeSongContentType={showSongContentType => this.changeShowContentType(showSongContentType)} />)
        }

        <TouchableWithoutFeedback>
          <View style={{width: '100%', height: 88, backgroundColor: 'lightblue'}}>
            <View style={{flexDirection:'row', justifyContent:'center',}}>
              <View style={{width:'90%', height:28, flexDirection:'row'}}>
                <View style={{width:68, height:'100%', flexDirection:'row', justifyContent:'center'}}>
                  <Text style={{lineHeight:28, fontSize:12,}}>00:00</Text>
                </View>
                <View style={{flex:1, justifyContent:'center'}}>
                  <TouchableWithoutFeedback>
                    <View style={{width:'100%', height:4, backgroundColor:'green'}} />
                  </TouchableWithoutFeedback>
                </View>
                <View style={{width:68, height:'100%', flexDirection:'row', justifyContent:'center'}}>
                  <Text style={{lineHeight:28, fontSize:12,}}>00:00</Text>
                </View>
              </View>
            </View>

            <View style={{flex:1, flexDirection:'row'}}>
              <View style={{width:68, flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                <Text onPress={this.changePlayModel} style={[common.icon, {fontSize:24}]}>&#xe66c;</Text>
              </View>
              <View style={{flex:1, flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                <Text style={[common.icon, {fontSize:28}]}>&#xe602;</Text>
                <Text style={[common.icon, {margin:28, fontSize:48}]}>&#xe6b4;</Text>
                <Text style={[common.icon, {fontSize:28}]}>&#xe604;</Text>
              </View>
              <View style={{width:68, flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                <Text style={[common.icon, {fontSize:24}]}>&#xe654;</Text>
              </View>
            </View>

          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }

  /**
   * 修改展示內容
   * @param type [img/lyric]
   */
  changeShowContentType (type = 'img') {
    this.setState({
      showSongContentType: type
    });
  };

  /**
   * 修改播放模式
   */
  changePlayModel = () => {
    let type = 'loop';
    if (this.state.playModel === 'loop') {
      type = 'single-loop';
    } else if (this.state.playModel === 'single-loop') {
      type = 'random';
    }
    this.setState({
      playModel: type
    });
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    position: 'relative',
    flexDirection: 'column',
    backgroundColor: 'transparent'
  },
});
