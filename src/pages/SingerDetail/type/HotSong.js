import React  from 'react';

import {
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native';

import SuperSongGroup from '../../../components/SuperSongGroup/SuperSongGroup.js'


export default class UserInfo extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      y1: 0,
      y2: 0
    }
  }

  render() {
    return (
      <ScrollView style={styles.container} scrollEventThrottle={200}
                  onScrollBeginDrag={(e) => {this.setStateValue('y1', e.nativeEvent.contentOffset.y)}}
                  onScroll={(e) => {this.setStateValue('y2', e.nativeEvent.contentOffset.y)}}
                  onMomentumScrollEnd={(e) => {this.setStateValue('y2', e.nativeEvent.contentOffset.y)}} >

        <SuperSongGroup />
      </ScrollView>
    );
  }

  setStateValue (key, value) {
    this.setState({
      key: value
    });

    if (key === 'y2') {
      this.props.scrollEvent(value - this.state.y1);
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
});
