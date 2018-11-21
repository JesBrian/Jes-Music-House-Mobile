import React  from 'react';

import {
  StyleSheet,
  ScrollView
} from 'react-native';

import SuperPlayListGroup from '../../../../../../components/SuperPlayListGroup/SuperPlayListGroup.js'

export default class SearchResultPlayList extends React.Component {
  render() {
    return (
      <ScrollView style={{flex:1, backgroundColor:'#282828'}}>

        <SuperPlayListGroup />
      </ScrollView>
    );
  }
}
