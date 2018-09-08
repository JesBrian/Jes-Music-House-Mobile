import React  from 'react';

import {
  StyleSheet,
  ScrollView,
  Button,
  View,
  Text
} from 'react-native';

import { connect } from 'react-redux'

import Ripple from 'react-native-material-ripple'

import SuperButton from '../../../../components/SuperButton.js'
import SuperIcon from '../../../../components/SuperIcon.js'

import { goRouter } from '../../../../utils/router/router.js'


class IndexFriend extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Index Friend</Text>

        <View style={{width:50, height:50, right:18, bottom:76, position:'absolute',justifyContent:'center', alignItems:'center', zIndex:5}}>
          <SuperButton onPress={() => {goRouter(this.props.config.navigation, 'WriteTrend')}} width={43} height={43} label={<SuperIcon type={'\ue638'} style={{fontSize:28}} />} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
});


function reduxState(store) {
  return {
    config: store.config
  }
}

export default connect(reduxState)(IndexFriend);
