import React  from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';

import NavbarFrame from '../NavbarFrame.js'

import { common } from '../../../assets/styles/common.js'

export default class NormalNavbar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <NavbarFrame navbarContent={(

        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
          <TouchableWithoutFeedback onPress={() => {this.props.navigation.goBack()}}>
            <View style={{width:50, flexDirection:'row', justifyContent:'center'}}>
              <Text style={[common.icon, {fontSize:31, color:'#AAA'}]}>&#xe8ca;</Text>
            </View>
          </TouchableWithoutFeedback>

          <View style={{flex:1}}>
            <Text style={{fontSize:22}}>{ this.props.label }</Text>
          </View>
        </View>

      )} />
    )
  }
}
