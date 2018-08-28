import React  from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button,
  TouchableWithoutFeedback
} from 'react-native';

import Ripple from 'react-native-material-ripple'
import { BoxShadow }  from 'react-native-shadow'
import SuperButton from '../../components/SuperButton.js'

import { common } from '../../assets/styles/common.js'



export default class MenuPanel extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <View style={{height:'100%', paddingBottom:54, flex:1, backgroundColor:'rgba(0,0,0,0.8)'}}>
        <View style={{width:'100%', height:Platform.OS === 'ios' ? 118 : 98, paddingTop:Platform.OS === 'ios' ? 20 : 0, flexDirection:'row', backgroundColor:'#444'}}>
          <View style={{width:88, height:'100%', justifyContent:'center', alignItems:'center'}}>
            <Image style={{width:48, height:48, borderWidth:1, borderRadius:4, borderColor:'#666'}} source={{uri:'http://www.chuanke.com/upload/courseware/f/31/3312428/image/09c68fe797fa58d78a1de4f34e0ea40f.gif'}} />
          </View>
          <View style={{flex:1, height:'100%'}}>
            <Text style={{}}>JesBrian</Text>
            <SuperButton/>
          </View>
        </View>

        <ScrollView style={{flex:1}}>
          <View>
            <Text onPress={()=>this.props.navigation.navigate('Register')}>
              跳转注册页面
            </Text>
            <Button title='跳转到详情' onPress={()=>this.props.navigation.navigate('Login')} />
          </View>
        </ScrollView>

        <View style={{width:'100%', height:38, paddingBottom:6, flexDirection:'row', backgroundColor:'#444'}}>
          <Ripple style={{flex:1}}>
            <View style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
              <Text style={[common.icon, {marginRight:8, fontSize:20, color:'#DDD'}]}>&#xeaec;</Text>
              <Text style={{fontSize:18, color:'#DDD'}}>主题</Text>
            </View>
          </Ripple>
          <Ripple style={{flex:1}}>
            <View style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
              <Text style={[common.icon, {marginRight:8, fontSize:20, color:'#DDD'}]}>&#xe672;</Text>
              <Text style={{fontSize:18, color:'#DDD'}}>设置</Text>
            </View>
          </Ripple>
          <Ripple style={{flex:1}}>
            <View style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
              <Text style={[common.icon, {marginRight:8, fontSize:20, color:'#DDD'}]}>&#xe622;</Text>
              <Text style={{fontSize:18, color:'#DDD'}}>退出</Text>
            </View>
          </Ripple>
        </View>
      </View>
    )
  }

  closeControlPanel = () => {
    this.props.closeControlPanel();
  };
}

const styles = StyleSheet.create({
})
