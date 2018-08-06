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

export default class SearchNavbar extends React.Component {
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
              <Text style={[common.icon, {fontSize:31}]}>&#xe8ca;</Text>
            </View>
          </TouchableWithoutFeedback>

          <View style={{flex:1}}>
            <TextInput onChangeText={(text) => { this.setState({searchKey: text})}} value={this.state.searchKey}
            style={{width:'100%', height:38, paddingLeft:8, borderRadius:6, backgroundColor:'#282828', color:'#38daf0'}} />
          </View>

          <TouchableWithoutFeedback>
            <View style={{width:50, flexDirection:'row', justifyContent:'center'}}>
              <Text style={[common.icon, {fontSize:31}]}>&#xe65a;</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>

      )} />
    )
  }
}
