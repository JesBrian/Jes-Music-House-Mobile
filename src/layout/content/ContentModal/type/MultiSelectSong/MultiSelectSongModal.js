import React  from 'react';

import {
  ScrollView,
  View,
  Text
} from 'react-native';

import { connect } from 'react-redux'
import { hiddenModal } from '../../../../../redux/actions/ViewActions.js'

import Ripple from 'react-native-material-ripple'
import { LargeList } from 'react-native-largelist-v2'

import MultiSelectNavbar from '../../../../top/TopNavbar/type/MultiSelectNavbar.js'
import SuperIcon from '../../../../../components/SuperIcon/SuperIcon.js'
import SuperCheckbox from '../../../../../components/SuperCheckbox/SuperCheckbox.js'

class MultiSelectSongModal extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      num: 0
    };
  }

  render () {
    return (
      <View style={{flex:1, backgroundColor:'#888'}}>
        <MultiSelectNavbar label={`已选择 ${this.state.num} 项`} />

        <ScrollView style={{flex:1, backgroundColor:'rgba(0,0,0,0.5)'}}>
          <LargeList style={{marginVertical:3, flex:1}}
                     data={[{items: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]}]}
                     heightForIndexPath={() => 48}
                     renderIndexPath={this._renderIndexPath}
          />
        </ScrollView>

        <View style={{height:58, flexDirection:'row', backgroundColor:'#282828'}}>
          <Ripple style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <SuperIcon type={'\ue66c'} style={{fontSize:26, color:'#BBB'}} />
            <Text style={{color:'#BBB'}}>下一首播放</Text>
          </Ripple>
          <Ripple style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <SuperIcon type={'\ue654'} style={{fontSize:26, color:'#BBB'}} />
            <Text style={{color:'#BBB'}}>加入歌单</Text>
          </Ripple>
          <Ripple style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <SuperIcon type={'\ue63c'} style={{fontSize:26, color:'#BBB'}} />
            <Text style={{color:'#BBB'}}>下载所选</Text>
          </Ripple>
        </View>
      </View>
    );
  }

  _renderIndexPath  = () => {
    return (
      <Ripple style={{height:48, marginLeft:3, flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <View style={{width:38, height:'100%', justifyContent:'center', alignItems:'center'}}>
          <SuperCheckbox />
        </View>
        <View style={{height:'100%', paddingLeft:5, flex:1, justifyContent:'center', borderBottomWidth:0.2, borderColor: '#FFF'}}>
          <Text style={{fontSize: 15, color:'#CCC'}}>555长cjk沙健id45康</Text>
          <Text style={{fontSize: 12, color:'#888'}}> - JesBrian</Text>
        </View>
      </Ripple>
    );
  }
}

function reduxState(store) {
  return {
    theme: store.config.theme,
    color: store.config.color
  }
}

export default connect(reduxState)(MultiSelectSongModal);
