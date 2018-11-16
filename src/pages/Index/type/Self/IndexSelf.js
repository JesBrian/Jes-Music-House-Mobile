import React  from 'react';

import {
  StyleSheet,
  ScrollView,
  View
} from 'react-native';

import { connect } from 'react-redux'

import IndexSelfUserInfo from './container/IndexSelfUserInfo.js'
import IndexSelfNavLink from './container/IndexSelfNavLink.js'
import IndexSelfCreatePlayList from './container/IndexSelfCreatePlayList.js'
import IndexSelfCollectionPlayList from './container/IndexSelfCollectionPlayList.js'

class IndexSelf extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <IndexSelfUserInfo />

        <ScrollView style={{flex:1}}>
          <IndexSelfNavLink />
          <IndexSelfCreatePlayList />
          <IndexSelfCollectionPlayList />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingBottom:58,
    backgroundColor:'rgba(0,0,0,0.28)'
  },
});


function reduxState(store) {
  return {
    navigation: store.config.navigation,
    color: store.config.color
  }
}

export default connect(reduxState)(IndexSelf);
