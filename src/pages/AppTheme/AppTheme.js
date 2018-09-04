import React  from 'react';

import {
  Dimensions,
  StyleSheet,
  View,
  Text
} from 'react-native';

import { connect } from 'react-redux'


import Ripple from 'react-native-material-ripple'

import NormalNavbar from '../../layout/top/type/NormalNavbar.js'
import SuperButton from '../../components/SuperButton.js'
import SuperSlider from '../../components/SuperSlider.js'


class AppTheme extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      colorSize: Dimensions.get('window').width * 0.93 * 0.17
    };
  }

  render() {
    const themeColorArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
      <View style={styles.container}>
        <NormalNavbar label={'个性换肤'} />

        <View style={{flex:1, alignItems:'center', backgroundColor:'rgba(0,0,0,0.73)'}}>
          <View style={{width:'90%', marginTop:28, flexDirection:'row', justifyContent:'space-around', flexWrap:'wrap'}}>
            {
              themeColorArr.map((item, index) => {
                return (
                  <Ripple key={index} style={{width:'17%', height:this.state.colorSize, marginBottom:9, position:'relative',borderRadius:8, backgroundColor:'lightgreen'}} >
                    <View style={{width:12, height:12, top:3, right:3, position:'absolute', borderRadius:12, backgroundColor:'#333',}} />
                  </Ripple>
                )
              })
            }
          </View>

          <View style={{width:'90%', marginTop:38}}>
            <Text>调色盘</Text>
            <View style={{height:58, marginTop:8, flexDirection:'row'}}>
              <View style={{width:58, height:58, marginRight:15, marginBottom:9, position:'relative',borderRadius:8, backgroundColor:'lightgreen'}} />
              <View style={{flex:1, justifyContent:'center'}}>
                <SuperSlider />
                <SuperSlider />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'transparent'
  },
});


function reduxState(store) {
  return {
    config: store.config
  }
}

export default connect(reduxState)(AppTheme);
