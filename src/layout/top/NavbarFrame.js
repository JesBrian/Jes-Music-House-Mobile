import React from 'react';

import {
  Dimensions,
  StyleSheet,
  View
} from 'react-native';

import { BoxShadow }  from 'react-native-shadow'

export default class NavbarFrame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const shadowOpt = {
      width:Dimensions.get('window').width, height:75, color:"#383838", border:12, opacity:0.8, x:0, y:1
    };

    return (
      <BoxShadow setting={shadowOpt}>
        <View style={styles.container}>
          { this.props.navbarContent }
        </View>
      </BoxShadow>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height:'100%',
    paddingTop:20,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#282828',
    zIndex:5
  },
})
