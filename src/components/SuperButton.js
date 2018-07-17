import React  from 'react';

import {
  StyleSheet,
  Text
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient'


export default class SuperButton extends React.Component {
  render () {
    return (
      <LinearGradient colors={['#23fcfc', '#2e8ce6']} style={styles.superButtonOut}>
        <LinearGradient colors={['#555', '#181818']} style={styles.superButtonIn}>
          <Text style={{color:'#fff', fontSize: 16,}}>
            Button
          </Text>
        </LinearGradient>
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  superButtonOut: {
    padding:6,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:4
  },
  superButtonIn: {
    height:25,
    paddingLeft:8,
    paddingRight:8,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:2
  },
});
