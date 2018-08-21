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
              <Text style={[common.icon, {fontSize:31, color:'#BBB'}]}>&#xe8ca;</Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback>
            <View style={{flex:1, flexDirection:'column', justifyContent:'flex-start'}}>
              <Text style={{fontSize:18, color:'#DDD'}}>dc432f生成gv纯净水hjk</Text>
              <Text style={{fontSize:16, color:'#999'}}>JesBrian</Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback>
            <View style={{width:50, flexDirection:'row', justifyContent:'center'}}>
              <Text style={[common.icon, {fontSize:31, color:'#BBB'}]}>&#xe615;</Text>
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
