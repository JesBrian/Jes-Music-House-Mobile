import React  from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';


export default class MessagePersonalLetter extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>消息 - 私信</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height:'100%'
  },
});
