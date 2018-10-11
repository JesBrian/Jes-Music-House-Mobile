import React  from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';


export default class CollectionSinger extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>收藏歌手</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
});
