import React from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';


import NavbarFrame from '../NavbarFrame.js'
import SuperButton from '../../../components/SuperButton.js'

import {common} from '../../../assets/styles/common.js'

export default class IndexNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <NavbarFrame navbarContent={(
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
          <View style={{marginLeft:13}}>
            <SuperButton style={{marginLeft:13}} onPress={this.props.openControlPanel} label={<Text style={[common.icon]}>&#xe654;</Text>} />
          </View>

          <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize:22, color:'#DDD'}}>Music House</Text>
          </View>

          <View style={{marginRight:13}}>
            <SuperButton onPress={() => {this.props.navigation.navigate('Search')}} label={<Text style={[common.icon]}>&#xe65a;</Text>} />
          </View>
        </View>

      )}/>
    )
  }
}
