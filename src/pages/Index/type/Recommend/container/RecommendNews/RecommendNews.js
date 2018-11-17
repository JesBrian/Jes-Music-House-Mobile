import React  from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';

import { withNavigation } from 'react-navigation'

import SuperSectionNavbar from '../../../../../../components/SuperSectionNavbar/SuperSectionNavbar.js'

class RecommendNews extends React.Component {
  static defaultProps = {
    size: 0
  }

  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <View>
        <SuperSectionNavbar title={'最新音乐'} />
        <View style={{width:'100%', marginTop:8, marginBottom:15, flexDirection:'row', justifyContent:'space-around', flexWrap:'wrap'}}>
          <View style={{width:this.props.size}}>
            <TouchableWithoutFeedback onPress={() => {this.props.navigation.navigate('PlayListDetail')}}>
              <View style={{width:'100%', height:this.props.size, borderRadius:4, backgroundColor:'#f09c9d'}}>
              </View>
            </TouchableWithoutFeedback>
            <View style={{width:'100%', height:48, paddingLeft:1, paddingRight:1}}>
              <Text onPress={() => {this.props.navigation.navigate('PlayListDetail')}} style={{width:'100%', height:20, lineHeight:20, fontSize:12.5, color:'#CCC'}}>JesBri老中nggjd</Text>
              <Text onPress={() => {this.props.navigation.navigate('SingerDetail')}} style={{fontSize:11, color:'#888'}}>策略</Text>
            </View>
          </View>
          <View style={{width:this.props.size}}>
            <TouchableWithoutFeedback onPress={() => {this.props.navigation.navigate('PlayListDetail')}}>
              <View style={{width:'100%', height:this.props.size, borderRadius:4, backgroundColor:'#f09c9d'}}>
              </View>
            </TouchableWithoutFeedback>
            <View style={{width:'100%', height:48, paddingLeft:1, paddingRight:1}}>
              <Text onPress={() => {this.props.navigation.navigate('PlayListDetail')}} style={{width:'100%', height:20, lineHeight:20, fontSize:12.5, color:'#CCC'}}>JesBri老中nggjd</Text>
              <Text onPress={() => {this.props.navigation.navigate('SingerDetail')}} style={{fontSize:11, color:'#888'}}>策略</Text>
            </View>
          </View>
          <View style={{width:this.props.size}}>
            <TouchableWithoutFeedback onPress={() => {this.props.navigation.navigate('PlayListDetail')}}>
              <View style={{width:'100%', height:this.props.size, borderRadius:4, backgroundColor:'#f09c9d'}}>
              </View>
            </TouchableWithoutFeedback>
            <View style={{width:'100%', height:48, paddingLeft:1, paddingRight:1}}>
              <Text onPress={() => {this.props.navigation.navigate('PlayListDetail')}} style={{width:'100%', height:20, lineHeight:20, fontSize:12.5, color:'#CCC'}}>JesBri老中nggjd</Text>
              <Text onPress={() => {this.props.navigation.navigate('SingerDetail')}} style={{fontSize:11, color:'#888'}}>策略</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
});

export default withNavigation(RecommendNews);
