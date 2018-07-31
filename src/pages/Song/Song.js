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
  render() {
    return (
      <View style={styles.container}>
        <SongNavbar/>

        {/*<SongImg/>*/}
        <SongLyric/>

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

            <View style={{flex:1, backgroundColor:'lightgreen'}}>
            </View>

          </View>
        </TouchableWithoutFeedback>
      </View>
    );
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
