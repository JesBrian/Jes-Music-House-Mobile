import React  from 'react';

import {
  View,
  FlatList,
  StyleSheet
} from 'react-native';

import { connect } from 'react-redux'

import MenuNavbar from './container/MenuNavbar.js'
import MenuCell from './container/MenuCell.js'
import MenuBottom from './container/MenuBottom.js'


class MenuPanel extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render () {
    const menuData = [
      {icon:'\ue638', name:'我的消息', url:'Message'},
      {icon:'\ue671', name:'我的收藏', url:'Collection'},
      {icon:'\ueaec', name:'个性彩色', url:'AppTheme'}
    ];

    return (
      <View style={[styles.menuPanel, {backgroundColor:this.props.config.theme === 'light' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.73)'}]}>
        <MenuNavbar />

        <FlatList
          style={{marginVertical:8}}
          data={menuData}
          renderItem={({item}) => <MenuCell itemData={item} />}
        />

        <MenuBottom />
      </View>
    )
  }

  closeControlPanel = () => {
    this.props.closeControlPanel();
  };
}

const styles = StyleSheet.create({
  menuPanel: {height:'100%', paddingBottom:53, flex:1}
})

function reduxState(store) {
  return {
    config: store.config
  }
}

export default connect(reduxState)(MenuPanel);
