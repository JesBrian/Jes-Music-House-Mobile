import React  from 'react';

import {
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native';

import SuperSongGroup from '../../components/SuperSongGroup/SuperSongGroup.js'

import NormalNavbar from '../../layout/top/TopNavbar/type/NormalNavbar.js'

export default class Recommend extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NormalNavbar label={'个性推荐'} />

        <ScrollView>
          <View style={{height:108, backgroundColor:'rgba(0, 0, 0, 0.38)'}}>
          </View>

          <View style={{paddingBottom:50, backgroundColor:'rgba(0, 0, 0, 0.38)'}}>
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
