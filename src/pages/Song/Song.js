import React  from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';


export default class Song extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text onPress={()=>{this.openControlPanel()}} >用户注册 88</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent'
  },
});
