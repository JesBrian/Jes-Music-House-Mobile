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

            <View style={{flex:1, flexDirection:'row', backgroundColor:'lightgreen'}}>
              <View style={{width:68, flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                <Text style={[common.icon]}>&#xe66c;</Text>
              </View>
              <View style={{flex:1, flexDirection:'row', alignItems:'center', justifyContent:'center', backgroundColor:'#555'}}>
                <Text style={[common.icon]}>&#xe602;</Text>
                <Text style={[common.icon]}>&#xe6b4;</Text>
                <Text style={[common.icon]}>&#xe604;</Text>
              </View>
              <View style={{width:68, flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                <Text style={[common.icon]}>&#xe654;</Text>
              </View>
            </View>

          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }


  changeShowContentType (type = 'img') {
    this.setState({
      showSongContentType: type
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
