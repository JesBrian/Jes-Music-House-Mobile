import React  from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

export default class IndexTopNavbar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>index</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height:55,
    justifyContent:'center',
    backgroundColor:'lightgreen'
  },
})
