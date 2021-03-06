import React  from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';

import { connect } from 'react-redux'

import { withNavigation } from 'react-navigation'

import { common } from '../../../assets/styles/common.js'
import SuperIcon from '../../../components/SuperIcon.js'
import NavbarFrame from '../NavbarFrame.js'


class SongNavbar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <NavbarFrame navbarContent={(

        <View style={{flex:1, flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
          <TouchableWithoutFeedback onPress={() => {this.props.navigation.goBack()}}>
            <View style={{width:45, flexDirection:'row', justifyContent:'center'}}>
              <SuperIcon type={'\ue8ca'} style={{fontSize:31, color:'#BBB'}} />
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
              <SuperIcon type={'\ue615'} style={{fontSize:31, color:'#BBB'}} />
            </View>
          </TouchableWithoutFeedback>
        </View>

      )}/>
    )
  }
}

const styles = StyleSheet.create({
})

export default withNavigation(SongNavbar);
