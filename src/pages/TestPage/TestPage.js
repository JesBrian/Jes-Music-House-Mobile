import React from "react";
import { StyleSheet, Text, View } from "react-native";


import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
import { LargeList } from "react-native-largelist-v2";

class TestPage extends React.Component {
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
        heightForSection={() => 50}
        heightForIndexPath={() => 50}
        renderIndexPath={this._renderIndexPath}
      />
    );
  }

  _renderIndexPath = ({ section: section, row: row }) => {
    return (
      <View style={styles.row}>
        <Text>
          Section {section} Row {row}
        </Text>
        <View style={styles.line} />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  section: {
    flex: 1,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center"
  },
  row: {
    flex: 1,
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

export default gestureHandlerRootHOC(TestPage);
