import React  from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import SuperLoading from "../SuperLoading";

import { connect } from 'react-redux'

/**
 * 底部刷新loading组件
 */
class SuperRefreshBottom extends React.Component {
  static defaultProps = {
    label: '内容加载中 ...'
  }

  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <View style={styles.refreshBottom}>
        <SuperLoading size={30} />
        <Text style={[styles.loadingLabel, {color:this.props.color}]}>{ this.props.label }</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  refreshBottom: {flex:1, height:43, flexDirection:'row', justifyContent:'center', alignItems:'center'},
  loadingLabel: {marginLeft:13, fontSize:16}
});

function reduxState(store) {
  return {
    color: store.config.color
  }
}

export default connect(reduxState)(SuperRefreshBottom);
