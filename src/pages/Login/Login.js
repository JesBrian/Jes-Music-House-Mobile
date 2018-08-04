import React  from 'react';

import {
  StyleSheet,
  Dimensions,
  View,
  TextInput
} from 'react-native';

import NormalNavbar from '../../layout/Top/NormalNavbar.js'
import SuperButton from '../../components/SuperButton.js'


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
          <TextInput />
          <TextInput />
          <SuperButton label="登录" width={Dimensions.get('window').width - 88} height={53} onPressEvent={() => this.props.navigation.navigate('Login')}/>
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
