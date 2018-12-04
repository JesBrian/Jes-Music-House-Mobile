import React  from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import { connect } from 'react-redux'
import { showModal } from '../../redux/actions/ViewActions.js'

import Ripple from 'react-native-material-ripple'

import NormalNavbar from '../../layout/top/TopNavbar/type/NormalNavbar.js'
import SuperDownloadGroup from '../../components/SuperGroup/Download/SuperDownloadGroup.js'
import SuperIcon from '../../components/SuperIcon/SuperIcon.js'

class DownloadManagement extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NormalNavbar label={'下载管理'} />

        <View style={{paddingTop:3, paddingBottom:56, flex:1, backgroundColor:'rgba(0,0,0,0.8)'}}>
          <View style={{width:'100%', height:38, flexDirection:'row', backgroundColor:'rgba(0,0,0,0.18)'}}>
            <Ripple style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
              <SuperIcon type={'\ue6b4'} style={{marginTop:2, marginRight:3, fontSize:18, color:'#FFF'}} />
              <Text style={{fontSize:16, color:'#FFF'}}>开始</Text>
            </Ripple>
            <Ripple onPress={() => {this.props.dispatch(showModal('multiSelectSong'))}} style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
              <SuperIcon type={'\ue654'} style={{marginTop:2, marginRight:3, fontSize:18, color:'#FFF'}} />
              <Text style={{fontSize:16, color:'#FFF'}}>多选</Text>
            </Ripple>
            <Ripple onPress={() => {}} style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
              <SuperIcon type={'\ue61f'} style={{marginTop:2, marginRight:3, fontSize:18, color:'#FFF'}} />
              <Text style={{fontSize:16, color:'#FFF'}}>清空</Text>
            </Ripple>
          </View>

          <SuperDownloadGroup />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'transparent'
  },
});

function reduxState (store) {
  return {
  }
}

export default connect(reduxState)(DownloadManagement);
