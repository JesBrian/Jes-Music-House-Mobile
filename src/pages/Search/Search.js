import React  from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import SearchTopNavbar from '../../layout/Top/SearchTopNavbar.js'


export default class Search extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchTopNavbar />
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
