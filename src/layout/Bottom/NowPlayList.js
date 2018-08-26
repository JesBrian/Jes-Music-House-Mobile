import React  from 'react';

import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableWithoutFeedback
} from 'react-native';


import { connect } from 'react-redux'
import { changeMusicPlayModel } from '../../redux/actions/MusicActions.js'
import { hiddenBottomPlayList } from '../../redux/actions/ViewActions.js'

import { common } from '../../assets/styles/common.js'

import Ripple from 'react-native-material-ripple'

class NowPlayList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      playModel: 'loop'
    };
  }

  render () {
    return (
      <View style={{width:'100%', height:'100%', bottom:0, left:0, flex:1, position:'absolute', backgroundColor:'rgba(0, 0, 0, 0.68)', zIndex:8}}>
        <TouchableWithoutFeedback onPress={() => {this.props.dispatch(hiddenBottomPlayList())}}>
          <View style={{flex:1}}/>
        </TouchableWithoutFeedback>
        <View style={{height:338, position:'relative', flex:1, flexDirection:'column'}}>
          <View style={{width:'100%', height:48, flexDirection:'row', borderTopLeftRadius:12, borderTopRightRadius:12, backgroundColor:'#444'}}>
            <Ripple onPress={this.changePlayModel.bind(this)}>
              {
                this.props.music.playModel === 'loop' ?
                  <View style={{height:'100%', padding:15, flexDirection:'row', justifyContent:'center', alignItems:'center', borderTopLeftRadius:12}}>
                    <Text style={[common.icon, {marginRight:4, fontSize:18, color:'#FFF'}]}>&#xe66c;</Text>
                    <Text style={{fontSize:16, color:'#FFF'}}>循环列表 [888]</Text>
                  </View>
                  : this.props.music.playModel === 'single-loop' ?
                  <View style={{height:'100%', padding:15, flexDirection:'row', justifyContent:'center', alignItems:'center', borderTopLeftRadius:12}}>
                    <Text style={[common.icon, {marginRight:4, fontSize:18, color:'#FFF'}]}>&#xe66b;</Text>
                    <Text style={{fontSize:16, color:'#FFF'}}>单曲循环 [888]</Text>
                  </View>
                  :
                  <View style={{height:'100%', padding:15, flexDirection:'row', justifyContent:'center', alignItems:'center', borderTopLeftRadius:12}}>
                    <Text style={[common.icon, {marginRight:4, fontSize:18, color:'#FFF'}]}>&#xe607;</Text>
                    <Text style={{fontSize:16, color:'#FFF'}}>随机播放 [888]</Text>
                  </View>
              }
            </Ripple>
            <View style={{flex:1, flexDirection:'row', justifyContent:'flex-end', alignItems:'center'}}>
              <Ripple>
                <View style={{flex:1, flexDirection:'row', justifyContent:'flex-end', alignItems:'center'}}>
                  <View style={{width:108, height:'55%', flexDirection:'row', justifyContent:'center', alignItems:'center', borderRightWidth:1, borderRightColor:'#686868'}}>
                    <Text style={[common.icon, {fontSize:18, color:'#FFF'}]}>&#xe80d;</Text>
                    <Text style={{fontSize:16, color:'#FFF'}}> 收藏全部</Text>
                  </View>
                </View>
              </Ripple>
            </View>
            <Ripple>
              <View style={{width:46, height:'100%', justifyContent:'center', alignItems:'center'}}>
                <Text style={[common.icon, {fontSize:20, color:'#FFF'}]}>&#xe61f;</Text>
              </View>
            </Ripple>
          </View>
          <ScrollView style={{flex:1, backgroundColor:'#FFF'}}>
          </ScrollView>
        </View>
      </View>
    )
  }


  changePlayModel () {
    this.props.dispatch(changeMusicPlayModel());
  }
}

const styles = StyleSheet.create({
})

function reduxState(store) {
  return {
    music: store.music,
    showView: store.showView
  }
}

export default connect(reduxState)(NowPlayList);

