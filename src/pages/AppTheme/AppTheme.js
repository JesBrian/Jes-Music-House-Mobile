import React  from 'react';

import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native';

import { connect } from 'react-redux'


import Ripple from 'react-native-material-ripple'
import LinearGradient from 'react-native-linear-gradient'

import NormalNavbar from '../../layout/top/type/NormalNavbar.js'
import SuperSlider from '../../components/SuperSlider.js'


class AppTheme extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      colorSize: Dimensions.get('window').width * 0.93 * 0.17,
      nowChooseColor: '#2e8ce6'
    };
  }

  componentWillMount () {
    setTimeout(() => {
      this.setState({
        nowChooseColor: '#4cf0ab'
      })
    }, 5000)
    setTimeout(() => {
      this.setState({
        nowChooseColor: '#ce7df0'
      })
    }, 10000)
  }

  render() {
    const themeColorArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
      <View style={styles.container}>
        <NormalNavbar label={'个性换肤'} />

        <ScrollView style={{flex:1, backgroundColor:'rgba(0,0,0,0.73)'}}>
          <View style={{flex:1, alignItems:'center'}}>

            <View style={{width:'90%', height:this.state.colorSize * 2 + 38, marginTop:28}}>
              <Text>预设主题色</Text>
              <View style={{marginTop:8, flex:1, flexDirection:'row', justifyContent:'space-between', flexWrap:'wrap'}}>
                {
                  themeColorArr.map((item, index) => {
                    return (
                      <Ripple key={index} style={{width:'17%', height:this.state.colorSize, marginBottom:9, position:'relative',borderRadius:8, backgroundColor:'lightgreen'}} >
                        <View style={{width:12, height:12, top:3, right:3, position:'absolute', borderRadius:12, backgroundColor:'#333',}} />
                      </Ripple>
                    )
                  })
                }
              </View>
            </View>

            <View style={{width:'90%', marginTop:38}}>
              <Text>调色盘</Text>
              <View style={{height:53, marginTop:8, flexDirection:'row'}}>
                <View style={{width:53, height:53, marginRight:15, marginBottom:9, position:'relative',borderRadius:8, backgroundColor:'lightgreen'}} />
                <View style={{flex:1, justifyContent:'center'}}>
                  <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#8B00FF']} style={{width:'100%', height:10, marginTop:10, marginBottom:10, borderRadius:10}} />
                  <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#FFF', this.state.nowChooseColor, '#000']} style={{width:'100%', height:10, marginTop:10, marginBottom:10, borderRadius:10}} />
                </View>
              </View>
            </View>

            <View style={{width:'90%', marginTop:38}}>
              <Text>模式切换</Text>
              <View style={{marginTop:8, flexDirection:'row', justifyContent:'space-between'}}>
                <Ripple style={{width:'45%', height:38, justifyContent:'center', alignItems:'center', borderRadius:5, backgroundColor:'lightgreen'}}>
                  <Text>日间模式</Text>
                </Ripple>
                <Ripple style={{width:'45%', height:38, justifyContent:'center', alignItems:'center', borderRadius:5, backgroundColor:'lightgreen'}}>
                  <Text>夜间模式</Text>
                </Ripple>
              </View>
            </View>

          </View>
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    flex:1,
    backgroundColor: 'transparent'
  },
});


function reduxState(store) {
  return {
    config: store.config
  }
}

export default connect(reduxState)(AppTheme);
