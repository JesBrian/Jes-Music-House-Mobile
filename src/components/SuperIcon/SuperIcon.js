import React  from 'react';

import {
  StyleSheet,
  Text
} from 'react-native';

/**
 * 图标组件
 */
export default class SuperIcon extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }


  render () {
    return <Text style={[styles.icon, this.props.style]}>{this.props.type}</Text>
  }
}

const styles = StyleSheet.create({
  icon: {fontFamily: 'iconfont'}
});
