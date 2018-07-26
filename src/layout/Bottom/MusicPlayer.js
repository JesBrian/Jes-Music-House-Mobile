import React  from 'react';

import {
  StyleSheet,
  View
} from 'react-native';


export default class MusicPlayer extends React.Component {
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
      <View style={{width:'100%', height:48, backgroundColor:'#333'}}>
      </View>
    )
  }

}

const styles = StyleSheet.create({
})
