import React  from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

import NormalNavbar from '../../layout/top/TopNavbar/type/NormalNavbar.js'
import SuperSingerDetailTab from './SuperSingerDetailTab.js'


export default class User extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      top: 75
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <NormalNavbar navigation={this.props.navigation} />

        <View style={{width:'100%', height:208, top:this.state.top, position:'absolute', zIndex:-1, backgroundColor:'lightgreen'}}>
        </View>

        <View style={{marginTop:208, flex:1}}>
          <SuperSingerDetailTab scrollEvent={this.changePosterContainerHeight} />
        </View>
      </View>
    );
  }

  changePosterContainerHeight (top = 0) {
    // this.setState({
    //   top: 75 - top
    // });
    console.log(top);
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingBottom:53,
    backgroundColor:'transparent'
  },
});
