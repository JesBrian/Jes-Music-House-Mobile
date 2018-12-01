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
import SuperPlayListGroup from '../../../../../../components/SuperPlayListGroup/SuperPlayListGroup.js'

class CollectionPlayList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isShowCollectionPlayList: true
    };
  }

  render () {
    return (
      <View>
        <View style={{height:28, flexDirection:'row', alignItems:'center', backgroundColor:'rgba(255,255,255,0.12)'}}>
          <TouchableWithoutFeedback onPress={() => {this.setState({isShowCollectionPlayList: !this.state.isShowCollectionPlayList})}}>
            <View style={{flex:1, flexDirection:'row', alignItems:'center'}}>
              {
                this.state.isShowCollectionPlayList ?
                  <SuperIcon type={'\ue600'} style={{margin:8, color:this.props.color}}/> :
                  <SuperIcon type={'\ue8cb'} style={{margin:8, color:this.props.color}}/>
              }
              <Text style={{color:'#BBB'}}>收藏的歌单</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <View>
              <SuperIcon type={'\ue672'} style={{marginRight:12, fontSize:20, color:'#BBB'}}/>
            </View>
          </TouchableWithoutFeedback>
        </View>
        {
          this.state.isShowCollectionPlayList === false ? (null) : (
            <SuperPlayListGroup moreType={'SelfPageCollection'} />
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

export default connect(reduxState)(withNavigation(CollectionPlayList));
