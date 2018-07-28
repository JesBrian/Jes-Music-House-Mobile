import React from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import {common} from '../../assets/styles/common.js'
import SuperButton from "../../components/SuperButton";

export default class IndexTopNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  buttonClickEvent = () => {
    this.props.navigation.navigate('Search');
  };

  render() {
    return (
      <View style={styles.container}>
        <SuperButton style={{}} label={<Text style={[common.icon]}>&#xe654;</Text>} />
        <View style={{flex:1}}>
        </View>
        <SuperButton onPressEvent={this.buttonClickEvent} label={<Text style={[common.icon]}>&#xe65a;</Text>} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 55,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'lightgreen'
  }
})
