import React  from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback, Dimensions
} from 'react-native';

import SuperButton from '../../components/SuperButton.js'

import { common } from '../../assets/styles/common.js'

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <TouchableWithoutFeedback onPress={() => {this.props.navigation.goBack()}}>
          <View style={{width:38, height:'100%', position:'absolute', zIndex:2, alignItems:'center', justifyContent:'center'}}>
            <Text style={[common.icon, {marginLeft:-5, fontSize:25}]}>&#xe602;</Text>
          </View>
        </TouchableWithoutFeedback>

        <View style={{flex:1}}>
          <View style={{height:238, flexDirection:'column', alignItems:'center',}}>
          </View>

          <View style={{flex:1, flexDirection:'column', alignItems:'center',}}>
            <SuperButton label="手机号登录" width={Dimensions.get('window').width - 99} height={53} onPressEvent={() => this.props.navigation.navigate('Login')}/>
            <SuperButton label="注册" width={Dimensions.get('window').width - 99} height={53} onPressEvent={() => this.props.navigation.navigate('Register')}/>
          </View>

          <View style={{height:168, flexDirection:'column', alignItems:'center'}}>
            <Text>其他登陆方式</Text>
            <View style={{flexDirection:'row'}}>
              <View style={{flex:1, alignItems:'center'}}>
                <SuperButton label="登录" onPressEvent={() => this.props.navigation.navigate('Login')}/>
              </View>
              <View style={{flex:1, alignItems:'center'}}>
                <SuperButton label="登录" onPressEvent={() => this.props.navigation.navigate('Login')}/>
              </View>
              <View style={{flex:1, alignItems:'center'}}>
                <SuperButton label="登录" onPressEvent={() => this.props.navigation.navigate('Login')}/>
              </View>
            </View>
            <View style={{flexDirection:'row'}}>
              <View style={{flex:1, alignItems:'center'}}>
                <SuperButton style={{marginLeft:18}} label="登录" onPressEvent={() => this.props.navigation.navigate('Login')}/>
              </View>
              <View style={{flex:1, alignItems:'center'}}>
                <SuperButton style={{marginLeft:18}} label="登录" onPressEvent={() => this.props.navigation.navigate('Login')}/>
              </View>
              <View style={{flex:1, alignItems:'center'}}>
                <SuperButton style={{marginLeft:18}} label="登录" onPressEvent={() => this.props.navigation.navigate('Login')}/>
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
    backgroundColor: 'transparent'
  },
});
