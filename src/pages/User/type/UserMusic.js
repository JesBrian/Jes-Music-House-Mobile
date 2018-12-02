import React  from 'react'

import {
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native'

import { connect } from 'react-redux'

import SuperIcon from '../../../components/SuperIcon/SuperIcon.js'
import SuperPlayListGroup from '../../../components/SuperPlayListGroup/SuperPlayListGroup.js'


class UserMusic extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>

        <View style={{height:28, flexDirection:'row', alignItems:'center', backgroundColor:'rgba(255,255,255,0.12)'}}>
          <View style={{flex:1, flexDirection:'row', alignItems:'center'}}>
            <SuperIcon type={'\ue8cb'} style={{margin:8, color:this.props.color}}/>
            <Text style={{color:'#BBB'}}>创建的歌单</Text>
          </View>
        </View>
        <SuperPlayListGroup />

        <View style={{height:28, flexDirection:'row', alignItems:'center', backgroundColor:'rgba(255,255,255,0.12)'}}>
          <View style={{flex:1, flexDirection:'row', alignItems:'center'}}>
            <SuperIcon type={'\ue8cb'} style={{margin:8, color:this.props.color}}/>
            <Text style={{color:'#BBB'}}>收藏的歌单</Text>
          </View>
        </View>
        <SuperPlayListGroup />

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingBottom:3,
    backgroundColor:'rgba(0,0,0,0.28)',
  },
});


function reduxState(store) {
  return {
    color: store.config.color
  }
}

export default connect(reduxState)(UserMusic);
