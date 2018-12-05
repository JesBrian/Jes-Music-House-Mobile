import React  from 'react';

import {
  StyleSheet
} from 'react-native';

import SuperPersonalLetterGroup from '../../../components/SuperGroup/OtherComment/SuperOtherCommentGroup.js'


export default class MessageNotice extends React.Component {
  render() {
    return (
      <SuperPersonalLetterGroup />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
});
