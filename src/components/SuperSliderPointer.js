import React  from 'react';

import {
  PixelRatio,
  StyleSheet,
  View,
  TouchableWithoutFeedback
} from 'react-native';

import { connect } from 'react-redux'

import Slider from 'react-native-slider'

/**
 * 滑块组件
 */
class SuperSliderPointer extends React.Component {
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
        <View style={styles.slider}>
          <Slider
            value={Number(this.props.value)}
            maximumTrackTintColor={'#686868'}
            minimumTrackTintColor={this.props.color}
            thumbStyle={{width:14, height:14, backgroundColor:this.props.color, borderColor:'#282828', borderWidth:5, borderRadius:10, shadowColor:'#000', shadowOffset:{width:0, height:2}, shadowRadius:2, shadowOpacity:0.38}}
            thumbTintColor={'transparent'}
            onValueChange={value => this.setState({ value })}
          />
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  slider: {
    flex:1, justifyContent:'center'
  }
});

function reduxState(store) {
  return {
    color: store.config.color,
  }
}

export default connect(reduxState)(SuperSliderPointer);
