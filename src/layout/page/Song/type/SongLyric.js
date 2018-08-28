import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';

import { common } from '../../../../assets/styles/common.js'
import SuperSlider from '../../../../components/SuperSlider.js'

export default class SongLyric extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      volumeStatus: true
    }
  };

  render() {
    return (
      <View style={{flex:1, flexDirection:'column', backgroundColor:'rgba(0,0,0,0.8)'}}>
        <View style={{flexDirection:'row', justifyContent:'center',}}>
          <View style={{width:'88%', height: 28, flexDirection:'row', alignItems:'center'}}>
            <View style={{width:38, height:'100%', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
              <TouchableWithoutFeedback onPress={this.changeVolumeStatus}>
                <View style={{backgroundColor:'transparent'}}>
                  {
                    this.state.volumeStatus === true ?
                      <Text style={[common.icon, {fontSize:21, color:'#AAA'}]}>&#xe6ac;</Text> :
                        <Text style={[common.icon, {fontSize:21, color:'#AAA'}]}>&#xe6aa;</Text>
                  }
                </View>
              </TouchableWithoutFeedback>
            </View>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <View style={{width:'95%', paddingTop:10, paddingLeft:8, borderRadius:4}}>
                <SuperSlider />
              </View>
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
