import React  from 'react';

import {
  StyleSheet,
  ScrollView,
  View
} from 'react-native';

import UserInfo from './container/UserInfo/UserInfo.js'
import NavLink from './container/NavLink/NavLink.js'
import CreatePlayList from './container/CreatePlayList/CreatePlayList.js'
import CollectionPlayList from './container/CollectionPlayList/CollectionPlayList.js'

export default class IndexSelf extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <UserInfo />

        <ScrollView style={{flex:1}}>
          <NavLink />
          <CreatePlayList />
          <CollectionPlayList />
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
