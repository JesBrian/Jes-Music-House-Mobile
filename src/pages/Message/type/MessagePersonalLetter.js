import React  from 'react';

import {
  StyleSheet
} from 'react-native';

import SuperPersonalLetterGroup from '../../../components/SuperGroup/PersonalLetter/SuperPersonalLetterGroup.js'


export default class MessagePersonalLetter extends React.Component {
  render() {
    return (
      <SuperPersonalLetterGroup />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height:'100%'
  },
});
