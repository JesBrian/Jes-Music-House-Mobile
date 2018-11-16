import React  from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import { connect } from 'react-redux'
import { setTheme } from '../../../../redux/actions/ConfigActions.js'

import Ripple from 'react-native-material-ripple'

import SuperIcon from '../../../../components/SuperIcon/SuperIcon.js'
import SuperSectionNavbar from '../../../../components/SuperSectionNavbar/SuperSectionNavbar.js'

class ChooseTheme extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <View style={{width:'90%', marginVertical:18, alignItems:'center'}}>
        <SuperSectionNavbar title={'模式切换'} />
        <View style={{width:'100%', marginTop:8, marginHorizontal:'auto', flexDirection:'row', justifyContent:'space-between'}}>
          <Ripple onPress={this.changeAppTheme.bind(this, 'light')} style={{width:'45%', height:43, marginTop:3, flexDirection:'row', justifyContent:'center', alignItems:'center', borderRadius:5, borderWidth:1, borderColor:this.props.color, backgroundColor:'rgba(0,0,0,0.28)'}}>
            <SuperIcon type={'\ue6c7'} style={{marginRight:8, fontSize:23, color:this.props.color}}/>
            <Text style={{fontSize:16, color:this.props.color}}>日间模式</Text>
          </Ripple>
          <Ripple onPress={this.changeAppTheme.bind(this, 'dark')} style={{width:'45%', height:43, marginTop:3, flexDirection:'row', justifyContent:'center', alignItems:'center', borderRadius:5, borderWidth:1, borderColor:this.props.color, backgroundColor:'rgba(0,0,0,0.28)'}}>
            <SuperIcon type={'\ue650'} style={{marginRight:8, fontSize:23, color:this.props.color}}/>
            <Text style={{fontSize:16, color:this.props.color}}>夜间模式</Text>
          </Ripple>
        </View>
      </View>
    )
  }

  changeAppTheme (theme) {
    this.props.dispatch(setTheme(theme))
  };
}

const styles = StyleSheet.create({
});

function reduxState(store) {
  return {
    color: store.config.color,
    theme: store.config.theme
  }
}

export default connect(reduxState)(ChooseTheme);
