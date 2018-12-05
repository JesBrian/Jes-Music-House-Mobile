import React  from 'react';

import {
  StyleSheet
} from 'react-native';

import SuperNoticeGroup from '../../../components/SuperGroup/Notice/SuperNoticeGroup.js'


export default class MessageNotice extends React.Component {
  render() {
    return (
      <SuperNoticeGroup />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
});
