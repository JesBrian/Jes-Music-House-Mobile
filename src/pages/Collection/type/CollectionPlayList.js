import React  from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';


export default class CollectionPlayList extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>收藏专辑</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height:'100%'
  },
});
