import React  from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import Ripple from 'react-native-material-ripple'

import SuperIcon from '../../../../../../components/SuperIcon/SuperIcon.js'


class SearchHot extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      hotKey: [
        'JesBrian', 'hb343sc', '452', 'jtgds', '超低速车', 'h3g歌手xas2额u', '动画', 'dnjkwnd', '外滩一号', '充分体验'
      ]
    };
  }

  render () {
    return (
      <View>
        <View style={{height:28, flexDirection:'row', alignItems:'center', backgroundColor:'rgba(255,255,255,0.12)'}}>
          <View style={{flex:1, flexDirection:'row', alignItems:'center'}}>
            <SuperIcon type={'\ue8cb'} style={{margin:8, color:this.props.color}}/>
            <Text style={{color:'#BBB'}}>热门搜索</Text>
          </View>
        </View>

        <View style={{margin:8, flexDirection:'row', flexWrap:'wrap'}}>
          {
            this.state.hotKey.map((item, index) => {
              return (
                <Ripple onPress={() => {this.props.searchContent(item)}} key={index} style={{height:24, margin:4, paddingLeft:9, paddingRight:9, justifyContent:'center', alignItems:'center', borderRadius:12, borderWidth:1, borderColor:'#AAA', backgroundColor:'rgba(0,0,0,0.18)'}}>
                  <Text style={{color:'#AAA'}}>{ item }</Text>
                </Ripple>
              )
            })
          }
        </View>
      </View>
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

export default connect(reduxState)(withNavigation(SearchHot));
