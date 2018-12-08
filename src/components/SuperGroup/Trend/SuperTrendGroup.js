import React  from 'react';

import {
  StyleSheet,
  FlatList,
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'

import Ripple from 'react-native-material-ripple'

import SuperIcon from '../../SuperIcon/SuperIcon.js'

class SuperTrendGroup extends React.Component {
  static defaultProps = {
    dataSource: []
  }

  constructor (props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
      <FlatList style={{marginTop:6, marginBottom:58, flex:1}}
                data={this.props.dataSource}
                renderItem={this._renderItem.bind(this)}
      />
    )
  }

  _renderItem (item) {
    return (
      <TouchableWithoutFeedback onPress={() => {alert(6)}} >
        <View style={{flexDirection:'row', borderBottomWidth:0.3, borderColor:'#FFF'}}>
          <TouchableOpacity onPress={() => {alert(8)}} style={{width:30, height:30, margin:8}}>
            <Image style={{flex:1, borderRadius:16}} source={{uri:'https://avatars3.githubusercontent.com/u/25942696?s=88&v=4'}} />
          </TouchableOpacity>
          <View style={{flex:1}}>
            <View style={{width:'100%', height:46, flexDirection:'row', alignItems:'center'}}>
              <View style={{flex:1, justifyContent:'center'}}>
                <Text style={{fontSize:13.5, color:'#CCC'}}>JesBrian：</Text>
                <Text style={{fontSize:11, color:'#888'}}>2018-09-26</Text>
              </View>
              <Ripple onPress={() => {alert('关注成功')}} style={{width:64, height:23, marginRight:8, paddingBottom:1, flexDirection:'row', justifyContent:'center', alignItems:'center', borderRadius:14, backgroundColor:this.props.color}}>
                <SuperIcon type={'\ue80d'} style={{marginTop:1, marginRight:3, fontSize:16, color:'#FFF'}} />
                <Text style={{fontWeight:'700', color:'#FFF'}}>关注</Text>
              </Ripple>
            </View>
            <View>
              <Text style={{fontSize:13.5, color:'#CCC'}}>鬼知道会写什么东西{ item.key }</Text>
            </View>
            <View style={{paddingTop:12, paddingBottom:12, flexDirection:'row', alignItems:'center'}}>
              <TouchableOpacity onPress={() => {alert(88)}} style={{width:68, flexDirection:'row'}}>
                <SuperIcon type={'\ue80d'} style={{marginRight:3, color:'#CCC'}} />
                <Text style={{fontSize:12.5, color:'#888'}}>27</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {alert(88)}} style={{width:68, flexDirection:'row'}}>
                <SuperIcon type={'\ue638'} style={{marginRight:3, color:'#CCC'}} />
                <Text style={{fontSize:12.5, color:'#888'}}>27</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {alert(88)}}>
                <SuperIcon type={'\ue615'} style={{color:'#CCC'}} />
              </TouchableOpacity>

              <View style={{marginRight:6, flex:1, alignItems:'flex-end'}}>
                <TouchableOpacity onPress={() => {alert('test')}}>
                  <SuperIcon type={'\ue653'} style={{marginLeft:3, marginRight:3, color:'#CCC'}} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
});

function reduxState(store) {
  return {
    color: store.config.color
  }
}

export default connect(reduxState)(withNavigation(SuperTrendGroup));
