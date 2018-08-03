import React  from 'react';

import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient'
import { BoxShadow }  from 'react-native-shadow'


export default class SuperButton extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isClick: false,
      normalOutColorArray: ['#23fcfc', '#2e8ce6'],
      clickOutColorArray: ['#23fcfc', '#00d8ff'],
      normalInColorArray: ['#535353', '#222'],
      clickInColorArray: ['#333', '#121212']
    };
  }

  buttonOnPress (e) {
    this.setState({
      isClick: !this.state.isClick
    });
  }

  render () {
    return (
      <BoxShadow setting={this.state.isClick === false ? shadowOpt.normal : shadowOpt.active}>
        <TouchableWithoutFeedback onPress={() => this.props.onPressEvent()} onPressIn={e => this.buttonOnPress(e)} onPressOut={e => this.buttonOnPress(e)}>
          <LinearGradient colors={this.state.normalOutColorArray} style={styles.superButtonOut}>
            <LinearGradient colors={this.state.isClick === false ? this.state.normalInColorArray : this.state.clickInColorArray} style={[styles.superButtonIn, this.state.isClick === true ? styles.superButtonInActive : '']}>
              <Text style={[styles.superButtonLabel, this.state.isClick === true ? styles.superButtonLabelActive : null]}>
                {this.props.label}
              </Text>
            </LinearGradient>
          </LinearGradient>
        </TouchableWithoutFeedback>
      </BoxShadow>
    )
  }
}


const shadowOpt = {
  normal: {
    width:88,
    height:35,
    color:"#282828",
    border:3,
    radius:3,
    opacity:0.8,
    x:0,
    y:1,
    style:{marginVertical:5}
  },
  active: {
    width:88,
    height:35,
    color:"#000",
    border:2,
    radius:3,
    opacity:0.8,
    x:0,
    y:1,
    style:{marginVertical:5}
  }
}

const styles = StyleSheet.create({
  superButtonOut: {
    padding:5,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:2,
  },
  superButtonIn: {
    width:'100%',
    height:25,
    paddingBottom:3,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderColor:'#555',
  },
  superButtonInActive: {
    borderColor:'#000'
  },

  superButtonLabel: {
    backgroundColor:'transparent', color:'#AAA', fontSize:16, textShadowOffset:{width:2, height:2}, textShadowRadius:2, textShadowColor:'#000'
  },
  superButtonLabelActive: {
    color:'#20dbfc'
  }
});
