import React  from 'react';

import {
  StyleSheet,
  Dimensions,
  View,
  Text
} from 'react-native';

import SearchNavbar from '../../layout/top/type/SearchNavbar.js'
import MusicPlayer from '../../layout/bottom/MusicPlayer.js'


export default class Search extends React.Component {
  render() {

    return (
      <View style={styles.container}>
        <SearchNavbar navigation={this.props.navigation} />

        <View style={{flex:1, backgroundColor:'rgba(0,0,0,0.73)'}}>
          <Text onPress={()=>{this.openControlPanel()}} >搜索</Text>
          <Text>555</Text>
        </View>
      </View>
    );
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
