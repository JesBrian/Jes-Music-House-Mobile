import React  from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import Ripple from 'react-native-material-ripple'
import { withNavigation } from 'react-navigation'

import SuperSectionNavbar from '../../../../../components/SuperSectionNavbar/SuperSectionNavbar.js'

class IndexRecommendRank extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <View>
        <SuperSectionNavbar title={'歌曲排行榜'} />
        <View style={{marginVertical:8}}>
          <Ripple onPress={() => {this.props.navigation.navigate('Song')}} style={{height:58, flexDirection:'row', backgroundColor:'lightgreen'}}>
            <Text>8</Text>
          </Ripple>
          <Ripple onPress={() => {this.props.navigation.navigate('Song')}} style={{height:58, flexDirection:'row', backgroundColor:'lightblue'}}>
            <Text>8</Text>
          </Ripple>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
});

export default withNavigation(IndexRecommendRank);
