import React  from 'react';

import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View
} from 'react-native';

import { withNavigation } from 'react-navigation'

import IndexRecommendSlide from './container/IndexRecommendSlide.js'
import IndexRecommendNav from './container/IndexRecommendNav.js'
import IndexRecommendRecommend from './container/IndexRecommendRecommend.js'
import IndexRecommendNews from './container/IndexRecommendNews.js'
import IndexRecommendRank from './container/IndexRecommendRank.js'

import { frontendSlide } from '../../../../utils/http/request/index.js'


const playListSize = Dimensions.get('window').width * 0.31 * 0.96

class IndexRecommend extends React.Component {
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

          <IndexRecommendSlide slideData={this.state.slideData} />

          {/*<Text onPress={() => {this.props.navigation.navigate('TestPage')}}>测试页面</Text>*/}

          <IndexRecommendNav />

          <IndexRecommendRecommend size={playListSize} />

          <IndexRecommendNews size={playListSize} />

          <IndexRecommendRank />
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

export default withNavigation(IndexRecommend);
