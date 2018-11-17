import React  from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';

import { withNavigation } from 'react-navigation'

import SuperIcon from '../../../../../../components/SuperIcon/SuperIcon.js'
import SuperSectionNavbar from '../../../../../../components/SuperSectionNavbar/SuperSectionNavbar.js'

class RecommendEveryday extends React.Component {
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
        <SuperSectionNavbar title={'推荐歌单'} />
        <View style={{width:'100%', marginTop:8, marginBottom:15, flexDirection:'row', justifyContent:'space-around', flexWrap:'wrap'}}>
          <TouchableWithoutFeedback onPress={() => {this.props.navigation.navigate('PlayListDetail')}}>
            <View style={{width:this.props.size}}>
              <View style={{width:'100%', height:this.props.size, position:'relative', borderRadius:4, backgroundColor:'#f09c9d'}}>
                <View style={{top:2, right:6, position:'absolute', flexDirection:'row'}}>
                  <SuperIcon type={'\ue6c8'} style={{marginTop:1, marginRight:3, fontSize:14, color:'#EEE'}} />
                  <Text style={{fontSize:13, color:'#FFF'}}>555</Text>
                </View>
              </View>
              <View style={{width:'100%', height:48, paddingTop:4, paddingLeft:1, paddingRight:1}}>
                <Text style={{fontSize:12.5, lineHeight:14, color:'#CCC'}}>每日推荐每日推荐每日推荐</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => {this.props.navigation.navigate('PlayListDetail')}}>
            <View style={{width:this.props.size}}>
              <View style={{width:'100%', height:this.props.size, position:'relative', borderRadius:4, backgroundColor:'#f09c9d'}}>
                <View style={{top:2, right:6, position:'absolute', flexDirection:'row'}}>
                  <SuperIcon type={'\ue6c8'} style={{marginTop:1, marginRight:3, fontSize:14, color:'#EEE'}} />
                  <Text style={{fontSize:13, color:'#FFF'}}>555</Text>
                </View>
              </View>
              <View style={{width:'100%', height:48, paddingTop:4, paddingLeft:1, paddingRight:1}}>
                <Text style={{fontSize:12.5, lineHeight:14, color:'#CCC'}}>每日推荐每日推荐每日推荐</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => {this.props.navigation.navigate('PlayListDetail')}}>
            <View style={{width:this.props.size}}>
              <View style={{width:'100%', height:this.props.size, position:'relative', borderRadius:4, backgroundColor:'#f09c9d'}}>
                <View style={{top:2, right:6, position:'absolute', flexDirection:'row'}}>
                  <SuperIcon type={'\ue6c8'} style={{marginTop:1, marginRight:3, fontSize:14, color:'#EEE'}} />
                  <Text style={{fontSize:13, color:'#FFF'}}>555</Text>
                </View>
              </View>
              <View style={{width:'100%', height:48, paddingTop:4, paddingLeft:1, paddingRight:1}}>
                <Text style={{fontSize:12.5, lineHeight:14, color:'#CCC'}}>每日推荐每日推荐每日推荐</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
});

export default withNavigation(RecommendEveryday);
