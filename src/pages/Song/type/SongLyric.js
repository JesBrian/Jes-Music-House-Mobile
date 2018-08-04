import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';

import {common} from '../../../assets/styles/common.js'

export default class SongLyric extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      volumeStatus: true
    }
  };

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{flexDirection: 'row', justifyContent: 'center',}}>
          <View style={{width: '88%', height: 28, flexDirection: 'row', alignItems:'center'}}>
            <View style={{width: 38, height: '100%', flexDirection: 'row', justifyContent:'center', alignItems:'center'}}>
              <TouchableWithoutFeedback onPress={this.changeVolumeStatus}>
                <View>
                  {
                    this.state.volumeStatus === true ?
                      <Text style={[common.icon, {fontSize:21}]}>&#xe6ac;</Text> : <Text style={[common.icon, {fontSize:21}]}>&#xe6aa;</Text>
                  }
                </View>
              </TouchableWithoutFeedback>
            </View>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <TouchableWithoutFeedback>
                <View style={{width: '95%', height: 4, borderRadius:4, backgroundColor: 'green'}}/>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>

        <TouchableWithoutFeedback onPress={() => this.props.changeSongContentType('img')}>
          <View style={{flex: 1, backgroundColor: 'yellow'}}>
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
