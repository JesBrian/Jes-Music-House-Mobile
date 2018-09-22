/*
 *
 * Created by Stone
 * Email: bolan999999@gmail.com
 * Date: 2017/12/2
 *
 */

import React from "react";
import { LargeList } from 'react-native-largelist';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import SuperLargeList from "../../components/SuperList/SuperLargeList";



export default class LargeListSample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { refreshing: false };
  }

  render() {
    return (
      <View style={{ flex: 1}}>
        <SuperLargeList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width:'100%', height:'100%',
    flex:1,
    flexDirection:'column',
    backgroundColor: 'transparent'
  }
});
