import React from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import { BoxShadow } from 'react-native-shadow'

import SuperLoading from '../../../../components/SuperLoading.js'

/**
 * 加载等待模态框
 */
export default class LoadingModal extends React.Component {
  static defaultProps = {
    label: 'Loading ...'
  }

  constructor (props) {
    super(props);
    this.state = {};
  }

  render() {
    const shadowOpt = {
      width:178, height:168, color:"#000", border:6, radius:5, opacity:0.38
    }

    return (
      <View style={styles.loadingModal}>
        <BoxShadow setting={shadowOpt} >
          <View style={styles.loadingContainer}>
            <SuperLoading />
            <Text style={styles.loadingLabel}>{ this.props.label }</Text>
          </View>
        </BoxShadow>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  loadingModal: {flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'rgba(0, 0, 0, 0.58)'},
  loadingContainer: {width:178, height:168, justifyContent:'center', alignItems:'center', borderRadius:5, backgroundColor:'rgba(0, 0, 0, 0.58)'},
  loadingLabel: {marginTop:6, color:'#DDD', fontSize:18}
});
