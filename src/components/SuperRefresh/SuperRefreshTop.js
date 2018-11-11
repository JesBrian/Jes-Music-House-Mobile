import React  from 'react';

import {
  StyleSheet,
  View,
  Image
} from 'react-native';
import SuperLoading from "../SuperLoading";

/**
 * 顶部刷新loading组件
 */
export default class SuperRefreshTop extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }


  render () {
    return (
      <View style={{width:53, height:53, position:'absolute', justifyContent:'center', alignItems:'center'}}>
        <Image source={require('../../assets/images/default/refresh-top.png')} style={{width:'100%', height:'100%', top:0, left:0, position:'absolute'}} />
        <View style={{width:42, height:42, justifyContent:'center', alignItems:'center', borderRadius:20, backgroundColor:'#666'}}>
          <SuperLoading size={33} type={'FadingCircleAlt'} style={{margin:6}} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
});
