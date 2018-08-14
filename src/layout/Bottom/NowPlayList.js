import React  from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import {common} from '../../assets/styles/common.js'


export default class NowPlayList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <View style={{position:'relative', flex:1, flexDirection:'row', backgroundColor:'#333'}}>
        <Text>777</Text>
      </View>
    )
  }

}

const styles = StyleSheet.create({
})
