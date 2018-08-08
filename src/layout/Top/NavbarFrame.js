import React from 'react';

import {
  Dimensions,
  Platform,
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
      width:Dimensions.get('window').width, height:Platform.OS === 'ios' ? 75 : 55, color:"#888", border:12, opacity:0.8, x:0, y:1
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
    paddingTop:Platform.OS === 'ios' ? 20 : 0,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#444',
  },
})
