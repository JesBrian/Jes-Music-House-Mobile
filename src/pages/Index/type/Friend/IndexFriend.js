import React  from 'react';

import {
  StyleSheet,
  FlatList,
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
  constructor (props) {
    super(props);
    this.state = {
      friendTrend: [{key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}, {key: 'e'}, {key: 'f'}, {key: 'g'}, {key: 'h'}, {key: 'i'}, {key: 'j'}]
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <FlatList style={{marginTop:6, marginBottom:58, flex:1}}
          data={this.state.friendTrend}
          renderItem={({item}) => (
            <TouchableWithoutFeedback onPress={() => {alert(6)}} >
              <View style={{flexDirection:'row', borderBottomWidth:0.3, borderColor:'#FFF'}}>
                <TouchableOpacity onPress={() => {alert(8)}} style={{width:30, height:30, margin:8}}>
                  <Image style={{flex:1, borderRadius:16}} source={{uri:'https://avatars3.githubusercontent.com/u/25942696?s=88&v=4'}} />
                </TouchableOpacity>
                <View style={{flex:1}}>
                  <View style={{width:'100%', height:46, flexDirection:'row', alignItems:'center'}}>
                    <View style={{flex:1, justifyContent:'center'}}>
                      <Text style={{fontSize:13.5, color:'#CCC'}}>JesBrian：</Text>
                      <Text style={{fontSize:11, color:'#888'}}>2018-09-26</Text>
                    </View>
                    <Ripple onPress={() => {alert('关注成功')}} style={{width:64, height:23, marginRight:8, paddingBottom:1, flexDirection:'row', justifyContent:'center', alignItems:'center', borderRadius:14, backgroundColor:this.props.config.color}}>
                      <SuperIcon type={'\ue80d'} style={{marginTop:1, marginRight:3, fontSize:16, color:'#FFF'}} />
                      <Text style={{fontWeight:'700', color:'#FFF'}}>关注</Text>
                    </Ripple>
                  </View>
                  <View>
                    <Text style={{fontSize:13.5, color:'#CCC'}}>鬼知道会写什么东西{ item.key }</Text>
                  </View>
                  <View style={{paddingTop:12, paddingBottom:12, flexDirection:'row', alignItems:'center'}}>
                    <TouchableOpacity onPress={() => {alert(88)}} style={{width:68, flexDirection:'row'}}>
                      <SuperIcon type={'\ue80d'} style={{marginRight:3, color:'#CCC'}} />
                      <Text style={{fontSize:12.5, color:'#888'}}>27</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {alert(88)}} style={{width:68, flexDirection:'row'}}>
                      <SuperIcon type={'\ue638'} style={{marginRight:3, color:'#CCC'}} />
                      <Text style={{fontSize:12.5, color:'#888'}}>27</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {alert(88)}}>
                      <SuperIcon type={'\ue615'} style={{color:'#CCC'}} />
                    </TouchableOpacity>

                    <View style={{marginRight:6, flex:1, alignItems:'flex-end'}}>
                      <TouchableOpacity onPress={() => {alert('test')}}>
                        <SuperIcon type={'\ue653'} style={{marginLeft:3, marginRight:3, color:'#CCC'}} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          )}
        />

        <View style={{width:50, height:50, right:18, bottom:76, position:'absolute', justifyContent:'center', alignItems:'center', zIndex:5}}>
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
