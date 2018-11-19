import React  from 'react';

import {
  StyleSheet,
  ScrollView
} from 'react-native';

import SuperPlayListGroup from '../../../components/SuperPlayListGroup/SuperPlayListGroup.js'


export default class CollectionPlayList extends React.Component {
  render() {
    return (
      <ScrollView style={{flex:1, backgroundColor:'#282828'}}>

        <SuperPlayListGroup />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height:'100%'
  },
});
