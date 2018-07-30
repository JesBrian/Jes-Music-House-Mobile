import React  from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import SearchNavbar from '../../layout/Top/SearchNavbar.js'


export default class Search extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchNavbar />
        <Text onPress={()=>{this.openControlPanel()}} >搜索</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent'
  },
});
