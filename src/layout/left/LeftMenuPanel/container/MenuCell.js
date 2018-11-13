import React from 'react';

import {
  Text,
  StyleSheet
} from 'react-native';

import Ripple from 'react-native-material-ripple'
import { withNavigation } from 'react-navigation'

import { connect } from 'react-redux'

import SuperIcon from '../../../../components/SuperIcon.js'


class MenuCell extends React.Component {
  static defaultProps = {
    itemData: null
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Ripple onPress={() => {this.props.navigation.navigate(this.props.itemData.url)}} style={styles.menuCell}>
        <SuperIcon type={this.props.itemData.icon} style={[styles.menuIcon, {color:this.props.color}]} />
        <Text style={styles.menuLabel}>{ this.props.itemData.name }</Text>
      </Ripple>
    )
  }
}

const styles = StyleSheet.create({
  menuCell: {width:'100%', height:38, flexDirection:'row', alignItems:'center'},
  menuIcon: {margin:12, fontSize:20},
  menuLabel: {color:'#BBB', fontSize:16}
});

function reduxState(store) {
  return {
    color: store.config.color
  }
}

export default connect(reduxState)(withNavigation(MenuCell));
