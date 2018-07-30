import React  from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import { common } from '../../assets/styles/common.js'

export default class SearchNavbar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={{width:48}}>
          <Text style={common.icon}>&#xe8ca;</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{flex:1, justifyContent:'flex-start'}}>
          <Text>dc432f生成gv纯净水hjk</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{width:48}}>
          <Text style={common.icon}>&#xe615;</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height:55,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'lightgreen'
  },
})
