import React  from 'react';

import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View
} from 'react-native';

import RecommendSlide from './container/RecommendSlide/RecommendSlide.js'
import RecommendNav from './container/RecommendNav/RecommendNav.js'
import RecommendEveryday from './container/RecommendEveryday/RecommendEveryday.js'
import RecommendNews from './container/RecommendNews/RecommendNews.js'
import RecommendRank from './container/RecommendRank/RecommendRank.js'

import { frontendSlide } from '../../../../utils/http/request/index.js'


const playListSize = Dimensions.get('window').width * 0.31 * 0.96

export default class IndexRecommend extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      slideData: []
    }
  }

  componentWillMount () {
    frontendSlide().then( res => {
      this.setState({
        slideData: res.data,
      });
    }).catch( err => {
      alert(err)
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{width:'96%', flex:1}}>

          <RecommendSlide slideData={this.state.slideData} />

          <RecommendNav />

          <RecommendEveryday size={playListSize} />

          <RecommendNews size={playListSize} />

          <RecommendRank />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1, justifyContent:'center', alignItems:'center',
    paddingBottom:53,
    backgroundColor: 'transparent'
  }
});
