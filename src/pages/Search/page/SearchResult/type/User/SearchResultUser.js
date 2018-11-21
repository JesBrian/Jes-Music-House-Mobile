import React  from 'react';

import {
  StyleSheet,
  ScrollView
} from 'react-native';

import SuperUserGroup from '../../../../../../components/SuperUserGroup/SuperUserGroup.js'

export default class SearchResultUser extends React.Component {
  render() {
    return (
      <ScrollView style={{flex:1, backgroundColor:'#282828'}}>

        <SuperUserGroup />
      </ScrollView>
    );
  }
}
