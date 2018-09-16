import React from 'react';

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';

import { common } from '../../../assets/styles/common.js'
import SuperIcon from '../../../components/SuperIcon.js'
import SuperSlider from '../../../components/SuperSlider.js'

export default class SongLyric extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      volumeStatus: true,
      volumeRace: 0.68
    }
  };

  render() {
    return (
      <View style={{flex:1, flexDirection:'column'}}>
        <View style={{flexDirection:'row', justifyContent:'center',}}>
          <View style={{width:'88%', height:43, flexDirection:'row', alignItems:'center'}}>
            <TouchableWithoutFeedback onPress={this.changeVolumeStatus}>
              <View style={{width:38, height:'100%', justifyContent:'center', alignItems:'center', backgroundColor:'transparent'}}>
                {
                  this.state.volumeStatus === true ?
                    <SuperIcon type={'\ue6ac'} style={{fontSize:21, color:'#AAA'}} /> :
                      <SuperIcon type={'\ue6aa'} style={{fontSize:21, color:'#AAA'}} />
                }
              </View>
            </TouchableWithoutFeedback>
            <View style={{top:-1, flex:1, justifyContent:'center'}}>
              <SuperSlider setPropsValue={value => {this.setState({volumeRace: value})}} value={this.state.volumeRace} />
            </View>
          </View>
        </View>

        <TouchableWithoutFeedback onPress={() => this.props.changeSongContentType('img')}>
          <View style={{flex:1}}>
            <Text>歌曲页面播放[歌曲歌词]</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }

  changeVolumeStatus = () => {
    this.setState({
      volumeStatus: !this.state.volumeStatus
    });
  };
}

const styles = StyleSheet.create({});
