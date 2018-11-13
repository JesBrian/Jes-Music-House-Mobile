import React from 'react';

import {
  StyleSheet,
  Dimensions,
  DrawerLayoutAndroid,
  View
} from 'react-native';


import { connect } from 'react-redux'
import { setNavigation } from '../../redux/actions/ConfigActions.js'


import IndexNavbar from '../../layout/top/TopNavbar/type/IndexNavbar.js'
import MenuPanel from '../../layout/left/LeftMenuPanel/MenuPanel.js'
import SuperIndexTab from './SuperIndexTab.js'



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

          <SuperIndexTab />
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
  }
}

export default connect(reduxState)(Index);
