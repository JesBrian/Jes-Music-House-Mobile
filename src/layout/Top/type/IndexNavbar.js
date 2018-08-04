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
          <SuperButton onPressEvent={this.props.openControlPanel} style={{}} label={<Text style={[common.icon]}>&#xe654;</Text>} />
          <View style={{flex:1}}>
          </View>
          <SuperButton onPressEvent={() => {this.props.navigation.navigate('Search')}} label={<Text style={[common.icon]}>&#xe65a;</Text>} />
        </View>

      )}/>
    )
  }
}
