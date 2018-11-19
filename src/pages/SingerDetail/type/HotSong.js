import React  from 'react';

import {
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native';

import SuperSongGroup from '../../../components/SuperSongGroup/SuperSongGroup.js'


export default class UserInfo extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>

        <SuperSongGroup />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
});
