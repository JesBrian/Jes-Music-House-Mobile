import React  from 'react';

import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text
} from 'react-native';

import { connect } from 'react-redux'
import { showBottomMenu } from '../../../redux/actions/ViewActions.js'
import { withNavigation } from 'react-navigation'

import Ripple from 'react-native-material-ripple'
import { LargeList } from 'react-native-largelist-v2'

import SuperIcon from '../../SuperIcon/SuperIcon.js'

class SuperPlayListGroup extends React.Component {
  static defaultProps = {
    ownLikeMusic: 0,
    moreType: '',
    dataSource: []
  }

  constructor (props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
      <ScrollView style={{flex:1}}>
        {
          this.props.ownLikeMusic === 0 ? null : (
            <View style={{height:53, flexDirection:'row'}}>
              <Ripple onPress={() => {this.props.navigation.navigate('PlayListDetail')}} style={{flex:1, flexDirection:'row', alignItems:'center'}}>
                <Image style={{width:42.5, height:42.5, marginLeft:6, marginRight:8, borderRadius:3}} source={{uri:'https://avatars3.githubusercontent.com/u/25942696?s=88&v=4'}} />
                <View style={{height:'100%', flex:1, justifyContent:'center', borderBottomWidth:0.18, borderColor:'#888'}}>
                  <Text style={{marginTop:5, marginBottom:3, fontSize:16, color:'#EEE'}}>我喜欢的音乐</Text>
                  <Text style={{fontSize:13, color:'#AAA'}}>888 首</Text>
                </View>
              </Ripple>
              {
                this.props.moreType === '' ? null : (
                  <Ripple onPress={this.showBottomMenu.bind(this, 'SelfPageLike')} style={{width:36, height:'100%', justifyContent:'center', alignItems:'center'}}>
                    <SuperIcon type={'\ue653'} style={{fontSize:26, color:'#999'}} />
                  </Ripple>
                )
              }
            </View>
          )
        }
        <LargeList style={[{flex:1}, this.props.style]}
                   data={[{items: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]}]}
                   heightForIndexPath={() => 53}
                   renderIndexPath={this._renderIndexPath}
        />
      </ScrollView>
    )
  }

  _renderIndexPath = () => {
    return (
      <View style={{height:53, flexDirection:'row'}}>
        <Ripple onPress={() => {this.props.navigation.navigate('PlayListDetail')}} style={{flex:1, flexDirection:'row', alignItems:'center'}}>
          <Image style={{width:42.5, height:42.5, marginLeft:6, marginRight:8, borderRadius:3}} source={{uri:'https://avatars3.githubusercontent.com/u/25942696?s=88&v=4'}} />
          <View style={{height:'100%', flex:1, justifyContent:'center', borderBottomWidth:0.18, borderColor:'#888'}}>
            <Text style={{marginTop:5, marginBottom:3, fontSize:16, color:'#EEE'}}>收藏的专辑</Text>
            <Text style={{fontSize:13, color:'#AAA'}}>180 首</Text>
          </View>
        </Ripple>
        {
          this.props.moreType === '' ? null : (
            <Ripple onPress={this.showBottomMenu.bind(this, this.props.moreType)} style={{width:36, height:'100%', justifyContent:'center', alignItems:'center'}}>
              <SuperIcon type={'\ue653'} style={{fontSize:26, color:'#999'}} />
            </Ripple>
          )
        }
      </View>
    );
  }

  showBottomMenu (type) {
    this.props.dispatch(showBottomMenu(type))
  };
}

const styles = StyleSheet.create({
});

function reduxState(store) {
  return {
  }
}

export default withNavigation(connect(reduxState)(SuperPlayListGroup));