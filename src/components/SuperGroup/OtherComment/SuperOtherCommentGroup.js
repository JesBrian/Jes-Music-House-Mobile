import React  from 'react';

import {
  StyleSheet,
  FlatList,
  View,
  Image,
  Text,
  TouchableWithoutFeedback
} from 'react-native';

import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'

import SuperIcon from '../../SuperIcon/SuperIcon.js'

class SuperPersonalLetterGroup extends React.Component {
  static defaultProps = {
    dataSource: [1, 2, 3, 4, 5, 6, 7, 8]
  }

  constructor (props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
      <FlatList style={{flex:1}}
                data={this.props.dataSource}
                renderItem={({item, index}) => (
                  this._renderItem(item)
                )}
      />
    )
  }

  _renderItem (item) {
    return (
      <TouchableWithoutFeedback onPress={() => {}}>
        <View style={{flexDirection:'row'}}>
          <TouchableWithoutFeedback onPress={() => {this.props.navigation.navigate('User')}}>
            <Image style={{width:28, height:28, marginVertical:8, marginHorizontal:5, borderRadius:14}} source={{uri:'https://avatars3.githubusercontent.com/u/25942696?s=88&v=4'}} />
          </TouchableWithoutFeedback>
          <View style={{flex:1}}>
            <View style={{height:38, top:3, position:'relative', justifyContent:'center'}}>
              <TouchableWithoutFeedback onPress={() => {this.props.navigation.navigate('User')}}>
                <Text style={{color:this.props.color}}>JesBrian</Text>
              </TouchableWithoutFeedback>
              <Text style={{top:0, right:4, padding:6, position:'absolute', fontSize:12, color:'#AAA'}}>2018-09-16</Text>
            </View>
            <View style={{paddingRight:10, paddingBottom:8, borderBottomWidth:0.18, borderColor:'#CCC'}}>
              <Text style={{color:'#DDD'}}>回复我: cbdbchdsbv出版社不成熟超声波还不成熟cnjs32不开花那会计难看324该2看cdnsjc4充满了32</Text>
              <View style={{marginTop:8, marginBottom:6, padding:6, borderRadius:4, borderWidth:0.38, borderColor:'#888', backgroundColor:'#333'}}>
                <Text style={{color:'#AAA'}}>我的评论: 不睡觉见v3gbj才能不到家vgd见3424你上课表4后cbskj回家撒dsdkvjsd被2渝北补代表jhcbxjh</Text>
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

export default connect(reduxState)(withNavigation(SuperPersonalLetterGroup));
