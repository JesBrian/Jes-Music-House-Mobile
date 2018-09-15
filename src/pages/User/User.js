import React  from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import SuperButton from '../../components/SuperButton.js'
import NormalNavbar from '../../layout/top/type/NormalNavbar.js'


export default class User extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NormalNavbar navigation={this.props.navigation} />



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
