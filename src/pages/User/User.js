import React  from 'react';

import {
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native';

import SuperButton from '../../components/SuperButton.js'
import NormalNavbar from '../../layout/top/type/NormalNavbar.js'
import SuperUserTab from './SuperUserTab.js'


export default class User extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NormalNavbar navigation={this.props.navigation} />

        <ScrollView style={{backgroundColor:'rgba(0,0,0,0.73)'}}>
          <View style={{height:208}}>
          </View>

          <SuperUserTab />
        </ScrollView>
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
