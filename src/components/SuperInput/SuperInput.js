import React  from 'react';

import {
  StyleSheet,
  View,
  TextInput
} from 'react-native';

import { connect } from 'react-redux'
import Ripple from 'react-native-material-ripple'

import SuperIcon from '../SuperIcon/SuperIcon.js'

/**
 * 输入框组件
 */
class SuperInput extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      textAreaHeight: 22
    };
  }

  render () {
    return (
      <View style={[styles.inputContainer, {height:Math.max(46, this.state.textAreaHeight + 15)}]}>
        <Ripple style={styles.inputBtn}>
          <SuperIcon type={'\ue614'} style={styles.inputIcon} />
        </Ripple>
        <View style={styles.inputTextContainer}>
          <TextInput onContentSizeChange={this._onContentSizeChange.bind(this)} multiline = {true}
                     selectionColor={this.props.color} underlineColorAndroid='transparent'
                     style={[styles.inputText, {height:this.state.textAreaHeight, color:this.props.color}]} />
        </View>
        <Ripple style={styles.inputBtn}>
          <SuperIcon type={'\ue616'} style={styles.inputIcon} />
        </Ripple>
      </View>
    );
  };

  _onContentSizeChange (event) {
    this.setState({
      textAreaHeight: event.nativeEvent.contentSize.height,
    });
  }
}

const styles = StyleSheet.create({
  inputContainer: {width:'100%', flexDirection:'row', backgroundColor:'#282828'},
  inputBtn: {width:43, height:'100%', justifyContent:'center', alignItems:'center'},
  inputIcon: {fontSize:23, color:'#BBB'},
  inputTextContainer: {flex:1, paddingVertical:8, paddingHorizontal:2},
  inputText: {width:'100%', paddingVertical:5, paddingHorizontal:13, fontSize:15, borderRadius:20, backgroundColor:'#383838'}
});

function reduxState(store) {
  return {
    color: store.config.color
  }
}

export default connect(reduxState)(SuperInput);
