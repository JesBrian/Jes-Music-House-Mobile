import React  from 'react';

import {
  StyleSheet,
  ScrollView
} from 'react-native';

import SuperUserGroup from '../../../components/SuperUserGroup/SuperUserGroup.js'


export default class CollectionUser extends React.Component {
  render() {
    return (
      <ScrollView style={{flex:1, backgroundColor:'#282828'}}>

        <SuperUserGroup />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height:'100%'
  },
});
