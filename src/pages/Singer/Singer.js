import React  from 'react';

import {
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native';

import { LargeList }  from 'react-native-largelist-v2'
import Ripple from 'react-native-material-ripple'

import NormalNavbar from '../../layout/top/type/NormalNavbar.js'


const singerCategory = [
  {items: [{name: '华语男歌手'}, {name: '华语女歌手'}, {name: '华语组合/乐队'}]},
  {items: [{name: '欧美男歌手'}, {name: '欧美女歌手'}, {name: '欧美组合/乐队'}]},
  {items: [{name: '日本男歌手'}, {name: '日本女歌手'}, {name: '日本组合/乐队'}]},
  {items: [{name: '韩国男歌手'}, {name: '韩国女歌手'}, {name: '韩国组合/乐队'}]},
  {items: [{name: '其他男歌手'}, {name: '其他女歌手'}, {name: '其他组合/乐队'}]}
];
export default class Singer extends React.Component {
  render() {

    return (
      <View style={styles.container}>
        <NormalNavbar label={'歌手分类'} />

        <ScrollView>
          <LargeList style={{flex:1}}
                     data={singerCategory}
                     heightForSection={() => 18}
                     renderSection={this._renderSection}
                     heightForIndexPath={() => 45}
                     renderIndexPath={this._renderIndexPath}
          />
        </ScrollView>
      </View>
    );
  }


  _renderSection = () => {
    return null;
  };

  _renderIndexPath = ({ section: section, row: row }) => {
    return (
      <Ripple style={{paddingLeft:23, flex:1, justifyContent:'center', backgroundColor:'rgba(0,0,0,0.3)'}}>
        <Text style={{color:'#BBB'}}>{ singerCategory[section].items[row].name }</Text>
      </Ripple>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    paddingVertical:75,
    flex:1,
    backgroundColor:'rgba(0,0,0,0.73)'
  }
});
