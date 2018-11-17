import React  from 'react';

import {
  StyleSheet,
  ScrollView,
  View
} from 'react-native';

import NormalNavbar from '../../layout/top/TopNavbar/type/NormalNavbar.js'
import BaseInfo from './container/BaseInfo/BaseInfo.js'
import NavLink from './container/NavLink/NavLink.js'
import SongList from './container/SongList/SongList.js'


export default class PlayListDetail extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <NormalNavbar label={'歌单详情'} />

        <ScrollView style={{flex:1, backgroundColor:'rgba(0,0,0,0.73)'}}>
          <BaseInfo />
          <NavLink />
          <SongList />
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
});
