import React  from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput, Dimensions
} from 'react-native';

import NormalNavbar from '../../layout/Top/type/NormalNavbar.js'
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

        <View style={{flex:1, flexDirection:'column', alignItems:'center'}}>
          <View style={{marginTop:38, justifyContent:'center',}}>
            <TextInput value={this.state.phone} onChangeText={(phone) => {
              this.setState({
                phone: phone
              })
            }} style={{width:Dimensions.get('window').width - 88, height:53, paddingLeft:18, paddingRight:18, borderRadius:26, borderWidth:3, borderColor:'#38daf0'}} />
          </View>
          <View style={{marginTop:18, marginBottom:18, justifyContent:'center'}}>
            <TextInput value={this.state.passwd} secureTextEntry={true} onChangeText={(passwd) => {
              this.setState({
                passwd: passwd
              })
            }} style={{width:Dimensions.get('window').width - 88, height:53, paddingLeft:18, paddingRight:18, borderRadius:26, borderWidth:3, borderColor:'#38daf0'}} />
          </View>
          <SuperButton onPressEvent={this.userRegister.bind(this)} label="注册" width={Dimensions.get('window').width - 88} height={53} />
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

  userRegister () {
    let data = {
      phone: this.state.phone,
      passwd: this.state.passwd
    }
    alert(data)
  }
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    backgroundColor: 'transparent'
  },
});
