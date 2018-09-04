import React  from 'react';

import {
  PixelRatio,
  StyleSheet,
  View,
  TouchableWithoutFeedback
} from 'react-native';

import Slider from 'react-native-slider'

export default class SuperSlider extends React.Component {
  static defaultProps = {
    value: 0
  };

  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <TouchableWithoutFeedback onPress={(e) => {this.props.setPropsValue(((e.nativeEvent.locationX / PixelRatio.get() - 6) / 100).toFixed(2))}} >
        <View style={{marginTop:1, flex:1, justifyContent:'center'}}>
          <Slider
            value={Number(this.props.value)}
            maximumTrackTintColor={'#686868'}
            minimumTrackTintColor={'#2DC9FF'}
            thumbStyle={{width:16, height:16, paddingTop:1}}
            thumbTintColor={'#222'}
            thumbImage={require('../assets/images/default/slide-pointer.png')}
            onValueChange={value => this.setState({ value })}
          />
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
});
