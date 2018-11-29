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
      y: 0
    }
  }

  render() {
    return (
      <ScrollView style={styles.container} scrollEventThrottle={2000}
                  onScroll={(e) => {this.setStateValue(e.nativeEvent.contentOffset.y)}}
                  onMomentumScrollEnd={(e) => {this.setStateValue(e.nativeEvent.contentOffset.y)}} >

        <SuperSongGroup />
      </ScrollView>
    );
  }

  setStateValue (value) {
    this.setState({
      y: value
    });

    let tempValue = value;
    console.log(tempValue)
    if (tempValue <= 208) {
      this.props.scrollEvent(tempValue);
    } else {
      this.props.scrollEvent(208);
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
});
