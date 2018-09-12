import React  from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback
} from 'react-native';

import NavbarFrame from '../NavbarFrame.js'

import SuperIcon from '../../../components/SuperIcon.js'

import { common } from '../../../assets/styles/common.js'


export default class SearchNavbar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      searchKey: '',
    };
  }

  render () {
    return (
      <NavbarFrame navbarContent={(

        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
          <TouchableWithoutFeedback onPress={() => {this.props.navigation.goBack()}}>
            <View style={{width:45, flexDirection:'row', justifyContent:'center'}}>
              <SuperIcon type={'\ue8ca'} style={{fontSize:31, color:'#BBB'}} />
            </View>
          </TouchableWithoutFeedback>

          <View style={{marginLeft:8, marginRight:8, flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center', position:'relative', borderBottomWidth:1, borderBottomColor:'#888'}}>
            <TextInput onChangeText={(text) => {this.setState({searchKey: text})}} value={this.state.searchKey}
                       selectionColor={'#2DC9FF'} underlineColorAndroid='transparent'
                       style={{width:'100%', height:38, padding:6, paddingLeft:8, paddingRight:28, borderRadius:6, backgroundColor:'#282828', color:'#2DC9FF', fontSize:18}} />
            {
              this.state.searchKey === '' ? null :
                <TouchableWithoutFeedback onPress={() => {this.setState({searchKey: ''})}}>
                  <View style={{width:22, height:22, top:8, right:8, position:'absolute', borderRadius:11, backgroundColor:'#686868', borderWidth:1, borderColor:'#2EBCC6'}}>
                  </View>
                </TouchableWithoutFeedback>
            }
          </View>

          <TouchableWithoutFeedback>
            <View style={{width:50, flexDirection:'row', justifyContent:'center'}}>
              <SuperIcon type={'\ue65a'} style={{fontSize:31, color:'#BBB'}} />
            </View>
          </TouchableWithoutFeedback>
        </View>

      )} />
    )
  }
}
