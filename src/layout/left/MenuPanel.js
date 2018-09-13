import React  from 'react';

import {
  Dimensions,
  Text,
  View,
  ScrollView,
  Image,
  TouchableWithoutFeedback
} from 'react-native';

import { connect } from 'react-redux'
import { setTheme } from '../../redux/actions/ConfigActions.js'

import Ripple from 'react-native-material-ripple'
import { BoxShadow }  from 'react-native-shadow'

import SuperIcon from '../../components/SuperIcon.js'
import SuperButton from '../../components/SuperButton.js'

import { common, theme } from '../../assets/styles/common.js'


class MenuPanel extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render () {
    const shadowOpt = {
      width:Dimensions.get('window').width * 0.82, height:118, color:"#383838", border:12, opacity:0.8, x:-8, y:1,
    };


    const menuData = [
      {icon:'\ue638', name:'我的消息'},
      {icon:'\ue671', name:'我的消息1'},
      {icon:'\ueaec', name:'个性彩色'}
    ];


    return (
      <View style={{height:'100%', paddingBottom:53, flex:1}}>
        <BoxShadow setting={shadowOpt}>
          <View style={{paddingTop:20, flex:1, flexDirection:'row', backgroundColor:this.props.config.theme === 'light' ? '#F8F8F8' : '#282828'}}>
            <View style={{width:88, height:'100%', justifyContent:'center', alignItems:'center'}}>
              <Image style={{width:48, height:48, borderWidth:1, borderRadius:4, borderColor:'#666'}} source={{uri:'http://www.chuanke.com/upload/courseware/f/31/3312428/image/09c68fe797fa58d78a1de4f34e0ea40f.gif'}} />
            </View>
            <View style={{flex:1}}>
              <Text style={{backgroundColor:'transparent'}}>JesBrian</Text>
              <SuperButton/>
            </View>
          </View>
        </BoxShadow>

        <ScrollView style={{paddingTop:12, paddingBottom:12, flex:1, backgroundColor:this.props.config.theme === 'light' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.73)'}}>
          <Ripple onPress={() => {this.props.config.navigation.navigate('AppTheme')}} style={{width:'100%', height:38, flexDirection:'row', alignItems:'center', backgroundColor:'lightgreen'}}>
            <SuperIcon type={'\ueaec'} style={{margin:12}} />
            <Text>个性彩色</Text>
          </Ripple>
        </ScrollView>

        <View style={{width:'100%', height:43, paddingBottom:6, flexDirection:'row', backgroundColor:'#333'}}>
          <Ripple onPress={() => {this.props.dispatch(setTheme())}} style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            {
              this.props.config.theme === 'light' ? (
                <View style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                  <SuperIcon type={'\ue650'} style={{marginRight:8, fontSize:20, color:'#DDD'}} />
                  <Text style={{fontSize:18, color:'#DDD'}}>夜间</Text>
                </View>
              ) : (
                <View style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                  <SuperIcon type={'\ue6c7'} style={{marginRight:8, fontSize:20, color:'#DDD'}} />
                  <Text style={{fontSize:18, color:'#DDD'}}>日间</Text>
                </View>
              )
            }
          </Ripple>
          <Ripple onPress={() => {}} style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <SuperIcon type={'\ue672'} style={{marginRight:8, fontSize:20, color:'#DDD'}} />
            <Text style={{fontSize:18, color:'#DDD'}}>设置</Text>
          </Ripple>
          <Ripple onPress={() => {}} style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <SuperIcon type={'\ue622'} style={{marginRight:8, fontSize:20, color:'#DDD'}} />
            <Text style={{fontSize:18, color:'#DDD'}}>退出</Text>
          </Ripple>
        </View>
      </View>
    )
  }

  closeControlPanel = () => {
    this.props.closeControlPanel();
  };
}


function reduxState(store) {
  return {
    config: store.config
  }
}

export default connect(reduxState)(MenuPanel);
