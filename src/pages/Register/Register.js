import React  from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput, Dimensions
} from 'react-native';

import NormalNavbar from '../../layout/Top/NormalNavbar.js'
import SuperButton from '../../components/SuperButton.js'


export default class Register extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      phone: '',
      passwd: ''
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <NormalNavbar navigation={this.props.navigation} label={'手机号注册'} />

        <View style={{flex:1, flexDirection:'column', alignItems:'center', backgroundColor:'#20dbfc'}}>
          <TextInput />
          <TextInput />
          <SuperButton label="注册" width={Dimensions.get('window').width - 88} height={53} />
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
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    backgroundColor: 'transparent'
  },
});
