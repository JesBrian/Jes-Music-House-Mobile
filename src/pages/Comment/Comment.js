import React  from 'react';

import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  TouchableWithoutFeedback
} from 'react-native';

import { connect } from 'react-redux'
import { hiddenBottomMusic, showBottomMusic } from '../../redux/actions/ViewActions.js'

import Ripple from 'react-native-material-ripple'

import NormalNavbar from '../../layout/top/type/NormalNavbar.js'
import SuperInput from '../../components/SuperInput/SuperInput.js'
import SuperIcon from '../../components/SuperIcon.js'


class Comment extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount () {
    this.props.dispatch(hiddenBottomMusic())
  }

  componentWillUnmount () {
    this.props.dispatch(showBottomMusic())
  }


  render() {
    return (
      <View style={styles.container}>

        <NormalNavbar label={'评论 [11111111]'} />

        <View style={{flex:1, backgroundColor:'rgba(0,0,0,0.73)'}}>
          <Ripple style={{width:'100%', height:68, flexDirection:'row', alignItems:'center'}}>
            <Image style={{width:43, height:43, marginLeft:12, marginRight:18, borderRadius:5}} source={{uri:'https://avatars3.githubusercontent.com/u/25942696?s=88&v=4'}} />
            <View style={{height:'100%', flex:1, justifyContent:'center'}}>
              <Text style={{marginTop:2, fontSize:17}}>The Name of the Song</Text>
              <Text>JesBrian</Text>
            </View>
            <View style={{marginTop:5, marginRight:18}}>
              <SuperIcon type={'\ue604'} />
            </View>
          </Ripple>

          <ScrollView style={{flex:1}}>
            <View style={{height:28, flexDirection:'row', alignItems:'center', backgroundColor:'rgba(255,255,255,0.12)'}}>
              <SuperIcon type={'\ue8cb'} style={{margin:8, color:'#BBB'}}/>
              <Text style={{color:'#EEE'}}>精彩评论</Text>
            </View>
            <TouchableWithoutFeedback onPress={() => {alert(6)}}>
              <View style={{flexDirection:'row'}}>
                <Image style={{width:32, height:32, margin:8, borderRadius:16}} source={{uri:'https://avatars3.githubusercontent.com/u/25942696?s=88&v=4'}} />
                <View style={{flex:1}}>
                  <View style={{height:43, paddingTop:6, position:'relative', justifyContent:'center'}}>
                    <Text>JesBrian</Text>
                    <Text style={{fontSize:12}}>2018-09-16</Text>
                    <TouchableWithoutFeedback onPress={() => {alert(8)}}>
                      <View style={{top:2, right:4, padding:6, position:'absolute', flexDirection:'row'}}>
                        <Text>333</Text>
                        <SuperIcon type={'\ue80d'} style={{marginLeft:3, fontSize:16}} />
                      </View>
                    </TouchableWithoutFeedback>
                  </View>
                  <View style={{paddingRight:10, paddingBottom:8, borderBottomWidth:0.18, borderColor:'#CCC'}}>
                    <Text>cbdbchdsbv出版社不成熟超声波还不成熟cnjs32不开花那会计难看324该2看cdnsjc4充满了32</Text>
                    <View style={{marginTop:8, marginBottom:6, padding:6, borderRadius:4, borderWidth:0.38, borderColor:'#888', backgroundColor:'#333'}}>
                      <Text><Text onPress={() => {alert('comment')}} style={{color:'lightgreen'}}>JesBrian</Text>: 不睡觉见v3gbj才能不到家vgd见3424你上课表4后cbskj回家撒dsdkvjsd被2渝北补代表jhcbxjh</Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>

            <View style={{height:28, flexDirection:'row', alignItems:'center', backgroundColor:'rgba(255,255,255,0.12)'}}>
              <SuperIcon type={'\ue8cb'} style={{margin:8, color:'#BBB'}}/>
              <Text style={{color:'#EEE'}}>最新评论</Text>
            </View>
          </ScrollView>

          <SuperInput />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    position: 'relative',
    flexDirection: 'column',
    backgroundColor: 'transparent'
  },
});


function reduxState(store) {
  return {
    showView: store.showView
  }
}

export default connect(reduxState)(Comment);
