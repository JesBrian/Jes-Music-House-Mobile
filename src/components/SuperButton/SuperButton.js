import React  from 'react';

import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient'
import { BoxShadow }  from 'react-native-shadow'
import { connect } from 'react-redux'

import { getInt2RGB, getRGBStrByArr } from '../../utils/common/color.js'

/**
 * 按钮组件
 */
class SuperButton extends React.Component {
  static defaultProps = {
    width: 35,
    height: 35
  };

  constructor (props) {
    super(props);
    this.state = {
      isClick: false
    };
  }

  render () {
    // 阴影配置
    const shadowOpt = {
      normal: {width:this.props.width, height:this.props.height, color:"#282828", border:4, radius:3, opacity:0.8, x:0, y:1, style:{marginVertical:5}},
      active: {width:this.props.width, height:this.props.height, color:"#111", border:2.5, radius:3, opacity:0.8, x:0, y:1, style:{marginVertical:5}}
    };
    // 渐变配置
    const colorLinearGradient = {
      normalOutColorArray: [this.getShallowColor(), this.props.color, this.getDeepColor()],
      normalInColorArray: ['#535353', '#222'],
      clickInColorArray: ['#333', '#121212']
    };

    return (
      <BoxShadow setting={this.state.isClick === false ? shadowOpt.normal : shadowOpt.active}>
        <TouchableWithoutFeedback onPress={() => this.props.onPress()} onPressIn={this.buttonOnPress.bind(this)} onPressOut={this.buttonOnPress.bind(this)}>
          <LinearGradient colors={colorLinearGradient.normalOutColorArray} style={styles.superButtonOut}>
            <LinearGradient colors={this.state.isClick === false ? colorLinearGradient.normalInColorArray : colorLinearGradient.clickInColorArray} style={[styles.superButtonIn, this.state.isClick === true ? styles.superButtonInActive : '']}>
              <Text style={[styles.superButtonLabel, this.state.isClick === true ? {color: this.props.color} : null]}>
                { this.props.label }
              </Text>
            </LinearGradient>
          </LinearGradient>
        </TouchableWithoutFeedback>
      </BoxShadow>
    )
  }


  buttonOnPress () {
    this.setState({
      isClick: !this.state.isClick
    });
  };

  getShallowColor () {
    let str = getRGBStrByArr(getInt2RGB(this.props.color), 48);
    return str;
  }
  getDeepColor () {
    let str = getRGBStrByArr(getInt2RGB(this.props.color), -68);
    return str;
  }
}

const styles = StyleSheet.create({
  superButtonOut: {
    padding:4,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:2,
  },
  superButtonIn: {
    width:'100%',
    height:'100%',
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderColor:'#555',
  },
  superButtonInActive: {
    borderColor:'#000'
  },

  superButtonLabel: {
    paddingBottom:1, backgroundColor:'transparent', color:'#AAA', fontSize:16, textShadowOffset:{width:2, height:2}, textShadowRadius:2, textShadowColor:'#000'
  }
});


function reduxState(store) {
  return {
    color: store.config.color
  }
}

export default connect(reduxState)(SuperButton);
