import React  from 'react';

import {
  StyleSheet,
  FlatList,
  ScrollView,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux'

import { withNavigation } from 'react-navigation'
import Ripple from 'react-native-material-ripple'

import SearchNavbar from '../../layout/top/type/SearchNavbar.js'
import SuperIcon from '../../components/SuperIcon.js'


class Search extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      hotKey: [
        'JesBrian', 'hb343sc', '452', 'jtgds', '超低速车', 'h3g歌手xas2额u', '动画', 'dnjkwnd', '外滩一号', '充分体验'
      ],
      historyKey: [
        'JesBrian', 'hb343sc', '452', '超低速车', 'h3g歌手xas2额u', 'jtgds', 'JesBrian', 'hb343sc', '452', 'JesBrian', 'hb343sc', '452', '超低速车', 'h3g歌手xas2额u', 'jtgds'
      ]
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <SearchNavbar />

        <ScrollView style={{paddingTop:8, flex:1, backgroundColor:'rgba(0,0,0,0.73)'}}>
          <Ripple onPress={() => {this.props.navigation.navigate('PlayList')}} style={{height:38, flexDirection:'row', alignItems:'center'}}>
            <View style={{height:'100%', paddingLeft:8, flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center', borderBottomWidth:0.18, borderColor:'#888'}}>
              <SuperIcon type={'\ue671'} style={{color:this.props.color, fontSize:23}} />
              <Text style={{marginLeft:18, marginRight:18, color:'#DDD', fontSize:16}}>歌手分类</Text>
              <SuperIcon type={'\ue8cb'} style={{color:this.props.color, fontSize:23}} />
            </View>
          </Ripple>
          <Ripple onPress={() => {this.props.navigation.navigate('Singer')}} style={{height:38, flexDirection:'row', alignItems:'center'}}>
            <View style={{height:'100%', paddingLeft:8, flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center', borderBottomWidth:0.18, borderColor:'#888'}}>
              <SuperIcon type={'\ue62b'} style={{color:this.props.color, fontSize:23}} />
              <Text style={{marginLeft:18, marginRight:18, color:'#DDD', fontSize:16}}>歌单分类</Text>
              <SuperIcon type={'\ue8cb'} style={{color:this.props.color, fontSize:23}} />
            </View>
          </Ripple>

          <View style={{height:28, flexDirection:'row', alignItems:'center', backgroundColor:'rgba(255,255,255,0.12)'}}>
            <View style={{flex:1, flexDirection:'row', alignItems:'center'}}>
              <SuperIcon type={'\ue8cb'} style={{margin:8, color:this.props.color}}/>
              <Text style={{color:'#BBB'}}>热门搜索</Text>
            </View>
          </View>

          <View style={{margin:8, flexDirection:'row', flexWrap:'wrap'}}>
            {
              this.state.hotKey.map((item, index) => {
                return (
                  <Ripple key={index} style={{height:24, margin:4, paddingLeft:9, paddingRight:9, justifyContent:'center', alignItems:'center', borderRadius:12, borderWidth:1, borderColor:'#AAA', backgroundColor:'rgba(0,0,0,0.18)'}}>
                    <Text style={{color:'#AAA'}}>{ item }</Text>
                  </Ripple>
                )
              })
            }
          </View>

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
                <Ripple style={{height:'100%', flex:1, justifyContent:'center'}}>
                  <Text style={{marginLeft:18, color:'#AAA'}}>{ item }</Text>
                </Ripple>
                <TouchableOpacity style={{width:38, alignItems:'center'}}>
                  <SuperIcon type={'\ue61f'} style={{fontSize:21, color:'#AAA'}} />
                </TouchableOpacity>
              </View>
            )}
          />

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width:'100%', height:'100%',
    paddingTop:75,
    flex:1,
    flexDirection:'column',
    backgroundColor: 'transparent'
  }
});


function reduxState(store) {
  return {
    color: store.config.color
  }
}

export default connect(reduxState)(withNavigation(Search));
