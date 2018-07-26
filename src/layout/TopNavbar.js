import React  from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

export default class TopNavbar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <Text style={styles.container}>vhn</Text>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height:48,
    justifyContent: 'center',
    backgroundColor: 'lightgreen'
  },
})
