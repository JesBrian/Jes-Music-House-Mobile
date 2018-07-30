import React  from 'react';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

export default class SearchNavbar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>search</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height:55,
    justifyContent: 'center',
    backgroundColor: 'lightgreen'
  },
})
