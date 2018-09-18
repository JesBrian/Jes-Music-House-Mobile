import React  from 'react';

import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';

import { connect } from 'react-redux'

import Ripple from 'react-native-material-ripple'

import SuperButton from '../../../../components/SuperButton.js'
import SuperIcon from '../../../../components/SuperIcon.js'

import { goRouter } from '../../../../utils/router/router.js'


class IndexFriend extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => {alert(6)}} >
          <View style={{flexDirection:'row', borderBottomWidth:0.3, borderColor:'#FFF'}}>
            <TouchableOpacity onPress={() => {alert(8)}} style={{width:32, height:32, margin:8}}>
              <Image style={{flex:1, borderRadius:16}} source={{uri:'https://avatars3.githubusercontent.com/u/25942696?s=88&v=4'}} />
            </TouchableOpacity>
            <View style={{flex:1}}>
              <View style={{width:'100%', height:48, flexDirection:'row', alignItems:'center'}}>
                <View style={{flex:1, justifyContent:'center'}}>
                  <Text style={{marginBottom:1, fontSize:15, color:'#BBB'}}>JesBrian：</Text>
                  <Text style={{fontSize:12, color:'#888'}}>2018-09-26</Text>
                </View>
                <View style={{width:62, height:23, marginRight:8, paddingBottom:1, flexDirection:'row', justifyContent:'center', alignItems:'center', borderRadius:14, backgroundColor:'#ff8dcd'}}>
                  <SuperIcon type={'\ue80d'} style={{marginTop:1, marginRight:3, fontSize:16}} />
                  <Text>关注</Text>
                </View>
              </View>
              <View>
                <Text>鬼知道会写什么东西</Text>
              </View>
              <View style={{paddingTop:12, paddingBottom:12, flexDirection:'row', alignItems:'center'}}>
                <TouchableOpacity onPress={() => {alert(88)}} style={{width:68, flexDirection:'row'}}>
                  <SuperIcon type={'\ue615'} />
                  <Text>27</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {alert(88)}} style={{width:68, flexDirection:'row'}}>
                  <SuperIcon type={'\ue615'} />
                  <Text>27</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {alert(88)}}>
                  <SuperIcon type={'\ue615'} />
                </TouchableOpacity>

                <View style={{marginRight:6, flex:1, alignItems:'flex-end'}}>
                  <TouchableOpacity onPress={() => {alert('test')}}>
                    <SuperIcon type={'\ue653'} style={{marginLeft:3, marginRight:3}} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>

        <View style={{width:50, height:50, right:18, bottom:76, position:'absolute',justifyContent:'center', alignItems:'center', zIndex:5}}>
          <SuperButton onPress={() => {goRouter(this.props.config.navigation, 'WriteTrend')}} width={43} height={43} label={<SuperIcon type={'\ue638'} style={{fontSize:28}} />} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
});


function reduxState(store) {
  return {
    config: store.config
  }
}

export default connect(reduxState)(IndexFriend);
