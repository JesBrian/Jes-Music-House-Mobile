import React  from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';


import NormalNavbar from '../../layout/Top/type/NormalNavbar.js'


export default class Comment extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <NormalNavbar label={'评论 [11111111]'} />

        <View style={{width:'100%', height:68, backgroundColor:'lightgreen'}}>
          <Text>hhh</Text>
        </View>

        <View>
          <Text>精彩评论</Text>
        </View>


        <View>
          <Text>最新评论</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    position: 'relative',
    flexDirection: 'column',
    backgroundColor: 'transparent'
  },
});
