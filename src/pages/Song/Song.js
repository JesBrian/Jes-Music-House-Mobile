import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';


import { connect } from 'react-redux'
import { showBottomPlayList } from '../../redux/actions/ViewActions.js'
import { changeMusicPlayStatus, changeMusicPlayModel } from '../../redux/actions/MusicActions.js'

import SongNavbar from '../../layout/top/type/SongNavbar.js'
import SongImg from './type/SongImg.js'
import SongLyric from './type/SongLyric.js'
import SuperSliderPointer from '../../components/SuperSliderPointer.js'
import SuperIcon from '../../components/SuperIcon.js'
import {hiddenBottomMusic, showBottomMusic} from "../../redux/actions/ViewActions";


class Song extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      showSongContentType: 'img', // [ img/lyric ]
      nowPlayRace: 0
    };
  }

  componentWillMount () {
    this.props.dispatch(hiddenBottomMusic())
  }

  componentWillUnmount () {
    this.props.dispatch(showBottomMusic())
  }

  render() {
    return (
      <View style={{width:'100%', height:'100%', top:0, left:0, flex:1, backgroundColor:'#FFF'}}>
        <SongNavbar navigation={this.props.navigation}/>

        <View style={{flex:1, backgroundColor:'rgba(0,0,0,0.73)'}}>

          {
            this.state.showSongContentType === 'img' ?
              <SongImg changeSongContentType={showSongContentType => this.changeShowContentType(showSongContentType)} /> :
                <SongLyric changeSongContentType={showSongContentType => this.changeShowContentType(showSongContentType)} />
          }

          <View style={{width:'100%', height:98, alignItems:'center'}}>
            <View style={{width:'90%', height:28, flexDirection:'row', justifyContent:'center'}}>
              <View style={{width:68, justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize:12,  color:'#AAA'}}>00:00</Text>
              </View>

              <SuperSliderPointer setPropsValue={value => {this.setState({nowPlayRace: value})}} value={this.state.nowPlayRace} />

              <View style={{width:68, justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize:12,  color:'#AAA'}}>00:00</Text>
              </View>
            </View>

            <View style={{width:'96%', flex:1, flexDirection:'row'}}>
              <View style={{width:68, flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                <TouchableWithoutFeedback onPress={this.changePlayModel} >
                  <View>
                    {
                      this.props.music.playModel === 'loop' ?
                        <SuperIcon type={'\ue66c'} style={{fontSize:24,  color:'#AAA'}}/>
                          : this.props.music.playModel === 'single-loop' ?
                            <SuperIcon type={'\ue66b'} style={{fontSize:24,  color:'#AAA'}}/> :
                              <SuperIcon type={'\ue607'} style={{fontSize:24,  color:'#AAA'}}/>
                    }
                  </View>
                </TouchableWithoutFeedback>
              </View>
              <View style={{flex:1, flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                <SuperIcon type={'\ue602'} style={{fontSize:28,  color:'#AAA'}}/>
                <TouchableWithoutFeedback onPress={this.changePlayStatus}>
                  <View style={{margin:28}}>
                    {
                      this.props.music.playStatus === false ?
                        <SuperIcon type={'\ue6b4'} style={{fontSize:48,  color:'#AAA'}}/> :
                          <SuperIcon type={'\ue8c8'} style={{fontSize:48,  color:'#AAA'}}/>
                    }
                  </View>
                </TouchableWithoutFeedback>
                <SuperIcon type={'\ue604'} style={{fontSize:28,  color:'#AAA'}}/>
              </View>
              <TouchableWithoutFeedback onPress={() => {this.props.dispatch(showBottomPlayList());}}>
                <View style={{width:68, flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                  <SuperIcon type={'\ue618'} style={{fontSize:24, color:'#AAA'}}/>
                </View>
              </TouchableWithoutFeedback>
            </View>

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
