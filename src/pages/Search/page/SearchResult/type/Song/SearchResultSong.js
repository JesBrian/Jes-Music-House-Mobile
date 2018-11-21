import React  from 'react';

import {
  StyleSheet,
  ScrollView
} from 'react-native';

import SuperSongGroup from '../../../../../../components/SuperSongGroup/SuperSongGroup.js'

export default class SearchResultSong extends React.Component {
  render() {
    return (
      <ScrollView style={{flex:1, backgroundColor:'#282828'}}>

        <SuperSongGroup />
      </ScrollView>
    );
  }
}
