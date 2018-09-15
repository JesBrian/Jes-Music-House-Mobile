import React  from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';


export default class UserMusic extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>音乐</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
});
