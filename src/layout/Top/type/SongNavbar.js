import React  from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';

import { common } from '../../../assets/styles/common.js'
import NavbarFrame from '../NavbarFrame.js'

export default class SearchNavbar extends React.Component {
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

          <TouchableWithoutFeedback>
            <View style={{flex:1, justifyContent:'flex-start'}}>
              <Text>dc432f生成gv纯净水hjk</Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback>
            <View style={{width:50, flexDirection:'row', justifyContent:'center'}}>
              <Text style={[common.icon, {fontSize:31, color:'#AAA'}]}>&#xe615;</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>

      )}/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height:55,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#444'
  },
})
