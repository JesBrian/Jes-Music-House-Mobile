import React  from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback
} from 'react-native';

import NavbarFrame from '../NavbarFrame.js'

import { common } from '../../../assets/styles/common.js'

export default class PlayListNavbar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      searchKey: '',
    };
  }

  render () {
    return (
      <NavbarFrame navbarContent={(

        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
          <TouchableWithoutFeedback onPress={() => {this.props.navigation.goBack()}}>
            <View style={{width:45, flexDirection:'row', justifyContent:'center'}}>
              <Text style={[common.icon, {fontSize:31, color:'#BBB'}]}>&#xe8ca;</Text>
            </View>
          </TouchableWithoutFeedback>

          <View style={{flex:1}}>
            <Text style={{fontSize:21, color:'#DDD'}}>歌单</Text>
          </View>

          <TouchableWithoutFeedback>
            <View style={{width:50, flexDirection:'row', justifyContent:'center'}}>
              <Text style={[common.icon, {fontSize:31, color:'#BBB'}]}>&#xe65a;</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>

      )} />
    )
  }
}
