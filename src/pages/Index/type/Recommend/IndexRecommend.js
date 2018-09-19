import React  from 'react';

import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native';

import { connect } from 'react-redux'
import { showModal } from '../../../../redux/actions/ViewActions.js'


import Ripple from 'react-native-material-ripple'
import Swiper from 'react-native-swiper'

import SuperButton from '../../../../components/SuperButton.js'
import SuperIcon from '../../../../components/SuperIcon.js'


class IndexRecommend extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      testData: [],
      playListSize: 0
    }
  }

  componentWillMount () {
    this.setState({
      testData: ['Hello Swiper', 'Beautiful', 'And simple'],
      playListSize: (Dimensions.get('window').width - 30) * 0.31
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{width:'100%', flex:1}}>

          <View style={{width:'100%', height:138, marginTop:18, paddingLeft:8, paddingRight:8}}>
            <Swiper style={styles.wrapper} showsButtons={true} autoplay={true}>
              {
                this.state.testData.map((item, index) => {
                  return (
                    <View key={index} style={styles.slide}>
                      <Text style={styles.text}>{ item }</Text>
                    </View>
                  )
                })
              }
            </Swiper>
          </View>

          <View style={{width:'100%', height:68, marginTop:28, paddingLeft:8, paddingRight:8, flexDirection:'row'}}>
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
              <View style={{width:44, height:44, marginBottom:5, justifyContent:'center', alignItems:'center', borderRadius:22, backgroundColor:'rgba(0,0,0,0.3)'}}>
                <SuperIcon type={'\ue640'} style={{paddingTop:3, fontSize:32, color:this.props.config.color, backgroundColor:'transparent'}} />
              </View>
              <Text style={{color:'#BBB'}}>每日推荐</Text>
            </View>
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
              <View style={{width:44, height:44, marginBottom:5, justifyContent:'center', alignItems:'center', borderRadius:22, backgroundColor:'rgba(0,0,0,0.3)'}}>
                <SuperIcon type={'\ue646'} style={{fontSize:32, color:this.props.config.color, backgroundColor:'transparent'}} />
              </View>
              <Text style={{color:'#BBB'}}>歌单</Text>
            </View>
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
              <View style={{width:44, height:44, marginBottom:5, justifyContent:'center', alignItems:'center', borderRadius:22, backgroundColor:'rgba(0,0,0,0.3)'}}>
                <SuperIcon type={'\ue624'} style={{fontSize:32, color:this.props.config.color, backgroundColor:'transparent'}} />
              </View>
              <Text style={{color:'#BBB'}}>歌手</Text>
            </View>
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
              <View style={{width:44, height:44, marginBottom:5, justifyContent:'center', alignItems:'center', borderRadius:22, backgroundColor:'rgba(0,0,0,0.3)'}}>
                <SuperIcon type={'\ue62c'} style={{fontSize:32, color:this.props.config.color, backgroundColor:'transparent'}} />
              </View>
              <Text style={{color:'#BBB'}}>排行榜</Text>
            </View>
          </View>

          <View style={{marginTop:25, marginLeft:8, marginBottom:6, flexDirection:'row', alignItems:'center'}}>
            <SuperIcon type={'\ue604'} style={{marginRight:10, fontSize:20, color:this.props.config.color}} />
            <Text style={{fontSize:16, color:'#DDD'}}>推荐歌单</Text>
          </View>
          <View style={{width:'100%', marginBottom:18, paddingLeft:15, paddingRight:15, flexDirection:'row', justifyContent:'space-around', flexWrap:'wrap'}}>
            <View style={{width:'31%'}}>
              <View style={{width:'100%', height:this.state.playListSize, position:'relative', borderRadius:8, backgroundColor:'#f09c9d'}}>
                <View style={{top:2, right:6, position:'absolute', flexDirection:'row'}}>
                  <SuperIcon type={'\ue6c8'} style={{marginTop:1, marginRight:3, fontSize:14, color:'#EEE'}} />
                  <Text style={{fontSize:13, color:'#FFF'}}>555</Text>
                </View>
              </View>
              <View style={{width:'100%', height:38, backgroundColor:'#38daf0'}}>
                <Text>每日推荐</Text>
              </View>
            </View>
            <View style={{width:'31%'}}>
              <View style={{width:'100%', height:this.state.playListSize, position:'relative', borderRadius:8, backgroundColor:'#f09c9d'}}>
                <View style={{top:2, right:6, position:'absolute', flexDirection:'row'}}>
                  <SuperIcon type={'\ue6c8'} style={{marginTop:1, marginRight:3, fontSize:14, color:'#FFF'}} />
                  <Text style={{fontSize:13, color:'#FFF'}}>555</Text>
                </View>
              </View>
              <Text>2</Text>
            </View>
            <View style={{width:'31%'}}>
              <View style={{width:'100%', height:this.state.playListSize, position:'relative', borderRadius:8, backgroundColor:'#f09c9d'}}>
                <View style={{top:2, right:6, position:'absolute', flexDirection:'row'}}>
                  <SuperIcon type={'\ue6c8'} style={{marginTop:1, marginRight:3, fontSize:14, color:'#FFF'}} />
                  <Text style={{fontSize:13, color:'#FFF'}}>555</Text>
                </View>
              </View>
              <Text>3</Text>
            </View>
          </View>

          <View style={{marginTop:25, marginLeft:8, marginBottom:6, flexDirection:'row', alignItems:'center'}}>
            <SuperIcon type={'\ue604'} style={{marginRight:10, fontSize:20, color:this.props.config.color}} />
            <Text style={{fontSize:16, color:'#DDD'}}>最新音乐</Text>
          </View>
          <View style={{width:'100%', marginBottom:18, paddingLeft:15, paddingRight:15, flexDirection:'row', justifyContent:'space-around', flexWrap:'wrap'}}>
            <View style={{width:'31%'}}>
              <View style={{width:'100%', height:this.state.playListSize, borderRadius:8, backgroundColor:'#f09c9d'}}>
              </View>
              <View style={{width:'100%', height:38}}>
                <Text style={{fontSize:13, color:'#BBB'}}>JesBri老中nggjd</Text>
                <Text style={{fontSize:11, color:'#888'}}>策略</Text>
              </View>
            </View>
            <View style={{width:'31%'}}>
              <View style={{width:'100%', height:this.state.playListSize, borderRadius:8, backgroundColor:'#f09c9d'}}>
              </View>
              <View style={{width:'100%', height:38}}>
                <Text style={{fontSize:13, color:'#BBB'}}>JesBrian是vnjd</Text>
                <Text style={{fontSize:11, color:'#888'}}>策略</Text>
              </View>
            </View>
            <View style={{width:'31%'}}>
              <View style={{width:'100%', height:this.state.playListSize, borderRadius:8, backgroundColor:'#f09c9d'}}>
              </View>
              <View style={{width:'100%', height:38}}>
                <Text style={{fontSize:13, color:'#BBB'}}>JesBrian是vnjd</Text>
                <Text style={{fontSize:11, color:'#888'}}>策略</Text>
              </View>
            </View>
          </View>

          <View style={{marginTop:25, marginLeft:8, marginBottom:6, flexDirection:'row', alignItems:'center'}}>
            <SuperIcon type={'\ue604'} style={{marginRight:10, fontSize:20, color:this.props.config.color}} />
            <Text style={{fontSize:16, color:'#DDD'}}>歌曲排行榜</Text>
          </View>
          <View>
            <Ripple style={{height:58, flexDirection:'row', backgroundColor:'lightgreen'}}>
              <Text>8</Text>
            </Ripple>
            <Ripple style={{height:58, flexDirection:'row', backgroundColor:'lightblue'}}>
              <Text>8</Text>
            </Ripple>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingBottom:53,
    backgroundColor: 'transparent'
  },
  wrapper: {
    borderRadius:6,
  },
  slide: {
    marginLeft:4,
    marginRight:4,
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:6,
    backgroundColor: '#9DD6EB',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
});


function reduxState(store) {
  return {
    config: store.config,
    music: store.music
  }
}

export default connect(reduxState)(IndexRecommend);
