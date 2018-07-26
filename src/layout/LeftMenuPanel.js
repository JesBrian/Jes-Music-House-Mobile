import React  from 'react';

import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';


export default class LeftMenuPanel extends React.Component {
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
      <View >
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
