import React  from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import { connect } from 'react-redux'
import { showBottomMenu } from '../../../redux/actions/ViewActions.js'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'

import Ripple from 'react-native-material-ripple'
import { LargeList } from 'react-native-largelist-v2'

import SuperIcon from '../../SuperIcon/SuperIcon.js'

class SuperSongGroup extends React.Component {
  static defaultProps = {
    moreType: ''
  }

  constructor (props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
      <LargeList style={[{flex:1}, this.props.style]}
                 data={[{items: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]}]}
                 heightForIndexPath={() => 48}
                 renderIndexPath={this._renderIndexPath}
      />
    )
  }

  _renderIndexPath = () => {
    return (
      <View style={{height:48, flexDirection:'row'}}>
        <Ripple style={{flex:1, flexDirection:'row'}}>
          <View style={{width:43, height:'100%', justifyContent:'center', alignItems:'center'}}>
            <SuperIcon type={'\ue6b4'} style={{fontSize:23, color:this.props.color}} />
            {/*<Text style={{fontSize:20}}>1</Text>*/}
          </View>
          <View style={{flex:1, flexDirection:'column', justifyContent:'center'}}>
            <Text style={{fontSize:16, color:'#DDD'}}>The name of the Song 歌名</Text>
            <Text style={{fontSize:12, color:'#999'}}>JesBrian</Text>
          </View>
        </Ripple>
        {
          this.props.moreType === '' ? null : (
            <Ripple onPress={this.showBottomMenu.bind(this)} style={{width:36, height:'100%', justifyContent:'center', alignItems:'center'}}>
              <SuperIcon type={'\ue653'} style={{fontSize:26, color:'#999'}} />
            </Ripple>
          )
        }
      </View>
    );
  }

  showBottomMenu () {
    this.props.dispatch(showBottomMenu(this.props.moreType))
  };
}

const styles = StyleSheet.create({
});

function reduxState(store) {
  return {
    color: store.config.color
  }
}

export default gestureHandlerRootHOC(connect(reduxState)(SuperSongGroup));
