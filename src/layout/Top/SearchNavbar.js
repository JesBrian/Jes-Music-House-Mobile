import React  from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback
} from 'react-native';


import { common } from '../../assets/styles/common.js'

export default class SearchNavbar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      searchKey: '',
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
          <TextInput style={{flex:1}} onChangeText={(text) => { this.setState({searchKey: text})}} value={this.state.searchKey} />
        </View>

        <TouchableWithoutFeedback>
          <View style={{width:50, flexDirection:'row', justifyContent:'center'}}>
            <Text style={[common.icon, {fontSize:31}]}>&#xe65a;</Text>
          </View>
        </TouchableWithoutFeedback>
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
  }
})
