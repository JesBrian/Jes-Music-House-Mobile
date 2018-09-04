import React  from 'react';

import {
  Dimensions,
  StyleSheet,
  ScrollView,
  Button,
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

          <View style={{width:'100%', height:138, marginTop:18, paddingLeft:18, paddingRight:18}}>
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

          <View style={{width:'100%', height:68, marginTop:18, paddingLeft:8, paddingRight:8, flexDirection:'row'}}>
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
              <View style={{width:44, height:44, marginBottom:5, justifyContent:'center', alignItems:'center', borderRadius:22, backgroundColor:'rgba(0,0,0,0.3)'}}>
                <SuperIcon type={'\ue640'} style={{paddingTop:3, fontSize:32, color:'#BBB', backgroundColor:'transparent'}} />
              </View>
              <Text style={{color:'#BBB'}}>每日推荐</Text>
            </View>
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
              <View style={{width:44, height:44, marginBottom:5, justifyContent:'center', alignItems:'center', borderRadius:22, backgroundColor:'rgba(0,0,0,0.3)'}}>
                <SuperIcon type={'\ue646'} style={{paddingTop:3, fontSize:32, color:'#BBB', backgroundColor:'transparent'}} />
              </View>
              <Text style={{color:'#BBB'}}>歌单</Text>
            </View>
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
              <View style={{width:44, height:44, marginBottom:5, justifyContent:'center', alignItems:'center', borderRadius:22, backgroundColor:'rgba(0,0,0,0.3)'}}>
                <SuperIcon type={'\ue624'} style={{paddingTop:3, fontSize:32, color:'#BBB', backgroundColor:'transparent'}} />
              </View>
              <Text style={{color:'#BBB'}}>歌手</Text>
            </View>
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
              <View style={{width:44, height:44, marginBottom:5, justifyContent:'center', alignItems:'center', borderRadius:22, backgroundColor:'rgba(0,0,0,0.3)'}}>
                <SuperIcon type={'\ue62c'} style={{paddingTop:3, fontSize:32, color:'#BBB', backgroundColor:'transparent'}} />
              </View>
              <Text style={{color:'#BBB'}}>排行榜</Text>
            </View>
          </View>

          <View style={{marginTop:18, flexDirection:'row'}}>
            <Text>推荐歌单</Text>
            <SuperIcon type={'\ue604'}/>
          </View>
          <View style={{width:'100%', paddingLeft:15, paddingRight:15, flexDirection:'row', justifyContent:'space-around', flexWrap:'wrap'}}>
            <View style={{width:'31%'}}>
              <View style={{width:'100%', height:this.state.playListSize, borderRadius:8, backgroundColor:'#f09c9d'}}>
              </View>
              <View style={{width:'100%', height:38, backgroundColor:'#38daf0'}}>
                <Text>1</Text>
              </View>
            </View>
            <View style={{width:'31%'}}>
              <View style={{width:'100%', height:this.state.playListSize, borderRadius:8, backgroundColor:'#f09c9d'}}>
              </View>
              <Text>2</Text>
            </View>
            <View style={{width:'31%'}}>
              <View style={{width:'100%', height:this.state.playListSize, borderRadius:8, backgroundColor:'#f09c9d'}}>
              </View>
              <Text>3</Text>
            </View>
            <View style={{width:'31%'}}>
              <View style={{width:'100%', height:this.state.playListSize, borderRadius:8, backgroundColor:'#f09c9d'}}>
              </View>
              <Text>4</Text>
            </View>
            <View style={{width:'31%'}}>
              <View style={{width:'100%', height:this.state.playListSize, borderRadius:8, backgroundColor:'#f09c9d'}}>
              </View>
              <Text>5</Text>
            </View>
            <View style={{width:'31%'}}>
              <View style={{width:'100%', height:this.state.playListSize, borderRadius:8, backgroundColor:'#f09c9d'}}>
              </View>
              <Text>6</Text>
            </View>
          </View>



          {/*<Button title='跳转到登录' onPress={()=>this.props.config.navigation.navigate('Home')} />*/}
          {/*<Button title='跳转到歌单' onPress={()=>this.props.config.navigation.navigate('PlayList')} />*/}
          {/*<Button title='跳转到歌手' onPress={()=>this.props.config.navigation.navigate('Singer')} />*/}
          {/*<Button title='跳转到歌单详情' onPress={()=>this.props.config.navigation.navigate('PlayList')} />*/}
          {/*<Button title='打开 Modal' onPress={() => {this.props.dispatch(showModal('loading'))}} />*/}


        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'transparent'
  },
  wrapper: {
  },
  slide: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
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
