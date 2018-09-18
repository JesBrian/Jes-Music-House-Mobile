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
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={() => {alert(8)}} style={{width:32, height:32, margin:8}}>
              <Image style={{flex:1, borderRadius:16}} source={{uri:'https://avatars3.githubusercontent.com/u/25942696?s=88&v=4'}} />
            </TouchableOpacity>
            <View style={{flex:1, backgroundColor:'lightblue'}}>
              <View style={{width:'100%', height:48, flexDirection:'row', alignItems:'center'}}>
                <View style={{flex:1, justifyContent:'center'}}>
                  <Text style={{fontSize:16, color:'#BBB'}}>JesBrian：</Text>
                  <Text style={{color:'#888'}}>2018-09-26</Text>
                </View>
                <View style={{width:53, height:28, marginRight:8, justifyContent:'center', alignItems:'center', borderRadius:14, backgroundColor:'#ff8dcd'}}>
                  <Text>关注</Text>
                </View>
              </View>
              <View>
                <Text>鬼知道会写什么东西</Text>
                <Text>鬼知道会写什么东西</Text>
                <Text>鬼知道会写什么东西</Text>
                <Text>鬼知道会写什么东西</Text>
                <Text>鬼知道会写什么东西</Text>
              </View>
              <View style={{flexDirection:'row', alignItems:'center'}}>
                <Text>2222</Text>
                <Text>68</Text>
                <Text>68</Text>
                <SuperIcon type={'\ue653'} style={{float:'right'}} />
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
