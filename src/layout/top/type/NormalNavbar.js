import React  from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';

import { connect } from 'react-redux'

import NavbarFrame from '../NavbarFrame.js'

import { common } from '../../../assets/styles/common.js'


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
              <Text style={[common.icon, {fontSize:31, color:'#BBB'}]}>&#xe8ca;</Text>
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

function reduxState(store) {
  return {
    config: store.config
  }
}

export default connect(reduxState)(NormalNavbar);
