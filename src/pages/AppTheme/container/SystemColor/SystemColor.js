import React  from 'react';

import {
  Dimensions,
  StyleSheet,
  View
} from 'react-native';

import { connect } from 'react-redux'
import { setColor } from '../../../../redux/actions/ConfigActions.js'
import Ripple from 'react-native-material-ripple'

import SuperSectionNavbar from '../../../../components/SuperSectionNavbar/SuperSectionNavbar.js'

const colorSize = Dimensions.get('window').width * 0.93 * 0.17
const themeColorArr = ['#38daf0', '#ce7df0', '#f09c9d', '#4cf0ab', '#2ecfff', '#f07b93', '#779bff', '#0000ff', '#f0ef77', '#f09309'];

class SystemColor extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <View style={{width:'90%', marginVertical:18, alignItems:'center', height:colorSize * 2 + 38}}>
        <SuperSectionNavbar title={'预设主题色'} />
        <View style={{marginTop:8, flex:1, flexDirection:'row', justifyContent:'space-between', flexWrap:'wrap'}}>
          {
            themeColorArr.map((item) => {
              return (
                <Ripple key={item} onPress={this.changeAppColor.bind(this, item)} style={{width:'17%', height:colorSize, marginBottom:9, position:'relative',borderRadius:8, backgroundColor:item}} >
                  <View style={{width:12, height:12, top:3, right:3, position:'absolute', borderRadius:12, backgroundColor:'#333',}} />
                </Ripple>
              )
            })
          }
        </View>
      </View>
    )
  }

  changeAppColor (color) {
    this.props.dispatch(setColor(color))
  };
}

const styles = StyleSheet.create({
});

function reduxState(store) {
  return {
    color: store.config.color
  }
}

export default connect(reduxState)(SystemColor);
