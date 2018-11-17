import React  from 'react';

import {
  Dimensions,
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';

import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'

import Ripple from 'react-native-material-ripple'
import { BoxShadow }  from 'react-native-shadow'

import SuperButton from '../../../../../../components/SuperButton/SuperButton.js'

const shadowOpt = {
  width:Dimensions.get('window').width - 40, height:48, color:"#000", border:12, opacity:0.8, x:0, y:1,
  style: {marginLeft:20, marginRight:20, marginBottom:23}
};

class UserInfo extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <BoxShadow setting={shadowOpt}>
        <View style={{height:48, flexDirection:'row', backgroundColor:'#282828'}}>
          <Ripple style={{width:30, height:30, margin:9}} onPress={() => {this.props.navigation.navigate('User')}}>
            <Image style={{flex:1, borderRadius:16}} source={{uri:'https://avatars3.githubusercontent.com/u/25942696?s=88&v=4'}} />
          </Ripple>
          <View style={{flex:1, justifyContent:'center'}}>
            <Text style={{fontSize:14, color:'#BBB'}}>JesBrian是换xhsc次</Text>
            <Text style={{fontSize:12, color:'#888'}}>Lv 9</Text>
          </View>
          <View style={{marginTop:3.5, marginRight:7}}>
            <SuperButton onPress={() => {this.props.navigation.navigate('Member')}} label={<Text style={{fontSize:13}}>开通会员</Text>} width={72} height={32} />
          </View>
        </View>
      </BoxShadow>
    )
  }
}

const styles = StyleSheet.create({
});

function reduxState(store) {
  return {
    color: store.config.color
  }
}

export default connect(reduxState)(withNavigation(UserInfo));
