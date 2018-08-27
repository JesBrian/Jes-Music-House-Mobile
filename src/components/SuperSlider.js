import React  from 'react';

import {
  StyleSheet
} from 'react-native';

import Slider from 'react-native-slider'

export default class Loading extends React.Component {
  static defaultProps = {
  };

  constructor (props) {
    super(props);
    this.state = {
      value: 0.3
    };
  }

  render () {
    return (
      <Slider
        value={this.state.value}
        maximumTrackTintColor={'#686868'}
        minimumTrackTintColor={'#38daf0'}
        thumbStyle={{width:16, height:16, paddingTop:1}}
        thumbTintColor={'#222'}
        thumbImage={require('../assets/images/default/slide-pointer.png')}
        onValueChange={value => this.setState({ value })}
      />
    )
  }
}

const styles = StyleSheet.create({
});
