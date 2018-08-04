import React  from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';
import {common} from "../../assets/styles/common";

export default class NormalNavbar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => {this.props.navigation.goBack()}}>
          <View style={{width:50, flexDirection:'row', justifyContent:'center'}}>
            <Text style={[common.icon, {fontSize:31}]}>&#xe8ca;</Text>
          </View>
        </TouchableWithoutFeedback>

        <View style={{flex:1}}>
          <Text style={{fontSize:22}}>{ this.props.label }</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height:55,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgreen',
  },
})
