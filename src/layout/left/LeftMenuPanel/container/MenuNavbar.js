import React from 'react';

import {
  Dimensions,
  View,
  Image,
  Text,
  StyleSheet
} from 'react-native';

import { BoxShadow }  from 'react-native-shadow'
import { withNavigation } from 'react-navigation'

import { connect } from 'react-redux'

import SuperButton from '../../../../components/SuperButton.js'

/**
 * 菜单面板顶部
 */
class MenuNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const shadowOpt = {
      width:Dimensions.get('window').width * 0.82, height:118, color:"#000", border:8, opacity:0.8, x:-6, y:1,
    };

    return (
      <BoxShadow setting={shadowOpt}>
        <View style={{paddingTop:20, flex:1, flexDirection:'row', backgroundColor:this.props.theme === 'light' ? '#F8F8F8' : '#282828'}}>
          <View style={{width:88, height:'100%', justifyContent:'center', alignItems:'center'}}>
            <Image style={{width:48, height:48, borderWidth:1, borderRadius:4, borderColor:'#666'}} source={{uri:'https://avatars3.githubusercontent.com/u/25942696?s=88&v=4'}} />
          </View>
          <View style={{flex:1}}>
            <Text style={{marginTop:21, backgroundColor:'transparent', fontSize:15, color:'#FFF'}}>JesBrian</Text>
            <SuperButton onPress={() => {}} width={65} height={30} label={'已签到'} />
          </View>
        </View>
      </BoxShadow>
    )
  }
}

const styles = StyleSheet.create({
});

function reduxState(store) {
  return {
    theme: store.config.theme
  }
}

export default connect(reduxState)(withNavigation(MenuNavbar));
