import React  from 'react';

import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity
} from 'react-native';

import {common} from '../../assets/styles/common.js'


export default class NowPlayList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <View style={{width:'100%', height:'100%', bottom:0, left:0, flex:1, position:'absolute', backgroundColor:'rgba(0, 0, 0, 0.5)', zIndex:5}}>
        <TouchableOpacity style={{flex:1}}>
          <View />
        </TouchableOpacity>
        <View style={{height:338, position:'relative', flex:1, flexDirection:'column', borderTopLeftRadius:12, borderTopRightRadius:12, backgroundColor:'#333'}}>
          <View style={{width:'100%', height:68, borderTopLeftRadius:12, borderTopRightRadius:12, backgroundColor:'#20dbfc'}}>
            <Text>555</Text>
          </View>
          <ScrollView style={{flex:1}}>
          </ScrollView>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
})
