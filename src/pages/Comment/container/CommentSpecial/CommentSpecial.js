import React  from 'react';

import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableWithoutFeedback
} from 'react-native';

import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'

import SuperIcon from '../../../../components/SuperIcon/SuperIcon.js'

class CommentSpecial extends React.Component {
  render () {
    return (
      <View>
        <View style={{height:28, flexDirection:'row', alignItems:'center', backgroundColor:'rgba(255,255,255,0.12)'}}>
          <SuperIcon type={'\ue8cb'} style={{margin:8, color:this.props.color}}/>
          <Text style={{color:'#EEE'}}>精彩评论</Text>
        </View>
        <TouchableWithoutFeedback onPress={() => {alert(6)}}>
          <View style={{flexDirection:'row'}}>
            <TouchableWithoutFeedback onPress={() => {this.props.navigation.navigate('User')}}>
              <Image style={{width:32, height:32, margin:8, borderRadius:16}} source={{uri:'https://avatars3.githubusercontent.com/u/25942696?s=88&v=4'}} />
            </TouchableWithoutFeedback>
            <View style={{flex:1}}>
              <View style={{height:43, paddingTop:6, position:'relative', justifyContent:'center'}}>
                <TouchableWithoutFeedback onPress={() => {this.props.navigation.navigate('User')}}>
                  <Text style={{color:this.props.color}}>JesBrian</Text>
                </TouchableWithoutFeedback>
                <Text style={{fontSize:12}}>2018-09-16</Text>
                <TouchableWithoutFeedback onPress={() => {alert(8)}}>
                  <View style={{top:2, right:4, padding:6, position:'absolute', flexDirection:'row'}}>
                    <Text>333</Text>
                    <SuperIcon type={'\ue80d'} style={{marginLeft:3, fontSize:16}} />
                  </View>
                </TouchableWithoutFeedback>
              </View>
              <View style={{paddingRight:10, paddingBottom:8, borderBottomWidth:0.18, borderColor:'#CCC'}}>
                <Text>cbdbchdsbv出版社不成熟超声波还不成熟cnjs32不开花那会计难看324该2看cdnsjc4充满了32</Text>
                <View style={{marginTop:8, marginBottom:6, padding:6, borderRadius:4, borderWidth:0.38, borderColor:'#888', backgroundColor:'#333'}}>
                  <Text>
                    <TouchableWithoutFeedback onPress={() => {this.props.navigation.navigate('User')}}>
                      <Text style={{color:this.props.color}}>JesBrian</Text>
                    </TouchableWithoutFeedback>
                    : 不睡觉见v3gbj才能不到家vgd见3424你上课表4后cbskj回家撒dsdkvjsd被2渝北补代表jhcbxjh
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});

function reduxState(store) {
  return {
    color: store.config.color
  }
}

export default connect(reduxState)(withNavigation(CommentSpecial));
