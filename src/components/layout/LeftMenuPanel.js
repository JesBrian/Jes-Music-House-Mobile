import React  from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';


export default class LeftMenuPanel extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }


  closeControlPanel = () => {
    this.props.closeControlPanel();
  };

  render () {
    return (
      <View >
        <View><Text onPress={()=>{this.closeControlPanel()}}>vhbjn</Text><Text onPress={()=>{this.closeControlPanel()}}>vhbjn</Text><Text onPress={()=>{this.closeControlPanel()}}>vhbjn</Text><Text onPress={()=>{this.closeControlPanel()}}>vhbjn</Text><Text onPress={()=>{this.closeControlPanel()}}>vhbjn</Text><Text onPress={()=>{this.closeControlPanel()}}>vhbjn</Text><Text onPress={()=>{this.closeControlPanel()}}>vhbjn</Text><Text onPress={()=>{this.closeControlPanel()}}>vhbjn</Text><Text onPress={()=>{this.closeControlPanel()}}>vhbjn</Text><Text onPress={()=>{this.closeControlPanel()}}>vhbjn</Text><Text onPress={()=>{this.closeControlPanel()}}>vhbjn</Text></View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
})
