import React  from 'react';

import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableWithoutFeedback
} from 'react-native';


import { connect } from 'react-redux'
import { changeMusicPlayModel } from '../../redux/actions/MusicActions.js'
import { hiddenBottomPlayList } from '../../redux/actions/ViewActions.js'

import Ripple from 'react-native-material-ripple'
import { LargeList } from 'react-native-largelist'

import { common } from '../../assets/styles/common.js'
import SuperIcon from '../../components/SuperIcon.js'


class NowPlayList extends React.Component {
  color;
  minCellHeight = 24;
  maxCellHeight = 48;
  minSectionHeight = 48;
  maxSectionHeight = 96;
  refreshing = false;

  constructor (props) {
    super(props);
    this.state = {
      playModel: 'loop'
    };
  }

  render () {
    return (
      <View style={{width:'100%', height:'100%', top:0, left:0, flex:1, position:'absolute', backgroundColor:'transparent', zIndex:18}}>
        <View style={{flex:1, backgroundColor:'rgba(0, 0, 0, 0.68)'}}>
          <TouchableWithoutFeedback onPress={() => {this.props.dispatch(hiddenBottomPlayList())}}>
            <View style={{flex:1}}/>
          </TouchableWithoutFeedback>
          <View style={{width:'100%', height:388, position:'relative', flexDirection:'column'}}>
            <View style={{width:'100%', height:48, flexDirection:'row', borderTopLeftRadius:12, borderTopRightRadius:12, backgroundColor:'#444'}}>
              <Ripple onPress={this.changePlayModel.bind(this)}>
                {
                  this.props.music.playModel === 'loop' ?
                    <View style={{height:'100%', padding:15, flexDirection:'row', justifyContent:'center', alignItems:'center', borderTopLeftRadius:12}}>
                      <SuperIcon type={'\ue66c'} style={{marginRight:4, fontSize:18, color:'#FFF'}} />
                      <Text style={{fontSize:16, color:'#FFF'}}>循环列表 [888]</Text>
                    </View>
                    : this.props.music.playModel === 'single-loop' ?
                    <View style={{height:'100%', padding:15, flexDirection:'row', justifyContent:'center', alignItems:'center', borderTopLeftRadius:12}}>
                      <SuperIcon type={'\ue66b'} style={{marginRight:4, fontSize:18, color:'#FFF'}} />
                      <Text style={{fontSize:16, color:'#FFF'}}>单曲循环 [888]</Text>
                    </View>
                    :
                    <View style={{height:'100%', padding:15, flexDirection:'row', justifyContent:'center', alignItems:'center', borderTopLeftRadius:12}}>
                      <SuperIcon type={'\ue607'} style={{marginRight:4, fontSize:18, color:'#FFF'}} />
                      <Text style={{fontSize:16, color:'#FFF'}}>随机播放 [888]</Text>
                    </View>
                }
              </Ripple>
              <View style={{flex:1, flexDirection:'row', justifyContent:'flex-end', alignItems:'center'}}>
                <Ripple>
                  <View style={{flex:1, flexDirection:'row', justifyContent:'flex-end', alignItems:'center'}}>
                    <View style={{width:108, height:'55%', flexDirection:'row', justifyContent:'center', alignItems:'center', borderRightWidth:1, borderRightColor:'#686868'}}>
                      <SuperIcon type={'\ue80d'} style={{fontSize:18, color:'#FFF'}} />
                      <Text style={{fontSize:16, color:'#FFF'}}> 收藏全部</Text>
                    </View>
                  </View>
                </Ripple>
              </View>
              <Ripple>
                <View style={{width:46, height:'100%', justifyContent:'center', alignItems:'center'}}>
                  <SuperIcon type={'\ue61f'} style={{fontSize:20, color:'#FFF'}} />
                </View>
              </Ripple>
            </View>
            {/*<ScrollView style={{paddingBottom:3, flex:1, backgroundColor:'#282828'}}>*/}
              {/*<View style={{height:40, flexDirection:'row'}}>*/}
                {/*<Ripple style={{height:'100%', marginLeft:8, paddingLeft:3, flex:1, flexDirection:'row', alignItems:'center', borderBottomWidth:0.1, borderColor:'#FFF'}}>*/}
                  {/*<SuperIcon type={'\ue6b4'} style={{fontSize:21, color:'#05daf0'}} />*/}
                  {/*<Text style={{marginLeft:5, fontSize:17}}>*/}
                    {/*555长cjk沙健id45康*/}
                    {/*<Text style={{fontSize:13}}> - JesBrian</Text>*/}
                  {/*</Text>*/}
                {/*</Ripple>*/}

                {/*<TouchableWithoutFeedback>*/}
                  {/*<View style={{width:38, height:'100%', justifyContent:'center', alignItems:'center', borderBottomWidth:0.1, borderColor:'#FFF'}}>*/}
                    {/*<SuperIcon type={'\ue627'} style={{fontSize:24}} />*/}
                  {/*</View>*/}
                {/*</TouchableWithoutFeedback>*/}

                {/*<TouchableWithoutFeedback>*/}
                  {/*<View style={{width:35, height:'100%', justifyContent:'center', alignItems:'center', borderBottomWidth:0.1, borderColor:'#FFF'}}>*/}
                    {/*<SuperIcon type={'\ue622'} style={{fontSize:23}} />*/}
                  {/*</View>*/}
                {/*</TouchableWithoutFeedback>*/}
              {/*</View>*/}
            {/*</ScrollView>*/}

            <LargeList
              style={{ flex:1, backgroundColor:'lightgreen' }}
              ref={ref => (this.largeList = ref)}
              bounces={true}
              refreshing={this.state.refreshing}
              nativeOptimize={this.props.nativeOptimize}
              onRefresh={() => {
                this.setState({ refreshing: true });
                setTimeout(() => this.setState({ refreshing: false }), 2000);
              }}
              numberOfRowsInSection={section => this.props.numberOfEachSection}
              numberOfSections={()=>5}
              heightForCell={(section, row) =>
                row % 2 ? this.minCellHeight : this.maxCellHeight}
              renderCell={this.renderItem.bind(this)}
              heightForSection={section =>
                section % 2 ? this.minSectionHeight : this.maxSectionHeight}
              // initialOffsetY={800}
              renderSection={section => {
                return (
                  <View
                    style={{
                      flex: 1,
                      backgroundColor: section % 2 ? "grey" : "yellow",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <Text>
                      I am section {section}
                    </Text>
                  </View>
                );
              }}
            />


          </View>
        </View>
      </View>
    )
  }


  changePlayModel () {
    this.props.dispatch(changeMusicPlayModel());
  };




  renderItem(section, row) {
    let color;
    switch (row % 3) {
      case 0:
        color = "red";
        break;
      case 1:
        color = "green";
        break;
      case 2:
        color = "blue";
        break;
    }
    return (
      <TouchableOpacity
        tag={row}
        style={{
          flex: 1,
          backgroundColor: color,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center"
        }}
        onPress={()=>{
          console.log("onPress",section,row);
        }}
      >
        <Text style={{ marginLeft: row % 3 * 50 }}>
          {"Section " + section + "  Row " + row}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
})

function reduxState(store) {
  return {
    music: store.music,
    showView: store.showView
  }
}

export default connect(reduxState)(NowPlayList);

