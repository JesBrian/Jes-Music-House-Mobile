import React  from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

import NormalNavbar from '../../layout/top/TopNavbar/type/NormalNavbar.js'
import SuperDownloadGroup from '../../components/SuperGroup/Download/SuperDownloadGroup.js'

export default class DownloadManagement extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NormalNavbar label={'下载管理'} />

        <View style={{paddingTop:3, paddingBottom:56, flex:1, backgroundColor:'rgba(0,0,0,0.88)'}}>
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
