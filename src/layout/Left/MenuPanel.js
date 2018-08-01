import React  from 'react';

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button
} from 'react-native';

import { BoxShadow }  from 'react-native-shadow'

export default class MenuPanel extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <View style={{height:'100%', backgroundColor:'#FFF', flex:1}}>

        <ScrollView style={{flex:1}}>
          <View style={{height:128, backgroundColor:'#788278'}}>
            <View style={{width:88, height:'100%', justifyContent:'center', alignItems:'center', backgroundColor:'#05daf0'}}>
              <Image style={{width:48, height:48, borderWidth:1, borderRadius:4, borderColor:'#666'}} source={{uri:'http://www.chuanke.com/upload/courseware/f/31/3312428/image/09c68fe797fa58d78a1de4f34e0ea40f.gif'}} />
            </View>
          </View>
          <View>
            <Text onPress={()=>this.props.navigation.navigate('Register')}>
              跳转注册页面
            </Text>
            <Button title='跳转到详情' onPress={()=>this.props.navigation.navigate('Login')} />
          </View>
        </ScrollView>

        <View style={{width:'100%', height:38, backgroundColor:'#08eef0'}}>
          <Text>888</Text>
        </View>
      </View>
    )
  }

  closeControlPanel = () => {
    this.props.closeControlPanel();
  };
}

const styles = StyleSheet.create({
})
