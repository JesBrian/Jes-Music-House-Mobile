import React  from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';


export default class UserTrend extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>动态</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
});
