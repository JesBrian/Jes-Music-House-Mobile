import React  from 'react';

import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';

import {common} from '../../assets/styles/common.js'


export default class NowPlayList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render () {
    let temp = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

    return (
      <View style={{width:'100%', height:'100%', bottom:0, left:0, flex:1, position:'absolute', backgroundColor:'rgba(0, 0, 0, 0.5)', zIndex:5}}>
        <TouchableOpacity onPress={() => {alert(888)}} style={{flex:1}}>
          <View />
        </TouchableOpacity>
        <View style={{height:338, position:'relative', flex:1, flexDirection:'column'}}>
          <View style={{width:'100%', height:48, flexDirection:'row', borderTopLeftRadius:12, borderTopRightRadius:12, backgroundColor:'#77ffac'}}>
            <TouchableOpacity>
              <View style={{width:138, height:'100%', flexDirection:'row', justifyContent:'center', alignItems:'center', borderTopLeftRadius:12}}>
                <Text style={[common.icon, {marginRight:4, fontSize:20}]}>&#xe66c;</Text>
                <Text style={{fontSize:16}}>循环列表[88]</Text>
              </View>
            </TouchableOpacity>
            <View style={{flex:1, flexDirection:'row', justifyContent:'flex-end'}}>
              <TouchableOpacity>
                <View style={{width:108, height:'100%', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                  <Text style={[common.icon, {fontSize:20}]}>&#xe80d;</Text>
                  <Text style={{fontSize:16}}> 收藏全部</Text>
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <View style={{width:46, height:'100%', justifyContent:'center', alignItems:'center'}}>
                <Text style={[common.icon, {fontSize:20}]}>&#xe61f;</Text>
              </View>
            </TouchableOpacity>
          </View>
          <ScrollView style={{flex:1}}>
            {
              temp.map((i, index) => {
                return <Text>{i}</Text>
              })
            }
          </ScrollView>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
})
