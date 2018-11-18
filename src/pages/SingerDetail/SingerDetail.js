import React  from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

import NormalNavbar from '../../layout/top/TopNavbar/type/NormalNavbar.js'
import SuperSingerDetailTab from './SuperSingerDetailTab.js'


export default class User extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NormalNavbar navigation={this.props.navigation} />

        <View style={{height:208}}>
        </View>

        <SuperSingerDetailTab />
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
