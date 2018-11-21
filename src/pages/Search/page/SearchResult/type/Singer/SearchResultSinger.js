import React  from 'react';

import {
  StyleSheet,
  ScrollView
} from 'react-native';

import SuperSingerGroup from '../../../../../../components/SuperSingerGroup/SuperSingerGroup.js'

export default class SearchResultSinger extends React.Component {
  render() {
    return (
      <ScrollView style={{flex:1, backgroundColor:'#282828'}}>

        <SuperSingerGroup />
      </ScrollView>
    );
  }
}
