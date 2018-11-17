import React  from 'react';

import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import Ripple from 'react-native-material-ripple'

import SuperIcon from '../../../../../../components/SuperIcon/SuperIcon.js'

class SearchHistory extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      historyKey: [
        'JesBrian', 'hb343sc', '452', '超低速车', 'h3g歌手xas2额u', 'jtgds', 'JesBrian', 'hb343sc', '452', 'JesBrian', 'hb343sc', '452', '超低速车', 'h3g歌手xas2额u', 'jtgds'
      ]
    };
  }

  render () {
    return (
      <View>
        <View style={{height:28, flexDirection:'row', alignItems:'center', backgroundColor:'rgba(255,255,255,0.12)'}}>
          <View style={{flex:1, flexDirection:'row', alignItems:'center'}}>
            <SuperIcon type={'\ue8cb'} style={{margin:8, color:this.props.color}}/>
            <Text style={{color:'#BBB'}}>历史搜索</Text>
          </View>
        </View>

        <FlatList style={{marginBottom:68, flex:1}}
                  data={this.state.historyKey}
                  renderItem={({item, index}) => (
                    <View style={{height:36, flexDirection:'row', alignItems:'center'}}>
                      <Ripple onPress={() => {this.props.searchContent(item)}} style={{height:'100%', flex:1, justifyContent:'center'}}>
                        <Text style={{marginLeft:18, color:'#AAA'}}>{ item }</Text>
                      </Ripple>
                      <TouchableOpacity onPress={this.deleteSearchKeyHistory.bind(this, index)} style={{width:38, alignItems:'center'}}>
                        <SuperIcon type={'\ue61f'} style={{fontSize:21, color:'#AAA'}} />
                      </TouchableOpacity>
                    </View>
                  )}
        />
      </View>
    );
  }

  deleteSearchKeyHistory (index) {
    this.state.historyKey.splice(index, 1)
    this.setState({
      historyKey: this.state.historyKey
    })
  }
}

const styles = StyleSheet.create({
});

function reduxState(store) {
  return {
    color: store.config.color
  }
}

export default connect(reduxState)(withNavigation(SearchHistory));
