import React from 'react';

import {
  Dimensions,
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback
} from 'react-native';


import { connect } from 'react-redux'
import { showBottomMenu } from '../../../../redux/actions/ViewActions.js'

import Swiper from 'react-native-swiper'
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
        <View style={{flex:1, alignItems:'center'}}>
          <View style={{width:Dimensions.get('window').width * 0.83, height:Dimensions.get('window').width * 0.83, top:28, borderRadius:Dimensions.get('window').width * 0.465, backgroundColor:'#333', borderWidth:1, borderColor:'#282828'}}>
            <Swiper loop={true} showButtons={false} showsPagination={false} >
              <TouchableWithoutFeedback onPress={() => this.props.changeSongContentType('lyric')}>
                <View style={{flex:1, justifyContent:'center', alignItems:'center', position:'relative'}} >
                  <Image style={{width:Dimensions.get('window').width * 0.8, height:Dimensions.get('window').width * 0.8, borderRadius:Dimensions.get('window').width * 0.4}} source={require('../../../../assets/images/default/disk.png')} />
                  <Image style={{width:Dimensions.get('window').width * 0.5, height:Dimensions.get('window').width * 0.5, position:'absolute', borderRadius:Dimensions.get('window').width * 0.25}} source={{uri:'https://avatars3.githubusercontent.com/u/25942696?s=88&v=4'}} />
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => this.props.changeSongContentType('lyric')}>
                <View style={{flex:1, justifyContent:'center', alignItems:'center', position:'relative'}} >
                  <Image style={{width:Dimensions.get('window').width * 0.8, height:Dimensions.get('window').width * 0.8, borderRadius:Dimensions.get('window').width * 0.4}} source={require('../../../../assets/images/default/disk.png')} />
                  <Image style={{width:Dimensions.get('window').width * 0.5, height:Dimensions.get('window').width * 0.5, position:'absolute', borderRadius:Dimensions.get('window').width * 0.25}} source={{uri:'https://avatars3.githubusercontent.com/u/25942696?s=88&v=4'}} />
                </View>
              </TouchableWithoutFeedback>
            </Swiper>
          </View>
        </View>
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

  renderCanvas (canvas) {
    const ctx = canvas.getContext('2d');
  }
}

const styles = StyleSheet.create({
});

function reduxState(store) {
  return {
    config: store.config,
    music: store.music
  }
}

export default connect(reduxState)(SongImg);
