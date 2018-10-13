import React  from 'react';

import {
  StyleSheet,
  ScrollView,
  View
} from 'react-native';

import { connect } from 'react-redux'

import { withNavigation } from 'react-navigation'

import SearchNavbar from '../../layout/top/type/SearchNavbar.js'
import SearchKey from './Container/SearchKey/SearchKey.js'
import SearchResult from './Container/SearchResult/SearchResult.js'

class Search extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      hasSearch: false
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <SearchNavbar searchContent={this.searchContent} />

        <View style={{flex:1, backgroundColor:'rgba(0,0,0,0.73)'}}>

          {
            this.state.hasSearch === true ? <SearchResult /> : <SearchKey />
          }

        </View>
      </View>
    );
  }

  searchContent = (searchKey = '') => {
    if (searchKey === '') {
      return false
    }

    this.setState({
      hasSearch: true
    })
  }
}

const styles = StyleSheet.create({
  container: {
    width:'100%', height:'100%',
    flex:1,
    flexDirection:'column',
    backgroundColor: 'transparent'
  }
});


function reduxState(store) {
  return {
    color: store.config.color
  }
}

export default connect(reduxState)(withNavigation(Search));
