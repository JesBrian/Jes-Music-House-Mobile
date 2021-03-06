import React  from 'react';

import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';

import Ripple from 'react-native-material-ripple'

import SuperButton from '../../components/SuperButton.js'

import { common } from '../../assets/styles/common.js'
import SuperIcon from '../../components/SuperIcon.js'

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <Ripple onPress={() => {this.props.navigation.goBack()}} style={{width:38, height:'100%', position:'absolute', zIndex:2, alignItems:'center', justifyContent:'center'}}>
          <SuperIcon type={'\ue602'} style={{marginLeft:-5, fontSize:25, color:"#BBB"}} />
        </Ripple>

        <View style={{flex:1}}>
          <View style={{height:238, flexDirection:'column', alignItems:'center',}}>
          </View>

          <View style={{flex:1, flexDirection:'column', alignItems:'center',}}>
            <SuperButton label="手机号登录" width={Dimensions.get('window').width - 99} height={53} onPress={() => this.props.navigation.navigate('Login')}/>
            <SuperButton label="注册" width={Dimensions.get('window').width - 99} height={53} onPress={() => this.props.navigation.navigate('Register')}/>
          </View>

          <View style={{height:168, flexDirection:'column', alignItems:'center'}}>
            <Text>其他登陆方式</Text>
            <View style={{flexDirection:'row'}}>
              <View style={{flex:1, alignItems:'center'}}>
                <SuperButton label="登录" onPress={() => this.props.navigation.navigate('Login')}/>
              </View>
              <View style={{flex:1, alignItems:'center'}}>
                <SuperButton label="登录" onPress={() => this.props.navigation.navigate('Login')}/>
              </View>
              <View style={{flex:1, alignItems:'center'}}>
                <SuperButton label="登录" onPress={() => this.props.navigation.navigate('Login')}/>
              </View>
            </View>
            <View style={{flexDirection:'row'}}>
              <View style={{flex:1, alignItems:'center'}}>
                <SuperButton style={{marginLeft:18}} label="登录" onPress={() => this.props.navigation.navigate('Login')}/>
              </View>
              <View style={{flex:1, alignItems:'center'}}>
                <SuperButton style={{marginLeft:18}} label="登录" onPress={() => this.props.navigation.navigate('Login')}/>
              </View>
              <View style={{flex:1, alignItems:'center'}}>
                <SuperButton style={{marginLeft:18}} label="登录" onPress={() => this.props.navigation.navigate('Login')}/>
              </View>
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
    backgroundColor: 'rgba(0,0,0,0.73)'
  },
});
