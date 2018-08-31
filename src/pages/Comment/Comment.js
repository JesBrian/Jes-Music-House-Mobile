import React  from 'react';

import {
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native';

import { connect } from 'react-redux'
import { hiddenBottomMusic, showBottomMusic } from '../../redux/actions/ViewActions.js'

import NormalNavbar from '../../layout/top/type/NormalNavbar.js'
import SuperInput from '../../components/SuperInput/SuperInput.js'


class Comment extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount () {
    this.props.dispatch(hiddenBottomMusic())
  }

  componentWillUnmount () {
    this.props.dispatch(showBottomMusic())
  }


  render() {
    return (
      <View style={styles.container}>

        <NormalNavbar label={'评论 [11111111]'} />

        <View style={{flex:1, backgroundColor:'rgba(0,0,0,0.73)'}}>
          <View style={{width:'100%', height:68}}>
            <Text>hhh</Text>
          </View>

          <ScrollView style={{flex:1}}>
            <View>
              <Text>精彩评论</Text>
            </View>
            <View>
              <Text>最新评论</Text>
            </View>
          </ScrollView>

          <SuperInput />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    position: 'relative',
    flexDirection: 'column',
    backgroundColor: 'transparent'
  },
});


function reduxState(store) {
  return {
    showView: store.showView
  }
}

export default connect(reduxState)(Comment);
