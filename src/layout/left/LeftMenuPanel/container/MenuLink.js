import React from 'react';

import {
  FlatList,
  Text,
  StyleSheet
} from 'react-native';

import { connect } from 'react-redux'

import Ripple from 'react-native-material-ripple'
import { withNavigation } from 'react-navigation'

import SuperIcon from '../../../../components/SuperIcon/SuperIcon.js'


const menuData = [
  {icon:'\ue638', name:'我的消息', url:'Message'},
  {icon:'\ue671', name:'我的收藏', url:'Collection'},
  {icon:'\ueaec', name:'个性彩色', url:'AppTheme'}
];

class MenuLink extends React.Component {
  render() {
    return (
      <FlatList
        extraData={this.props.color} style={styles.menuLink}
        data={menuData} renderItem={({item}) => this._renderMenuCell(item)}
      />
    )
  }

  _renderMenuCell (item) {
    return (
      <Ripple onPress={() => {this.props.navigation.navigate(item.url)}} style={styles.menuCell}>
        <SuperIcon type={item.icon} style={[styles.menuIcon, {color:this.props.color}]} />
        <Text style={styles.menuLabel}>{ item.name }</Text>
      </Ripple>
    );
  }
}

const styles = StyleSheet.create({
  menuLink: {marginVertical:8},
  menuCell: {width:'100%', height:38, flexDirection:'row', alignItems:'center'},
  menuIcon: {margin:12, fontSize:20},
  menuLabel: {color:'#BBB', fontSize:16}
});

function reduxState(store) {
  return {
    color: store.config.color
  }
}

export default connect(reduxState)(withNavigation(MenuLink));
