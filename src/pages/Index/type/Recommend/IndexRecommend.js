import React  from 'react';

import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  TouchableWithoutFeedback
} from 'react-native';

import { connect } from 'react-redux'
import { showModal } from '../../../../redux/actions/ViewActions.js'

import { withNavigation } from 'react-navigation'
import Ripple from 'react-native-material-ripple'
import Swiper from 'react-native-swiper'

import SuperIcon from '../../../../components/SuperIcon.js'

import { frontendSlide } from '../../../../utils/http/request/index.js'


const playListSize = (Dimensions.get('window').width - 30) * 0.31

class IndexRecommend extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      slideData: []
    }
  }

  componentWillMount () {
    frontendSlide().then( res => {
      // this.setState({
      //   slideData: res.data,
      // });
      alert(res)
    }).catch( err => {
      alert(err)
    })
  }

  render() {
    const recommendData = [
      {icon:'\ue640', name:'每日推荐', url: ''},
      {icon:'\ue646', name:'歌单', url: 'PlayList'},
      {icon:'\ue624', name:'歌手', url: 'Singer'},
      {icon:'\ue62c', name:'排行榜', url: ''},
    ];

    return (
      <View style={styles.container}>
        <ScrollView style={{width:'100%', flex:1}}>

          <View style={{width:'100%', height:138, marginTop:18, paddingLeft:8, paddingRight:8}}>
            {
              this.state.slideData.length === 0 ? null : (
                <Swiper style={styles.wrapper} showsButtons={true} autoplay={true}>
                  {
                    this.state.slideData.map((item, index) => {
                      return (
                        <View key={index} style={styles.slide}>
                          {/*<Text style={styles.img}>{ item.id }</Text>*/}
                          <Image style={styles.img} source={{uri:item.img}} />
                        </View>
                      )
                    })
                  }
                </Swiper>
              )
            }
          </View>

          <Text onPress={() => {this.props.config.navigation.navigate('TestPage')}}>测试页面</Text>

          <View style={{width:'100%', height:68, marginTop:28, marginBottom:13, paddingLeft:8, paddingRight:8, flexDirection:'row'}}>
            {
              recommendData.map((item, index) => {
                return (
                  <TouchableWithoutFeedback onPress={() => {this.props.navigation.navigate(item.url)}}>
                    <View key={index} style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                      <View style={{width:44, height:44, marginBottom:5, justifyContent:'center', alignItems:'center', borderRadius:22, backgroundColor:'rgba(0,0,0,0.3)'}}>
                        <SuperIcon type={item.icon} style={{paddingTop:3, fontSize:32, color:this.props.config.color, backgroundColor:'transparent'}} />
                      </View>
                      <Text style={{color:'#BBB'}}>{ item.name }</Text>
                    </View>
                  </TouchableWithoutFeedback>
                );
              })
            }
          </View>

          <View style={{marginTop:13, marginLeft:8, marginBottom:6, flexDirection:'row', alignItems:'center'}}>
            <SuperIcon type={'\ue604'} style={{marginRight:10, fontSize:20, color:this.props.config.color}} />
            <Text style={{fontSize:16, color:'#DDD'}}>推荐歌单</Text>
          </View>
          <View style={{width:'100%', paddingLeft:15, paddingRight:15, flexDirection:'row', justifyContent:'space-around', flexWrap:'wrap'}}>
            <TouchableWithoutFeedback onPress={() => {this.props.config.navigation.navigate('PlayListDetail')}}>
              <View style={{width:'32%'}}>
                <View style={{width:'100%', height:playListSize, position:'relative', borderRadius:4, backgroundColor:'#f09c9d'}}>
                  <View style={{top:2, right:6, position:'absolute', flexDirection:'row'}}>
                    <SuperIcon type={'\ue6c8'} style={{marginTop:1, marginRight:3, fontSize:14, color:'#EEE'}} />
                    <Text style={{fontSize:13, color:'#FFF'}}>555</Text>
                  </View>
                </View>
                <View style={{width:'100%', height:48, paddingTop:4, paddingLeft:1, paddingRight:1}}>
                  <Text style={{fontSize:12.5, lineHeight:14, color:'#CCC'}}>每日推荐每日推荐每日推荐</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => {this.props.config.navigation.navigate('PlayListDetail')}}>
              <View style={{width:'32%'}}>
                <View style={{width:'100%', height:playListSize, position:'relative', borderRadius:4, backgroundColor:'#f09c9d'}}>
                  <View style={{top:2, right:6, position:'absolute', flexDirection:'row'}}>
                    <SuperIcon type={'\ue6c8'} style={{marginTop:1, marginRight:3, fontSize:14, color:'#EEE'}} />
                    <Text style={{fontSize:13, color:'#FFF'}}>555</Text>
                  </View>
                </View>
                <View style={{width:'100%', height:48, paddingTop:4, paddingLeft:1, paddingRight:1}}>
                  <Text style={{fontSize:12.5, lineHeight:14, color:'#CCC'}}>每日推荐每日推荐每日推荐</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => {this.props.config.navigation.navigate('PlayListDetail')}}>
              <View style={{width:'32%'}}>
                <View style={{width:'100%', height:playListSize, position:'relative', borderRadius:4, backgroundColor:'#f09c9d'}}>
                  <View style={{top:2, right:6, position:'absolute', flexDirection:'row'}}>
                    <SuperIcon type={'\ue6c8'} style={{marginTop:1, marginRight:3, fontSize:14, color:'#EEE'}} />
                    <Text style={{fontSize:13, color:'#FFF'}}>555</Text>
                  </View>
                </View>
                <View style={{width:'100%', height:48, paddingTop:4, paddingLeft:1, paddingRight:1}}>
                  <Text style={{fontSize:12.5, lineHeight:14, color:'#CCC'}}>每日推荐每日推荐每日推荐</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>

          <View style={{marginTop:13, marginLeft:8, marginBottom:6, flexDirection:'row', alignItems:'center'}}>
            <SuperIcon type={'\ue604'} style={{marginRight:10, fontSize:20, color:this.props.config.color}} />
            <Text style={{fontSize:16, color:'#DDD'}}>最新音乐</Text>
          </View>
          <View style={{width:'100%', paddingLeft:15, paddingRight:15, flexDirection:'row', justifyContent:'space-around', flexWrap:'wrap'}}>
            <View style={{width:'32%'}}>
              <TouchableWithoutFeedback onPress={() => {this.props.config.navigation.navigate('PlayListDetail')}}>
                <View style={{width:'100%', height:playListSize, borderRadius:4, backgroundColor:'#f09c9d'}}>
                </View>
              </TouchableWithoutFeedback>
              <View style={{width:'100%', height:48, paddingLeft:1, paddingRight:1}}>
                <Text onPress={() => {this.props.config.navigation.navigate('PlayListDetail')}} style={{width:'100%', height:20, lineHeight:20, fontSize:12.5, color:'#CCC'}}>JesBri老中nggjd</Text>
                <Text onPress={() => {this.props.config.navigation.navigate('SingerDetail')}} style={{fontSize:11, color:'#888'}}>策略</Text>
              </View>
            </View>
            <View style={{width:'32%'}}>
              <TouchableWithoutFeedback onPress={() => {this.props.config.navigation.navigate('PlayListDetail')}}>
                <View style={{width:'100%', height:playListSize, borderRadius:4, backgroundColor:'#f09c9d'}}>
                </View>
              </TouchableWithoutFeedback>
              <View style={{width:'100%', height:48, paddingLeft:1, paddingRight:1}}>
                <Text onPress={() => {this.props.config.navigation.navigate('PlayListDetail')}} style={{width:'100%', height:20, lineHeight:20, fontSize:12.5, color:'#CCC'}}>JesBri老中nggjd</Text>
                <Text onPress={() => {this.props.config.navigation.navigate('SingerDetail')}} style={{fontSize:11, color:'#888'}}>策略</Text>
              </View>
            </View>
            <View style={{width:'32%'}}>
              <TouchableWithoutFeedback onPress={() => {this.props.config.navigation.navigate('PlayListDetail')}}>
                <View style={{width:'100%', height:playListSize, borderRadius:4, backgroundColor:'#f09c9d'}}>
                </View>
              </TouchableWithoutFeedback>
              <View style={{width:'100%', height:48, paddingLeft:1, paddingRight:1}}>
                <Text onPress={() => {this.props.config.navigation.navigate('PlayListDetail')}} style={{width:'100%', height:20, lineHeight:20, fontSize:12.5, color:'#CCC'}}>JesBri老中nggjd</Text>
                <Text onPress={() => {this.props.config.navigation.navigate('SingerDetail')}} style={{fontSize:11, color:'#888'}}>策略</Text>
              </View>
            </View>
          </View>

          <View style={{marginTop:13, marginLeft:8, marginBottom:6, flexDirection:'row', alignItems:'center'}}>
            <SuperIcon type={'\ue604'} style={{marginRight:10, fontSize:20, color:this.props.config.color}} />
            <Text style={{fontSize:16, color:'#DDD'}}>歌曲排行榜</Text>
          </View>
          <View>
            <Ripple onPress={() => {this.props.config.navigation.navigate('Song')}} style={{height:58, flexDirection:'row', backgroundColor:'lightgreen'}}>
              <Text>8</Text>
            </Ripple>
            <Ripple onPress={() => {this.props.config.navigation.navigate('Song')}} style={{height:58, flexDirection:'row', backgroundColor:'lightblue'}}>
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
  },
  img: {
    width:'100%', height:'100%',
    borderRadius:6
  }
});


function reduxState(store) {
  return {
    config: store.config,
    music: store.music
  }
}

export default connect(reduxState)(withNavigation(IndexRecommend));
