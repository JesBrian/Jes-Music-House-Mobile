import React  from 'react';

import {
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native';

import { LargeList }  from 'react-native-largelist-v2'
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
        let tempData = JSON.parse(JSON.stringify(res.data).replace(/cell/g, 'items'))
        // setTimeout(() => {
          this.setState({
            styleList: tempData
          })
        // }, 5000)
        alert(JSON.stringify(res.data).replace(/cell/g, 'items'))
      }
    }).catch( err => {
      alert(err)
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <NormalNavbar label={'歌单分类'} />

        <ScrollView>
          <LargeList style={{flex:1}}
                     data={this.state.styleList}
                     heightForSection={() => 18}
                     renderSection={this._renderSection}
                     heightForIndexPath={() => 45}
                     renderIndexPath={this._renderTypeCell}
          />
        </ScrollView>
      </View>
    );
  }


  _renderSection = () => {
    return null;
  };

  _renderTypeCell = ({ section: section, row: row }) => {
    return (
      <Ripple style={{paddingLeft:23, flex:1, justifyContent:'center', backgroundColor:'rgba(0,0,0,0.3)'}}>
        <Text style={{color:'#BBB'}}>{ this.state.styleList[section].items[row].name }</Text>
      </Ripple>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    paddingBottom:75,
    flex:1,
    backgroundColor:'rgba(0,0,0,0.73)'
  },
});
