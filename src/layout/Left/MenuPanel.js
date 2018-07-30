import React  from 'react';

import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import { BoxShadow }  from 'react-native-shadow'

export default class MenuPanel extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }


  closeControlPanel = () => {
    this.props.closeControlPanel();
  };

  render () {
    return (
      <View style={{height:'100%', backgroundColor:'#FFF', flex:1}}>
        <View><Text onPress={()=>{this.closeControlPanel()}}>vhbjn</Text><Text onPress={()=>{this.closeControlPanel()}}>vhbjn</Text><Text onPress={()=>{this.closeControlPanel()}}>vhbjn</Text><Text onPress={()=>{this.closeControlPanel()}}>vhbjn</Text><Text onPress={()=>{this.closeControlPanel()}}>vhbjn</Text><Text onPress={()=>{this.closeControlPanel()}}>vhbjn</Text><Text onPress={()=>{this.closeControlPanel()}}>vhbjn</Text><Text onPress={()=>{this.closeControlPanel()}}>vhbjn</Text><Text onPress={()=>{this.closeControlPanel()}}>vhbjn</Text><Text onPress={()=>{this.closeControlPanel()}}>vhbjn</Text><Text onPress={()=>{this.closeControlPanel()}}>vhbjn</Text></View>
        <Text onPress={()=>this.props.navigation.navigate('Register')}>
          跳转注册页面
        </Text>
        <Button title='跳转到详情' onPress={()=>this.props.navigation.navigate('Login')} />
      </View>
    )
  }

}

const styles = StyleSheet.create({
})
