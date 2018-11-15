import React  from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';

import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import NavbarFrame from '../NavbarFrame.js'

import { common } from '../../../../assets/styles/common.js'
import SuperIcon from '../../../../components/SuperIcon/SuperIcon.js'


class NormalNavbar extends React.Component {
  static defaultProps = {
    label: '',
    right: null
  };

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
            <View style={{width:50, height:'100%', flexDirection:'row', justifyContent:'center'}}>
              <SuperIcon type={'\ue8ca'} style={{fontSize:31, color:'#BBB'}} />
            </View>
          </TouchableWithoutFeedback>

          <View style={{flex:1}}>
            <Text style={{fontSize:21, color:'#DDD'}}>{ this.props.label }</Text>
          </View>

          { this.props.right }
        </View>

      )} />
    )
  }
}

export default withNavigation(NormalNavbar);
