import React  from 'react';

import {
  StyleSheet,
  Dimensions,
  View,
  TextInput
} from 'react-native';

import NormalNavbar from '../../layout/Top/type/NormalNavbar.js'
import SuperButton from '../../components/SuperButton.js'

import { phoneLogin } from '../../utils/http/request/login.js'

export default class Login extends React.Component {
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
        <NormalNavbar navigation={this.props.navigation} label={'手机号登录'} />

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
          <SuperButton label="登录" width={Dimensions.get('window').width - 88} height={53} onPressEvent={this.phoneLogin.bind(this)} />
        </View>
      </View>
    );
  }


  phoneLogin () {
    let data = {
      phone: this.state.phone,
      passwd: this.state.passwd
    };
    phoneLogin(data).then( res => {
      alert(res.msg)
    }).catch( error => {
      alert(error)
    })
  }
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    backgroundColor: 'transparent'
  },
});
