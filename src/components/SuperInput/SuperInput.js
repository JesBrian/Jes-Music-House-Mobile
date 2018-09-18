import React  from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native';

import Ripple from 'react-native-material-ripple'

import { common } from '../../assets/styles/common.js'

import SuperIcon from '../../components/SuperIcon.js'

export default class SuperInput extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      textAreaHeight: 28
    };
  }


  render () {
    return (
      <View style={{width:'100%', height:Math.max(43, this.state.textAreaHeight + 15), flexDirection:'row', backgroundColor:'#282828'}}>
        <Ripple style={{width:46, height:'100%', justifyContent:'center', alignItems:'center'}}>
          <SuperIcon type={'\ue614'} style={{fontSize:23, color:'#BBB'}} />
        </Ripple>
        <View style={{flex:1, paddingTop:7, paddingLeft:2, paddingRight:2}}>
          <TextInput onContentSizeChange={this._onContentSizeChange.bind(this)} multiline = {true}
                     selectionColor={'#2DC9FF'} underlineColorAndroid='transparent'
                     style={{width:'100%', height:Math.max(28, this.state.textAreaHeight), paddingLeft:13, paddingRight:13, color:'#2DC9FF', fontSize:16, borderRadius:14, backgroundColor:'#383838'}} />
        </View>
        <Ripple style={{width:46, height:'100%', justifyContent:'center', alignItems:'center'}}>
          <SuperIcon type={'\ue616'} style={{fontSize:23, color:'#BBB'}} />
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
});
