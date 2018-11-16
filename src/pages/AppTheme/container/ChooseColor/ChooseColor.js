import React  from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import { connect } from 'react-redux'
import { setColor } from '../../../../redux/actions/ConfigActions.js'

import Ripple from 'react-native-material-ripple'
import LinearGradient from 'react-native-linear-gradient'

import SuperSectionNavbar from '../../../../components/SuperSectionNavbar/SuperSectionNavbar.js'

class ChooseColor extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <View style={{width:'90%', marginVertical:18, alignItems:'center', position:'relative'}}>
        <SuperSectionNavbar title={'调色盘'} />
        <Ripple onPress={this.changeAppColor.bind(this, '#4cf0ab')} style={{width:68, height:28, top:3, right:12, position:'absolute', justifyContent:'center', alignItems:'center', borderRadius:3, borderWidth:1, borderColor:this.props.color, backgroundColor:'rgba(0,0,0,0.28)'}}>
          <Text style={{color:this.props.color}}>应用</Text>
        </Ripple>
        <View style={{height:68, marginTop:8, flexDirection:'row'}}>
          <View style={{width:53, height:68, marginRight:15, marginBottom:5, position:'relative',borderRadius:8, backgroundColor:this.props.color}} />
          <View style={{paddingTop:20, flex:1, justifyContent:'center'}}>
            <LinearGradient start={{x:0, y:0}} end={{x:1, y:0}} colors={['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#8B00FF']} style={{width:'100%', height:10, marginTop:8, marginBottom:8, borderRadius:10}} />
            <LinearGradient start={{x:0, y:0}} end={{x:1, y:0}} colors={['#FFF', this.props.color, '#000']} style={{width:'100%', height:10, marginTop:8, marginBottom:8, borderRadius:10}} />
          </View>
        </View>
      </View>
    )
  }

  changeAppColor (color) {
    this.props.dispatch(setColor(color))
  };

}

const styles = StyleSheet.create({
});

function reduxState(store) {
  return {
    color: store.config.color
  }
}

export default connect(reduxState)(ChooseColor);
