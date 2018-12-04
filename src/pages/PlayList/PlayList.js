import React  from 'react';

import {
  StyleSheet,
  ScrollView,
  SectionList,
  View,
  Text
} from 'react-native';

import Ripple from 'react-native-material-ripple'

import NormalNavbar from '../../layout/top/TopNavbar/type/NormalNavbar.js'

import { getAllStyle } from '../../utils/http/request/styles.js'

export default class PlayList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      styleList: []
    }
  }

  componentWillMount () {
    getAllStyle().then( res => {
      if (res.state === '200') {
        let tempData = JSON.parse(JSON.stringify(res.data).replace(/cell/g, 'data'))
        this.setState({
          styleList: tempData
        })
      }
    }).catch( err => {
      alert(err)
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <NormalNavbar label={'歌单分类'} />

        <SectionList
          style={{paddingTop:5, paddingBottom:75, backgroundColor:'rgba(0,0,0,0.73)'}}
          stickySectionHeadersEnabled={false}
          renderSectionHeader={({section}) => this._renderSection(section)}
          renderItem={({item}) => this._renderTypeCell(item)}
          sections={this.state.styleList}
        />
      </View>
    );
  }


  _renderSection (section) {
    return (
      <Text style={{margin:8, color:'#EEE'}}>{ section.name }</Text>
    );
  };

  _renderTypeCell = (item) => {
    return (
      <Ripple style={{height:45, paddingLeft:23, flex:1, justifyContent:'center', backgroundColor:'rgba(0,0,0,0.3)'}}>
        <Text style={{color:'#BBB'}}>{ item.name }</Text>
      </Ripple>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
});
