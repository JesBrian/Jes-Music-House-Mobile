import React  from 'react';

import {
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native';

import { connect } from 'react-redux'
import { showModal } from '../../redux/actions/ViewActions.js'

import Ripple from 'react-native-material-ripple'

import NormalNavbar from '../../layout/top/TopNavbar/type/NormalNavbar.js'
import SuperIcon from '../../components/SuperIcon/SuperIcon.js'
import SuperSongGroup from '../../components/SuperGroup/Song/SuperSongGroup.js'

class Recommend extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <NormalNavbar label={'每日推荐'} />

        <ScrollView style={{backgroundColor:'rgba(0, 0, 0, 0.38)'}}>
          <View style={{height:108}}>
          </View>

          <View style={{width:'100%', height:38, flexDirection:'row', borderTopLeftRadius:12, borderTopRightRadius:12, backgroundColor:'rgba(0,0,0,0.18)'}}>
            <Ripple style={{height:'100%', padding:15, flex:1, flexDirection:'row', justifyContent:'flex-start', alignItems:'center', borderTopLeftRadius:12}}>
              <SuperIcon type={'\ue6b4'} style={{marginTop:1, marginRight:6, fontSize:18, color:'#FFF'}} />
              <Text style={{fontSize:16, color:'#FFF'}}>播放全部 [888]</Text>
            </Ripple>

            <Ripple onPress={() => {this.props.dispatch(showModal('multiSelectSong'))}} style={{width:108, height:'100%', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
              <SuperIcon type={'\ue654'} style={{fontSize:18, color:'#FFF'}} />
              <Text style={{fontSize:16, color:'#FFF'}}> 多选</Text>
            </Ripple>
          </View>

          <View style={{paddingBottom:50}}>
            <SuperSongGroup />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'rgba(0, 0, 0, 0.6)'
  },
});

function reduxState (store) {
  return {
  }
}

export default connect(reduxState)(Recommend);
