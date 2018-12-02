import React  from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

import SuperSectionNavbar from '../../../../../../components/SuperSectionNavbar/SuperSectionNavbar.js'
import SuperSongGroup from '../../../../../../components/SuperGroup/Song/SuperSongGroup.js'

export default class RecommendRank extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <View>
        <SuperSectionNavbar title={'歌曲排行榜'} />

        <SuperSongGroup />
      </View>
    )
  }
}

const styles = StyleSheet.create({
});
