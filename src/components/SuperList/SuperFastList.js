import React from "react";

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';


import { LargeList } from 'react-native-largelist'


export default class SuperListLarge extends React.Component {
  color;
  minCellHeight = 24;
  maxCellHeight = 48;
  minSectionHeight = 48;
  maxSectionHeight = 96;

  constructor(props) {
    super(props);
    this.state = { refreshing: false };
  }

  render() {
    return (

      <LargeList
        style={{ flex: 1 }}
        ref={ref => (this.largeList = ref)}
        bounces={true}
        refreshing={this.state.refreshing}
        nativeOptimize={false}
        onRefresh={() => {
          this.setState({ refreshing: true });
          setTimeout(() => this.setState({ refreshing: false }), 2000);
        }}
        numberOfRowsInSection={section => 100}
        numberOfSections={()=>10}
        heightForCell={(section, row) => row % 2 ? this.minCellHeight : this.maxCellHeight}
        renderCell={this.renderItem.bind(this)}
        heightForSection={section => section % 2 ? this.minSectionHeight : this.maxSectionHeight}
        renderHeader={this.renderHeader.bind(this)}
        renderFooter={this.renderFooter.bind(this)}
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

    );
  }

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
          alignItems: "center",
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

  renderFooter() {
    return (
      <View
        style={{
          height: 100,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgb(99,99,99)"
        }}
      >
        <Text>I am footer</Text>
      </View>
    );
  }

  renderHeader() {
    return (
      <View
        style={{
          height: 100,
          backgroundColor: "rgb(99,99,99)",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>I am header</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width:'100%', height:'100%',
    flex:1,
    flexDirection:'column',
    backgroundColor: 'transparent'
  }
});
