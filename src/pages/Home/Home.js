import React  from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';

import SuperButton from '../../components/SuperButton.js'

import { common } from '../../assets/styles/common.js'

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <TouchableWithoutFeedback onPress={() => {this.props.navigation.goBack()}}>
          <View style={{width:38, height:'100%', position:'absolute', zIndex:2, alignItems:'center', justifyContent:'center', backgroundColor:'#666'}}>
            <Text style={[common.icon, {marginLeft:-5, fontSize:25}]}>&#xe602;</Text>
          </View>
        </TouchableWithoutFeedback>

        <View style={{flex:1}}>
          <View style={{height:248, flexDirection:'column', alignItems:'center',}}>
            <Text>555</Text>
          </View>

          <View style={{flex:1, flexDirection:'column', alignItems:'center', backgroundColor:'#20dbfc'}}>
            <SuperButton label="登录" onPressEvent={() => this.props.navigation.navigate('Login')}/>
            <SuperButton label="注册" onPressEvent={() => this.props.navigation.navigate('Register')}/>
          </View>

          <View style={{height:138, flexDirection:'column', alignItems:'center'}}>
            <Text>其他登陆方式</Text>
            <View style={{flexDirection:'row'}}>
              <SuperButton label="登录" onPressEvent={() => this.props.navigation.navigate('Login')}/>
              <SuperButton label="登录" onPressEvent={() => this.props.navigation.navigate('Login')}/>
              <SuperButton label="登录" onPressEvent={() => this.props.navigation.navigate('Login')}/>
            </View>
            <View style={{flexDirection:'row'}}>
              <SuperButton label="登录" onPressEvent={() => this.props.navigation.navigate('Login')}/>
              <SuperButton label="登录" onPressEvent={() => this.props.navigation.navigate('Login')}/>
              <SuperButton label="登录" onPressEvent={() => this.props.navigation.navigate('Login')}/>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'transparent'
  },
});
