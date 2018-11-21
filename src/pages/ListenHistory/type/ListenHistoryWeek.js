import React  from 'react';

import {
  StyleSheet,
  ScrollView
} from 'react-native';

import SuperListenGroup from '../../../components/SuperListenGroup/SuperListenGroup.js'

export default class ListenHistoryWeek extends React.Component {
  render() {
    return (
      <ScrollView style={{flex:1, backgroundColor:'#282828'}}>

        <SuperListenGroup />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
});
