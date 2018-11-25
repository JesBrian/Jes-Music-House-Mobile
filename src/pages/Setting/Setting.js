import React  from 'react';

import {
  StyleSheet,
  ScrollView,
  View
} from 'react-native';

import NormalNavbar from '../../layout/top/TopNavbar/type/NormalNavbar.js'

export default class Setting extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NormalNavbar label={'修改个人信息'} />

        <ScrollView style={{backgroundColor:'rgba(0,0,0,0.73)'}}>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'transparent'
  },
});
