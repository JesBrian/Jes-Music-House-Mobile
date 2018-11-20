import React  from 'react'

import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text
} from 'react-native'

import { connect } from 'react-redux'

import Ripple from 'react-native-material-ripple'
import { withNavigation } from 'react-navigation'

class CollectionUser extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>

        <View>
          <Text>关注的用户</Text>
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingBottom:3,
    backgroundColor:'rgba(0,0,0,0.28)',
  },
});


function reduxState(store) {
  return {
    color: store.config.color
  }
}

export default connect(reduxState)(withNavigation(CollectionUser));
