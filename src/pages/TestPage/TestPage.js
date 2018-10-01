import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";

import Ripple from 'react-native-material-ripple'
import { LargeList } from "react-native-largelist-v2";
import SuperIcon from "../../components/SuperIcon";

export default class TestPage extends React.Component {
  _sectionCount = 10;
  _rowCount = 10;

  render() {
    const data = [];
    for (let section = 0; section < this._sectionCount; ++section) {
      const sContent = { items: [] };
      for (let row = 0; row < this._rowCount; ++row) {
        sContent.items.push(row);
      }
      data.push(sContent);
    }
    return (
      <LargeList
        style={styles.container}
        data={data}
        heightForIndexPath={() => 50}
        renderIndexPath={this._renderIndexPath}
      />
    );
  }

  _renderIndexPath = ({ section: section, row: row }) => {
    return (
      <View style={{height: 40, flexDirection: 'row'}}>
        <Ripple style={{height: '100%', marginLeft:3, paddingLeft: 3, flex: 1, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 0.1, borderColor: '#FFF'}}>
          <SuperIcon type={'\ue6b4'} style={{fontSize: 18, color: '#05daf0'}}/>
          <Text style={{marginLeft: 5, fontSize: 15, color:'#CCC'}}>
            555长cjk沙健id45康
            <Text style={{fontSize: 12, color:'#888'}}> - JesBrian</Text>
          </Text>
        </Ripple>

        <TouchableWithoutFeedback>
          <View style={{width: 35, height: '100%', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 0.1, borderColor: '#FFF'}}>
            <SuperIcon type={'\ue627'} style={{fontSize: 20, color:'#888'}}/>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback>
          <View style={{width: 35, height: '100%', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 0.1, borderColor: '#FFF'}}>
            <SuperIcon type={'\ue622'} style={{fontSize: 20, color:'#888'}}/>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.38)",
  },
  section: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  row: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center"
  },
  line: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 1,
    backgroundColor: "#EEE"
  }
});
