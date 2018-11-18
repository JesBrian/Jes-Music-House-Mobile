import React from 'react';

import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback
} from 'react-native';


import { connect } from 'react-redux'
import { showBottomMenu } from '../../../../redux/actions/ViewActions.js'

import Ripple from 'react-native-material-ripple'

import SuperIcon from '../../../../components/SuperIcon/SuperIcon.js'


class SongImg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex:1}}>
        <TouchableWithoutFeedback onPress={() => this.props.changeSongContentType('lyric')}>
          <View style={{marginTop:38, flex:1, alignItems:'center'}}>
            <View style={{width:Dimensions.get('window').width * 0.84, height:Dimensions.get('window').width * 0.84, justifyContent:'center', alignItems:'center', position:'relative', borderRadius:Dimensions.get('window').width * 0.42, backgroundColor:'transparent'}} >
              <Image style={{width:'100%', height:'100%', borderWidth:6, borderColor:'#383838', borderRadius:Dimensions.get('window').width * 0.42}} source={require('../../../../assets/images/default/disk.png')} />
              <Image style={{width:'68%', height:'68%', position:'absolute', borderRadius:Dimensions.get('window').width * 0.2856}} source={{uri:'https://avatars3.githubusercontent.com/u/25942696?s=88&v=4'}} />
            </View>
          </View>
        </TouchableWithoutFeedback>
        <View style={{height:48, flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
          <Ripple style={{height:'100%', flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <SuperIcon type={'\ue80d'} style={{fontSize:28, color:'#AAA'}} />
          </Ripple>
          <Ripple style={{height:'100%', flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <SuperIcon type={'\ue63c'} style={{fontSize:28, color:'#AAA'}} />
          </Ripple>
          <Ripple onPress={() => {this.props.config.navigation.navigate('Comment')}} style={{height:'100%', flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <SuperIcon type={'\ue638'} style={{fontSize:28, color:'#AAA'}} />
          </Ripple>
          <Ripple onPress={this.showSongMenu.bind(this)} style={{height:'100%', flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <SuperIcon type={'\ue653'} style={{fontSize:28, color:'#AAA'}} />
          </Ripple>
        </View>
      </View>
    );
  }

  showSongMenu () {
    this.props.dispatch(showBottomMenu('SongPage'))
  };
}

const styles = StyleSheet.create({});


function reduxState(store) {
  return {
    config: store.config,
    music: store.music
  }
}

export default connect(reduxState)(SongImg);
