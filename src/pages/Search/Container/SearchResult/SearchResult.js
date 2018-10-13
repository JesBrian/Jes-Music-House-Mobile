import React  from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';


import { withNavigation } from 'react-navigation'

class SearchResult extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      hasSearch: false
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <Text>555</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  }
});


export default withNavigation(SearchResult);
