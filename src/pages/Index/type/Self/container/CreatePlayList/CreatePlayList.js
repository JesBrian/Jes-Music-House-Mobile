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
import SuperPlayListGroup from '../../../../../../components/SuperGroup/PlayList/SuperPlayListGroup.js'

class CreatePlayList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isShowCreatePlayList: true
    };
  }

  render () {
    return (
      <View>
        <View style={{height:28, flexDirection:'row', alignItems:'center', backgroundColor:'rgba(255,255,255,0.12)'}}>
          <TouchableWithoutFeedback onPress={() => {this.setState({isShowCreatePlayList: !this.state.isShowCreatePlayList})}}>
            <View style={{flex:1, flexDirection:'row', alignItems:'center'}}>
              {
                this.state.isShowCreatePlayList ?
                  <SuperIcon type={'\ue600'} style={{margin:8, color:this.props.color}}/> :
                  <SuperIcon type={'\ue8cb'} style={{margin:8, color:this.props.color}}/>
              }
              <Text style={{color:'#BBB'}}>创建的歌单</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <View>
              <SuperIcon type={'\ue672'} style={{marginRight:12, fontSize:20, color:'#BBB'}}/>
            </View>
          </TouchableWithoutFeedback>
        </View>
        {
          this.state.isShowCreatePlayList === false ? (<View style={{width:'100%', height:0.28}} />) : (
            <SuperPlayListGroup moreType={'SelfPageCreate'} />
          )
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
});

function reduxState(store) {
  return {
    color: store.config.color
  }
}

export default connect(reduxState)(withNavigation(CreatePlayList));
