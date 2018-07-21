import React  from 'react';

import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient'


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
      <TouchableWithoutFeedback onPressIn={e => this.buttonOnPress(e)} onPressOut={e => this.buttonOnPress(e)}>
        <LinearGradient colors={this.state.isClick === false ? this.state.normalOutColorArray : this.state.clickOutColorArray} style={styles.superButtonOut}>
          <LinearGradient colors={this.state.isClick === false ? this.state.normalInColorArray : this.state.clickInColorArray} style={styles.superButtonIn}>
            <Text style={{color:'#fff', fontSize: 16,}}>
              {this.props.label}
            </Text>
          </LinearGradient>
        </LinearGradient>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  superButtonOut: {
    padding:6,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:4
  },
  superButtonIn: {
    height:25,
    paddingLeft:8,
    paddingRight:8,
    paddingBottom:1,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:2
  },
});
