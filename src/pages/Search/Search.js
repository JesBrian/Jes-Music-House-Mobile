import React  from 'react';

import {
  StyleSheet,
  Dimensions,
  View,
  Text
} from 'react-native';

import SearchNavbar from '../../layout/Top/SearchNavbar.js'
import MusicPlayer from '../../layout/Bottom/MusicPlayer.js'


export default class Search extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchNavbar navigation={this.props.navigation} />

        <View style={{height:Dimensions.get('window').height - 128}}>
          <Text onPress={()=>{this.openControlPanel()}} >搜索</Text>
        </View>

        <MusicPlayer navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
    backgroundColor: 'transparent'
  }
});
