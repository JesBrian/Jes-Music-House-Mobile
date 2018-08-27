import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';


import { connect } from 'react-redux'
import { showBottomPlayList } from '../../../redux/actions/ViewActions.js'
import { changeMusicPlayStatus, changeMusicPlayModel } from '../../../redux/actions/MusicActions.js'

import SongNavbar from '../../top/type/SongNavbar.js'
import SongImg from './type/SongImg.js'
import SongLyric from './type/SongLyric.js'


import { common } from '../../../assets/styles/common.js'
import SuperSlider from '../../../components/SuperSlider.js'

class Song extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      showSongContentType: 'img', // [ img/lyric ]
    };
  }

  render() {
    return (
      <View style={{width:'100%', height:'100%', bottom:0, left:0, flex:1, position:'absolute', backgroundColor:'#FFF', zIndex:13}}>
        <SongNavbar navigation={this.props.navigation}/>

        {
          this.state.showSongContentType === 'img' ?
            <SongImg changeSongContentType={showSongContentType => this.changeShowContentType(showSongContentType)} /> :
            <SongLyric changeSongContentType={showSongContentType => this.changeShowContentType(showSongContentType)} />
        }

        <View style={{width:'100%', height:98, backgroundColor:'#333'}}>
          <View style={{flexDirection:'row', justifyContent:'center'}}>
            <View style={{width:'90%', height:28, flexDirection:'row'}}>
              <View style={{width:68, justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize:12,  color:'#AAA'}}>00:00</Text>
              </View>
              <View style={{flex:1, justifyContent:'center'}}>
                <View style={{width:'100%', marginTop:1}} >
                  <SuperSlider />
                </View>
              </View>
              <View style={{width:68, justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize:12,  color:'#AAA'}}>00:00</Text>
              </View>
            </View>
          </View>

          <View style={{flex:1, flexDirection:'row'}}>
            <View style={{width:68, flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
              <TouchableWithoutFeedback onPress={this.changePlayModel} >
                <View>
                  {
                    this.props.music.playModel === 'loop' ?
                      <Text style={[common.icon, {fontSize:24,  color:'#AAA'}]}>&#xe66c;</Text>
                        : this.props.music.playModel === 'single-loop' ?
                          <Text style={[common.icon, {fontSize:24,  color:'#AAA'}]}>&#xe66b;</Text> :
                            <Text style={[common.icon, {fontSize:24,  color:'#AAA'}]}>&#xe607;</Text>
                  }
                </View>
              </TouchableWithoutFeedback>
            </View>
            <View style={{flex:1, flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
              <Text style={[common.icon, {fontSize:28,  color:'#AAA'}]}>&#xe602;</Text>
              <TouchableWithoutFeedback onPress={this.changePlayStatus}>
                <View style={{margin:28}}>
                  {
                    this.props.music.playStatus === false ?
                      <Text style={[common.icon, {fontSize:48,  color:'#AAA'}]}>&#xe6b4;</Text> :
                        <Text style={[common.icon, {fontSize:48,  color:'#AAA'}]}>&#xe8c8;</Text>
                  }
                </View>
              </TouchableWithoutFeedback>
              <Text style={[common.icon, {fontSize:28,  color:'#AAA'}]}>&#xe604;</Text>
            </View>
            <TouchableWithoutFeedback onPress={() => {this.props.dispatch(showBottomPlayList());}}>
              <View style={{width:68, flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                <Text style={[common.icon, {fontSize:24,  color:'#AAA'}]}>&#xe654;</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>

        </View>
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
    this.props.dispatch(changeMusicPlayModel());
  };

  /**
   * 修改播放状态
   */
  changePlayStatus = () => {
    this.props.dispatch(changeMusicPlayStatus());
  }
}

const styles = StyleSheet.create({
});


function reduxState(store) {
  return {
    music: store.music
  }
}

export default connect(reduxState)(Song);
