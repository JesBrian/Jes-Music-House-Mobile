import React  from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';


export default class UserInfo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>关于我</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
});
