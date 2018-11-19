import React  from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';

import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'

import SuperIcon from '../../../../../../components/SuperIcon/SuperIcon.js'

const recommendData = [
  {icon:'\ue640', name:'每日推荐', url: 'Recommend'},
  {icon:'\ue646', name:'歌单', url: 'PlayList'},
  {icon:'\ue624', name:'歌手', url: 'Singer'},
  {icon:'\ue62c', name:'排行榜', url: 'Rank'},
];

class RecommendNav extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <View style={{width:'100%', height:68, marginTop:18, marginBottom:28, flexDirection:'row'}}>
        {
          recommendData.map((item, index) => {
            return (
              <TouchableWithoutFeedback onPress={() => {this.props.navigation.navigate(item.url)}}>
                <View key={index} style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                  <View style={{width:44, height:44, marginBottom:5, justifyContent:'center', alignItems:'center', borderRadius:22, backgroundColor:'rgba(0,0,0,0.3)'}}>
                    <SuperIcon type={item.icon} style={{paddingTop:3, fontSize:28, color:this.props.color, backgroundColor:'transparent'}} />
                  </View>
                  <Text style={{color:'#BBB'}}>{ item.name }</Text>
                </View>
              </TouchableWithoutFeedback>
            );
          })
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
});

function reduxState(store) {
  return {
    color: store.config.color,
  }
}

export default connect(reduxState)(withNavigation(RecommendNav));
