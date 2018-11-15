import React  from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import { connect } from 'react-redux'

import SuperIcon from '../SuperIcon/SuperIcon.js'

/**
 * 图标组件
 */
class SuperSectionNavbar extends React.Component {
  static defaultProps = {
    icon: '\ue604',
    title: ''
  }

  constructor (props) {
    super(props);
    this.state = {
    };
  }


  render () {
    return (
      <View style={sectionNavbar.container}>
        <SuperIcon type={this.props.icon} style={[sectionNavbar.icon, {color:this.props.color}]} />
        <Text style={sectionNavbar.title}>{this.props.title}</Text>
      </View>
    )
  }
}

const sectionNavbar = StyleSheet.create({
  container: {width:'100%', flexDirection:'row', justifyContent:'flex-start', alignItems:'center'},
  icon: {marginRight:10, fontSize:17},
  title: {fontSize:17, color:'#DDD'}
});


function reduxState(store) {
  return {
    color: store.config.color
  }
}

export default connect(reduxState)(SuperSectionNavbar);
