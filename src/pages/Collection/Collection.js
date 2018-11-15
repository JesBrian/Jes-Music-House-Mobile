import React  from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

import NormalNavbar from '../../layout/top/TopNavbar/type/NormalNavbar.js'
import SuperCollectionTab from './SuperCollectionTab.js'


export default class Collection extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NormalNavbar navigation={this.props.navigation} />

        <SuperCollectionTab />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingBottom:53,
    backgroundColor:'transparent'
  },
});
