import React from 'react'
import { StyleSheet, Text } from 'react-native'

export default class SuperButton extends React.Component {
  render() {
    return (
      <Text  style={styles.linearGradient}>
        Test Super Button
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    justifyContent:'center',
    alignItems:'center',
    width:200,
    height:50,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    color:'#ce7df0',
    backgroundColor: 'lightgreen'
  },
})
