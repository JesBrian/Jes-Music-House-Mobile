import React  from 'react';

import {
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native';

import { connect } from 'react-redux'
import { showModal } from '../../../redux/actions/ViewActions.js'

import Ripple from 'react-native-material-ripple'

import SuperListenGroup from '../../../components/SuperListenGroup/SuperListenGroup.js'
import SuperIcon from '../../../components/SuperIcon/SuperIcon.js'

class ListenHistoryWeek extends React.Component {
  render() {
    return (
      <ScrollView style={{flex:1, backgroundColor:'#282828'}}>

        <View style={{width:'100%', height:38, flexDirection:'row', backgroundColor:'rgba(0,0,0,0.18)'}}>
          <Ripple style={{height:'100%', padding:15, flex:1, flexDirection:'row', justifyContent:'flex-start', alignItems:'center', borderTopLeftRadius:12}}>
            <SuperIcon type={'\ue6b4'} style={{marginTop:1, marginRight:6, fontSize:18, color:'#FFF'}} />
            <Text style={{fontSize:16, color:'#FFF'}}>播放全部 [888]</Text>
          </Ripple>

          <Ripple onPress={() => {this.props.dispatch(showModal('multiSelectSong'))}} style={{width:108, height:'100%', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <SuperIcon type={'\ue654'} style={{fontSize:18, color:'#FFF'}} />
            <Text style={{fontSize:16, color:'#FFF'}}> 多选</Text>
          </Ripple>
        </View>

        <SuperListenGroup />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
});

function reduxState (store) {
  return {
  }
}

export default connect(reduxState)(ListenHistoryWeek);
