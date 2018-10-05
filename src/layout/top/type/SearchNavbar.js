import React  from 'react';

import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback
} from 'react-native';

import { withNavigation } from 'react-navigation'
import Ripple from 'react-native-material-ripple'

import NavbarFrame from '../NavbarFrame.js'
import SuperIcon from '../../../components/SuperIcon.js'

import { common } from '../../../assets/styles/common.js'


class SearchNavbar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      searchKey: '',
    };
  };

  render () {
    return (
      <NavbarFrame navbarContent={(

        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
          <TouchableWithoutFeedback onPress={() => {this.props.navigation.goBack()}}>
            <View style={{width:45, flexDirection:'row', justifyContent:'center'}}>
              <SuperIcon type={'\ue8ca'} style={{fontSize:31, color:'#BBB'}} />
            </View>
          </TouchableWithoutFeedback>

          <View style={{marginLeft:5, marginRight:5, flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center', position:'relative'}}>
            <TextInput ref='searchInput'
                       onChangeText={(text) => {this.setState({searchKey: text})}} value={this.state.searchKey}
                       selectionColor={'#2DC9FF'} underlineColorAndroid='transparent'
                       style={{width:'100%', height:38, padding:6, paddingLeft:8, paddingRight:33, borderRadius:8, backgroundColor:'rgba(255,255,255,0.08)', color:'#2DC9FF', fontSize:18}} />
            {
              this.state.searchKey === '' ? null :
                <Ripple onPress={() => {this.setState({searchKey: ''})}} style={{width:22, height:22, top:8, right:8, position:'absolute', justifyContent:'center', alignItems:'center', borderRadius:11, backgroundColor:'#333', borderWidth:1, borderColor:'#2EBCC6'}}>
                  <SuperIcon type={'\ue629'} style={{color:'#2DC9FF', backgroundColor:'transparent'}} />
                </Ripple>
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

export default withNavigation(SearchNavbar);
