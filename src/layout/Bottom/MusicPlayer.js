import React  from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

import {common} from '../../assets/styles/common.js'


export default class MusicPlayer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }


  closeControlPanel = () => {
    this.props.closeControlPanel();
  };

  render () {
    return (
      <View style={{width:'100%', height:53, position:'relative', flexDirection:'row', backgroundColor:'#333'}}>
        <View style={{width:53, flexDirection:'row', alignItems:'center', justifyContent:'center' }}>
          <Image style={{width:'76%', height:'76%', marginLeft:2, borderWidth:1, borderRadius:4, borderColor:'#666'}} source={{uri:'http://www.chuanke.com/upload/courseware/f/31/3312428/image/09c68fe797fa58d78a1de4f34e0ea40f.gif'}} />
        </View>
        <View style={{flex:1, flexDirection:'column', alignItems:'center', justifyContent:'flex-start'}}>
          <Text style={{color:'#CCC'}}>The Name of the Song</Text>
          <Text style={{color:'#AAA'}}>JesBrian</Text>
        </View>
        <View style={{width:80, flexDirection:'row', justifyContent:'center'}}>
          <View style={{height:'100%', paddingLeft:4, paddingRight:3}}>
            <Text style={[common.icon,  {marginTop:2, lineHeight:50, fontSize:28, color:'#CCC'}]}>&#xe654;</Text>
          </View>
          <View style={{height:'100%', paddingLeft:3, paddingRight:4}}>
            <Text style={[common.icon, {marginTop:2, lineHeight:50, fontSize:28, color:'#CCC'}]}>&#xe654;</Text>
          </View>
        </View>


        {/*<View style={{width:'100%', height:238, left:0, top:0, position:'absolute', backgroundColor:'lightgreen'}}>*/}
          {/*<Text>888</Text>*/}
        {/*</View>*/}
      </View>
    )
  }

}

const styles = StyleSheet.create({
})
