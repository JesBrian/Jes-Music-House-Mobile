import React  from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

import { withNavigation } from 'react-navigation'

import SuperButton from '../../../../components/SuperButton/SuperButton.js'
import SuperIcon from '../../../../components/SuperIcon/SuperIcon.js'
import SuperTrendGroup from '../../../../components/SuperGroup/Trend/SuperTrendGroup.js'

class IndexFriend extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      friendTrend: [{key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}, {key: 'e'}, {key: 'f'}, {key: 'g'}, {key: 'h'}, {key: 'i'}, {key: 'j'}]
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <SuperTrendGroup dataSource={this.state.friendTrend} />

        <View style={{width:50, height:50, right:18, bottom:76, position:'absolute', justifyContent:'center', alignItems:'center', zIndex:5}}>
          <SuperButton onPress={() => {this.props.navigation.navigate('WriteTrend')}} width={43} height={43} label={<SuperIcon type={'\ue638'} style={{fontSize:28}} />} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
});

export default withNavigation(IndexFriend);
