import React  from 'react';

import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback
} from 'react-native';

import NormalNavbar from '../../layout/top/TopNavbar/type/NormalNavbar.js'
import SuperButton from '../../components/SuperButton.js'


export default class Register extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isHiddenPasswd: true,
      phone: '',
      passwd: ''
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <NormalNavbar navigation={this.props.navigation} label={'手机号注册'} />

        <View style={{flex:1, flexDirection:'column', alignItems:'center', backgroundColor:'rgba(0,0,0,0.73)'}}>
          <View style={{marginTop:38, justifyContent:'center',}}>
            <TextInput value={this.state.phone} onChangeText={(phone) => {this.setState({phone: phone})}}
                       selectionColor={'#2DC9FF'} underlineColorAndroid='transparent'
                       style={{width:Dimensions.get('window').width - 88, height:53, paddingLeft:18, paddingRight:18, borderRadius:26, borderWidth:3, borderColor:'#2DC9FF', color:'#2DC9FF', fontSize:20}} />
          </View>
          <View style={{marginTop:18, marginBottom:18, position:'relative', justifyContent:'center'}}>
            <TextInput value={this.state.passwd} secureTextEntry={this.state.isHiddenPasswd} onChangeText={(passwd) => {this.setState({passwd: passwd})}}
                       selectionColor={'#2DC9FF'} underlineColorAndroid='transparent'
                       style={{width:Dimensions.get('window').width - 88, height:53, paddingLeft:18, paddingRight:51, borderRadius:26, borderWidth:3, borderColor:'#2DC9FF', color:'#2DC9FF', fontSize:20}} />
            {
              this.state.passwd === '' ? null :
                <TouchableWithoutFeedback onPressIn={() => {this.setState({isHiddenPasswd: false})}} onPressOut={() => {this.setState({isHiddenPasswd: true})}}>
                  <View style={{width:38, height:38, top:7.5, right:7.5, position:'absolute', borderRadius:19, backgroundColor:'#686868', borderWidth:1, borderColor:'#2EBCC6'}}>
                  </View>
                </TouchableWithoutFeedback>
            }
          </View>
          <SuperButton onPress={this.userRegister.bind(this)} label="注册" width={Dimensions.get('window').width - 88} height={53} />
        </View>

        <View style={{height:168, flexDirection:'column', alignItems:'center', backgroundColor:'rgba(0,0,0,0.73)'}}>
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
    );
  }

  userRegister () {
    let data = {
      phone: this.state.phone,
      passwd: this.state.passwd
    }
  }
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    backgroundColor: 'transparent'
  },
});
