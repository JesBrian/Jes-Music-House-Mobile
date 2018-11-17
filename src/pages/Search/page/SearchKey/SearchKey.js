import React  from 'react';

import {
  StyleSheet,
  ScrollView
} from 'react-native';

import { connect } from 'react-redux'

import { withNavigation } from 'react-navigation'

import SearchCategory from './container/SearchCategory/SearchCategory.js'
import SearchHot from './container/SearchHot/SearchHot.js'
import SearchHistory from './container/SearchHistory/SearchHistory.js'


class SearchKey extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <SearchCategory />
        <SearchHot searchContent={this.props.searchContent} />
        <SearchHistory searchContent={this.props.searchContent} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop:8,
    flex:1
  }
});


function reduxState(store) {
  return {
    color: store.config.color
  }
}

export default connect(reduxState)(withNavigation(SearchKey));
