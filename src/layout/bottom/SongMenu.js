import React  from 'react';

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';


import { connect } from 'react-redux'
import { hiddenBottomSongMenu } from '../../redux/actions/ViewActions.js'

import Ripple from 'react-native-material-ripple'

import { common } from '../../assets/styles/common.js'


class SongMenu extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <View style={{width:'100%', height:'100%', bottom:0, left:0, flex:1, position:'absolute', backgroundColor:'transparent', zIndex:18}}>
        <View style={{flex:1, backgroundColor:'rgba(0, 0, 0, 0.68)'}}>
          <TouchableWithoutFeedback onPress={() => {this.props.dispatch(hiddenBottomSongMenu())}}>
            <View style={{flex:1}}/>
          </TouchableWithoutFeedback>

          <View style={{width:'100%', height:338, position:'relative', flexDirection:'column'}}>
            <View style={{width:'100%', height:33, justifyContent:'center', borderTopLeftRadius:12, borderTopRightRadius:12, backgroundColor:'#444'}}>
              <Text style={{marginLeft:15, color:'#AAA'}}>歌曲：The Name of the Song</Text>
            </View>

            <ScrollView style={{flex:1, backgroundColor:'#FFF'}}>
              <Ripple style={{height:33, flexDirection:'row', backgroundColor:'lightgreen'}}>
                <View style={{width:38, justifyContent:'center', alignItems:'center'}}>
                  <Text style={[common.icon, {fontSize:21}]}>&#xe6b4;</Text>
                </View>
                <View style={{justifyContent:'center'}}>
                  <Text style={{fontSize:15}}>下一首播放</Text>
                </View>
              </Ripple>
            </ScrollView>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
})

function reduxState(store) {
  return {
    config: store.config,
    music: store.music,
    showView: store.showView
  }
}

export default connect(reduxState)(SongMenu);

