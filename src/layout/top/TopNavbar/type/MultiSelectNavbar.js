import React  from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';

import { connect } from 'react-redux'
import { hiddenModal } from '../../../../redux/actions/ViewActions.js'

import NavbarFrame from '../NavbarFrame.js'

import SuperIcon from '../../../../components/SuperIcon/SuperIcon.js'
import SuperButton from '../../../../components/SuperButton/SuperButton.js'

class MultiSelectNavbar extends React.Component {
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
          <TouchableWithoutFeedback onPress={() => this.props.dispatch(hiddenModal())}>
            <View style={{width:50, height:'100%', flexDirection:'row', justifyContent:'center'}}>
              <SuperIcon type={'\ue8ca'} style={{fontSize:31, color:'#BBB'}} />
            </View>
          </TouchableWithoutFeedback>

          <View style={{flex:1}}>
            <Text style={{fontSize:21, color:'#DDD'}}>{ this.props.label }</Text>
          </View>

          <View style={{marginRight:8}}>
            <SuperButton label={'取消全选'} width={78} onPress={() => {}}/>
          </View>
        </View>

      )} />
    )
  }
}

function reduxState(store) {
  return {
  }
}

export default connect(reduxState)(MultiSelectNavbar);
