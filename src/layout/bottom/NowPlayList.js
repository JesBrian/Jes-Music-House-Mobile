import React from 'react';

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';


import { connect } from 'react-redux'
import { changeMusicPlayModel } from '../../redux/actions/MusicActions.js'
import { hiddenBottomPlayList } from '../../redux/actions/ViewActions.js'

import Ripple from 'react-native-material-ripple'
import { LargeList } from 'react-native-largelist-v2'

import { common } from '../../assets/styles/common.js'
import SuperIcon from '../../components/SuperIcon.js'

/**
 * 当前播放列表
 */
class NowPlayList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      playModel: 'loop'
    };
  }

  render () {
    return (
      <View style={{width:'100%', height:'100%', top:0, left:0, flex:1, position:'absolute', backgroundColor:'transparent', zIndex:18}}>
        <View style={{flex:1, backgroundColor:'rgba(0, 0, 0, 0.68)'}}>
          <TouchableWithoutFeedback onPress={() => {this.props.dispatch(hiddenBottomPlayList())}}>
            <View style={{flex:1}}/>
          </TouchableWithoutFeedback>
          <View style={{width:'100%', height:'60%', position:'relative', flexDirection:'column'}}>
            <View style={{width:'100%', height:38, flexDirection:'row', borderTopLeftRadius:12, borderTopRightRadius:12, backgroundColor:'#444'}}>
              <Ripple onPress={this.changePlayModel.bind(this)}>
                {
                  this.props.music.playModel === 'loop' ?
                    <View style={{height:'100%', padding:15, flexDirection:'row', justifyContent:'center', alignItems:'center', borderTopLeftRadius:12}}>
                      <SuperIcon type={'\ue66c'} style={{marginTop:3, marginRight:4, fontSize:18, color:'#FFF'}} />
                      <Text style={{fontSize:15, color:'#FFF'}}>循环列表 [888]</Text>
                    </View>
                    : this.props.music.playModel === 'single-loop' ?
                    <View style={{height:'100%', padding:15, flexDirection:'row', justifyContent:'center', alignItems:'center', borderTopLeftRadius:12}}>
                      <SuperIcon type={'\ue66b'} style={{marginTop:3, marginRight:4, fontSize:18, color:'#FFF'}} />
                      <Text style={{fontSize:15, color:'#FFF'}}>单曲循环 [888]</Text>
                    </View>
                    :
                    <View style={{height:'100%', padding:15, flexDirection:'row', justifyContent:'center', alignItems:'center', borderTopLeftRadius:12}}>
                      <SuperIcon type={'\ue607'} style={{marginTop:3, marginRight:4, fontSize:18, color:'#FFF'}} />
                      <Text style={{fontSize:15, color:'#FFF'}}>随机播放 [888]</Text>
                    </View>
                }
              </Ripple>
              <View style={{flex:1, flexDirection:'row', justifyContent:'flex-end', alignItems:'center'}}>
                <Ripple>
                  <View style={{flex:1, flexDirection:'row', justifyContent:'flex-end', alignItems:'center'}}>
                    <View style={{width:108, height:'68%', flexDirection:'row', justifyContent:'center', alignItems:'center', borderRightWidth:1, borderRightColor:'#686868'}}>
                      <SuperIcon type={'\ue80d'} style={{marginTop:2, fontSize:17, color:'#FFF'}} />
                      <Text style={{fontSize:15, color:'#FFF'}}> 收藏全部</Text>
                    </View>
                  </View>
                </Ripple>
              </View>
              <Ripple>
                <View style={{width:38, height:'100%', justifyContent:'center', alignItems:'center'}}>
                  <SuperIcon type={'\ue61f'} style={{marginTop:3, fontSize:20, color:'#FFF'}} />
                </View>
              </Ripple>
            </View>

            <ScrollView>
              <LargeList style={{flex:1, backgroundColor:'#282828'}}
                         data={[{items: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]}]}
                         heightForIndexPath={() => 40}
                         renderIndexPath={this._renderIndexPath}
              />
            </ScrollView>

          </View>
        </View>
      </View>
    )
  }


  changePlayModel() {
    this.props.dispatch(changeMusicPlayModel());
  };


  _renderIndexPath  = () => {
    return (
      <View style={{height: 40, flexDirection: 'row'}}>
        <Ripple style={{height: '100%', marginLeft:3, paddingLeft: 3, flex: 1, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 0.1, borderColor: '#FFF'}}>
          <SuperIcon type={'\ue6b4'} style={{fontSize: 18, color: '#05daf0'}}/>
          <Text style={{marginLeft: 5, fontSize: 15, color:'#CCC'}}>
            555长cjk沙健id45康
            <Text style={{fontSize: 12, color:'#888'}}> - JesBrian</Text>
          </Text>
        </Ripple>

        <TouchableWithoutFeedback>
          <View style={{width: 35, height: '100%', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 0.1, borderColor: '#FFF'}}>
            <SuperIcon type={'\ue627'} style={{fontSize: 20, color:'#888'}}/>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback>
          <View style={{width: 35, height: '100%', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 0.1, borderColor: '#FFF'}}>
            <SuperIcon type={'\ue622'} style={{fontSize: 20, color:'#888'}}/>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
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

