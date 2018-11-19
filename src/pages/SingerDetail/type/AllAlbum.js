import React  from 'react';

import {
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native';

import SuperPlayListGroup from '../../../components/SuperPlayListGroup/SuperPlayListGroup.js'


export default class UserInfo extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>

        <SuperPlayListGroup />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
});
