import React  from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import { connect } from 'react-redux'


import NormalNavbar from '../../layout/top/type/NormalNavbar.js'
import SuperButton from '../../components/SuperButton.js'


class WriteTrend extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NormalNavbar navigation={this.props.navigation} label={'发布动态'} right={<View style={{marginTop:3, marginRight:18}}>
          <SuperButton onPress={() => {}} width={68} height={31} label={'发送'} />
        </View>} />

        <View style={{flex:1, backgroundColor:'rgba(0,0,0,0.73)'}}>
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

export default connect(reduxState)(WriteTrend);
