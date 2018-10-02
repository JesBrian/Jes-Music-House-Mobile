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

        <ScrollView>
          <View style={{height:268}}>
          </View>

          <SuperUserTab />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop:75,
    flex:1,
    backgroundColor: 'transparent'
  },
});
