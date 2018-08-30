import React  from 'react';

import {
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


class IndexRecommend extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{width:'100%', flex:1, backgroundColor:'rgba(0,0,0,0.8)'}}>

          <View style={{width:'100%', height:138, paddingLeft:18, paddingRight:18}}>
            <Swiper style={styles.wrapper} showsButtons={true} autoplay={true}>
              <View style={styles.slide1}>
                <Text style={styles.text}>Hello Swiper</Text>
              </View>
              <View style={styles.slide2}>
                <Text style={styles.text}>Beautiful</Text>
              </View>
              <View style={styles.slide3}>
                <Text style={styles.text}>And simple</Text>
              </View>
            </Swiper>
          </View>

          <Text style={{marginTop:45}} onPress={()=>{this.openControlPanel()}} >用户登录 88</Text>
          <SuperButton label="g3好gbg" onPressEvent={this.buttonClickEvent} />
          <Button title='跳转到登录' onPress={()=>this.props.navigation.navigate('Home')} />
          <Button title='跳转到歌单' onPress={()=>this.props.navigation.navigate('PlayList')} />
          <Button title='跳转到歌手' onPress={()=>this.props.navigation.navigate('Singer')} />
          <Button title='跳转到歌单详情' onPress={()=>this.props.navigation.navigate('PlayList')} />
          <Button title='打开 Modal' onPress={() => {this.props.dispatch(showModal('loading'))}} />


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
  slide1: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
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
