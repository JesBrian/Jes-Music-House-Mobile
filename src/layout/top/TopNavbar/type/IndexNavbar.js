import React from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import { withNavigation } from 'react-navigation'

import NavbarFrame from '../NavbarFrame.js'
import SuperButton from '../../../../components/SuperButton/SuperButton.js'

import { common } from '../../../../assets/styles/common.js'
import SuperIcon from '../../../../components/SuperIcon/SuperIcon.js'

class IndexNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <NavbarFrame navbarContent={(
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
          <View style={{marginLeft:13}}>
            <SuperButton style={{marginLeft:13}} onPress={this.props.openControlPanel} label={<SuperIcon type={'\ue654'} />} />
          </View>

          <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize:22, color:'#DDD'}}>Music House</Text>
          </View>

          <View style={{marginRight:13}}>
            <SuperButton onPress={() => {this.props.navigation.navigate('Search')}} label={<SuperIcon type={'\ue65a'} />} />
          </View>
        </View>

      )}/>
    )
  }
}

export default withNavigation(IndexNavbar)
