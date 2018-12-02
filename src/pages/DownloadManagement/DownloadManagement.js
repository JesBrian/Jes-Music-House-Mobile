import React  from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

import NormalNavbar from '../../layout/top/TopNavbar/type/NormalNavbar.js'

export default class DownloadManagement extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NormalNavbar label={'下载管理'} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent'
  },
});
