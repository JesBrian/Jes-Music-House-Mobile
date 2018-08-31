import React from 'react';

import {
  StyleSheet,
  Dimensions,
  DrawerLayoutAndroid,
  View
} from 'react-native';


import { connect } from 'react-redux'
import { setNavigation } from '../../redux/actions/ConfigActions.js'


import ScrollableTabView from 'react-native-scrollable-tab-view'


import IndexNavbar from '../../layout/top/type/IndexNavbar.js'
import MenuPanel from '../../layout/left/MenuPanel.js'
import SuperTabbar from '../../layout/tab/SuperTabbar.js'

import IndexSelf from './type/Self/IndexSelf.js'
import IndexRecommend from './type/Recommend/IndexRecommend.js'
import IndexFrined from './type/Friend/IndexFriend.js'



class Index extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount () {
    this.props.dispatch(setNavigation(this.props.navigation))
  }

  render() {
    return (
      <DrawerLayoutAndroid
        ref={(drawer) => { this.drawer = drawer; }}
        drawerWidth={Dimensions.get('window').width * 0.82}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => (<MenuPanel navigation={this.props.navigation} />)}>

        <View style={styles.container}>
          <IndexNavbar openControlPanel={this.onPenLeftDrawable} navigation={this.props.navigation} />

          <ScrollableTabView
            initialPage={1}
            renderTabBar={() => <SuperTabbar />}
            style={{paddingTop:6, backgroundColor:'rgba(0,0,0,0.8)'}}
          >

            <IndexSelf tabLabel="个人" />
            <IndexRecommend tabLabel="推荐" />
            <IndexFrined tabLabel="朋友" />
          </ScrollableTabView>
        </View>

      </DrawerLayoutAndroid>
    );
  }

  //打开侧滑栏
  onPenLeftDrawable = () => {
    this.drawer.openDrawer();
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    position: 'relative',
    flexDirection: 'column'
  },
});

function reduxState(store) {
  return {
    config: store.config,
    music: store.music
  }
}

export default connect(reduxState)(Index);
