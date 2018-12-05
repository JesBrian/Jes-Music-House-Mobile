import React  from 'react';

import {
  StyleSheet,
  ScrollView,
  View
} from 'react-native';

import { connect } from 'react-redux'
import { hiddenBottomMusic, showBottomMusic } from '../../redux/actions/ViewActions.js'

import NormalNavbar from '../../layout/top/TopNavbar/type/NormalNavbar.js'
import SuperInput from '../../components/SuperInput/SuperInput.js'
import CommentSource from "./container/CommentSource/CommentSource";
import CommentSpecial from "./container/CommentSpecial/CommentSpecial";
import CommentAll from "./container/CommentAll/CommentAll";


class Comment extends React.Component {
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
          <ScrollView>
            <CommentSource />
            <CommentSpecial />
            <CommentAll />
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
