import React  from 'react';

import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableWithoutFeedback
} from 'react-native';

import { withNavigation } from 'react-navigation'
import Ripple from 'react-native-material-ripple'

class BaseInfo extends React.Component {
  render () {
    return (
      <TouchableWithoutFeedback>
        <View style={{height:108, paddingTop:8, flexDirection:'row', alignItems:'center'}}>

          <Ripple style={{width:70, height:70, margin:16}}>
            <Image style={{flex:1, borderWidth:1, borderRadius:6, borderColor:'#FFF'}} source={{uri:'https://avatars3.githubusercontent.com/u/25942696?s=88&v=4'}} />
          </Ripple>

          <View style={{height:'100%', marginLeft:3, flex:1}}>
            <Text style={{marginTop:13, fontSize:17, color:'#DDD'}}>rf参数  67ncja gyhd 高度为 shg ji djh 干哈</Text>
            <Ripple onPress={() => {this.props.navigation.navigate('User')}} style={{height:38, flexDirection:'row', alignItems:'center'}}>
              <Image style={{width:20, height:20, marginRight:8, borderRadius:10}} source={{uri:'https://avatars3.githubusercontent.com/u/25942696?s=88&v=4'}} />
              <Text style={{color:'#AAA'}}>JesBrian</Text>
            </Ripple>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
});

export default withNavigation(BaseInfo)
