import React  from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

export default class IndexSelf extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Index Friend</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent'
  },
});
