import React  from 'react';

import {
  StyleSheet,
  Text
} from 'react-native';

import { common } from '../assets/styles/common.js'

export default class SuperIcon extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }


  render () {
    return <Text style={[common.icon, this.props.style]}>{this.props.type}</Text>
  }
}

const styles = StyleSheet.create({
});
