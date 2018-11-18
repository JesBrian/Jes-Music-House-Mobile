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
        <Text>艺人信息</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height:'100%'
  },
});
