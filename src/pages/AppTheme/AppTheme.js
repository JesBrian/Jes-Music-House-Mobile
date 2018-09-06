import React  from 'react';

import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native';

import { connect } from 'react-redux'
import { setColor } from '../../redux/actions/ConfigActions.js'


import Ripple from 'react-native-material-ripple'
import LinearGradient from 'react-native-linear-gradient'

import NormalNavbar from '../../layout/top/type/NormalNavbar.js'
import SuperIcon from '../../components/SuperIcon.js'


class AppTheme extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      colorSize: Dimensions.get('window').width * 0.93 * 0.17,
      nowChooseColor: '#05DAF0'
    };
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      nowChooseColor: nextProps.config.color
    })
  }

  render() {
    const themeColorArr = ['#38daf0', '#ce7df0', '#f09c9d', '#4cf0ab', '#8600ff', '#f07b93', '#779bff', '#0000ff', '#f0ef77', '#f09309'];

    return (
      <View style={styles.container}>
        <NormalNavbar label={'个性换肤'} />

        <ScrollView style={{flex:1, backgroundColor:'rgba(0,0,0,0.73)'}}>
          <View style={{flex:1, alignItems:'center'}}>

            <View style={{width:'90%', height:this.state.colorSize * 2 + 38, marginTop:28}}>
              <View style={{marginLeft:-6, flexDirection:'row', alignItems:'center'}}>
                <SuperIcon type={'\ue604'} style={{marginRight:10, fontSize:20, color:this.state.nowChooseColor}} />
                <Text style={{fontSize:16, color:'#DDD'}}>预设主题色</Text>
              </View>
              <View style={{marginTop:8, flex:1, flexDirection:'row', justifyContent:'space-between', flexWrap:'wrap'}}>
                {
                  themeColorArr.map((item) => {
                    return (
                      <Ripple key={item} onPress={this.changeAppColor.bind(this, item)} style={{width:'17%', height:this.state.colorSize, marginBottom:9, position:'relative',borderRadius:8, backgroundColor:item}} >
                        <View style={{width:12, height:12, top:3, right:3, position:'absolute', borderRadius:12, backgroundColor:'#333',}} />
                      </Ripple>
                    )
                  })
                }
              </View>
            </View>

            <View style={{width:'90%', marginTop:38, position:'relative'}}>
              <View style={{marginLeft:-6, flexDirection:'row', alignItems:'center'}}>
                <SuperIcon type={'\ue604'} style={{marginRight:10, fontSize:20, color:this.state.nowChooseColor}} />
                <Text style={{fontSize:16, color:'#DDD'}}>调色盘</Text>
              </View>
              <Ripple onPress={this.changeAppColor.bind(this, '#4cf0ab')} style={{width:68, height:28, top:3, right:12, position:'absolute', justifyContent:'center', alignItems:'center', borderRadius:3, backgroundColor:'lightblue'}}>
                <Text>应用</Text>
              </Ripple>
              <View style={{height:68, marginTop:8, flexDirection:'row'}}>
                <View style={{width:53, height:68, marginRight:15, marginBottom:5, position:'relative',borderRadius:8, backgroundColor:this.state.nowChooseColor}} />
                <View style={{paddingTop:20, flex:1, justifyContent:'center'}}>
                  <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#8B00FF']} style={{width:'100%', height:10, marginTop:8, marginBottom:8, borderRadius:10}} />
                  <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#FFF', this.state.nowChooseColor, '#000']} style={{width:'100%', height:10, marginTop:8, marginBottom:8, borderRadius:10}} />
                </View>
              </View>
            </View>

            <View style={{width:'90%', marginTop:38}}>
              <View style={{marginLeft:-6, flexDirection:'row', alignItems:'center'}}>
                <SuperIcon type={'\ue604'} style={{marginRight:10, fontSize:20, color:this.state.nowChooseColor}} />
                <Text style={{fontSize:16, color:'#DDD'}}>模式切换</Text>
              </View>
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

  changeAppColor (color) {
    this.props.dispatch(setColor(color))
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
