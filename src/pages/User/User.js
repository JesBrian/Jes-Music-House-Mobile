import React  from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

import NormalNavbar from '../../layout/top/TopNavbar/type/NormalNavbar.js'
import SuperUserTab from './SuperUserTab.js'


export default class User extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NormalNavbar navigation={this.props.navigation} />

        <View style={{height:208}}>
        </View>

        <SuperUserTab />
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
