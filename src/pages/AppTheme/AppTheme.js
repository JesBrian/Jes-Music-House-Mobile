import React  from 'react';

import {
  StyleSheet,
  ScrollView,
  View
} from 'react-native';

import NormalNavbar from '../../layout/top/TopNavbar/type/NormalNavbar.js'

import SystemColor from './container/SystemColor/SystemColor.js'
import ChooseColor from './container/ChooseColor/ChooseColor.js'
import ChooseTheme from "./container/ChooseTheme/ChooseTheme";

export default class AppTheme extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NormalNavbar label={'个性换肤'} />

        <ScrollView style={{flex:1, backgroundColor:'rgba(0,0,0,0.73)'}}>
          <View style={{flex:1, alignItems:'center'}}>

            <SystemColor />

            <ChooseColor />

            <ChooseTheme />

          </View>
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    flex:1,
    backgroundColor: 'transparent'
  },
});
