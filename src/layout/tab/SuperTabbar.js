import React  from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  Animated
} from 'react-native'


import { connect } from 'react-redux'
import Ripple from 'react-native-material-ripple'

import { common } from '../../assets/styles/common.js'


class SuperTabbar extends React.Component {
  renderTab(name, page, isTabActive, onPressHandler, color) {
    const textColor = isTabActive ? color : '#BBB';
    const fontWeight = isTabActive ? 'bold' : 'normal';

    return (
      <Ripple
        style={{flex:1, justifyContent:'center', alignItems:'center'}}
        key={name}
        accessible={true}
        accessibilityLabel={name}
        onPress={() => onPressHandler(page)} >
        <Text style={{color:textColor, fontSize:15, fontWeight:fontWeight}}>{name}</Text>
      </Ripple>
    );
  }

  render() {
    const containerWidth = this.props.containerWidth;
    const numberOfTabs = this.props.tabs.length;
    const tabUnderlineStyle = {
      position:'absolute',
      width: containerWidth / numberOfTabs / 2,
      height:3,
      left:containerWidth / numberOfTabs / 4,
      backgroundColor:this.props.color,
      borderRadius:3,
      bottom:5,
    };

    const translateX = this.props.scrollValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, containerWidth / numberOfTabs],
    });
    return (
      <View style={[styles.tabs, this.props.style, ]}>
        {this.props.tabs.map((name, page) => {
          const isTabActive = this.props.activeTab === page;
          const renderTab = this.props.renderTab || this.renderTab;
          return renderTab(name, page, isTabActive, this.props.goToPage, this.props.color);
        })}
        <Animated.View
          style={[
            tabUnderlineStyle,
            {transform: [{ translateX },]},
            this.props.underlineStyle,
          ]}
        />

        <Image style={{width:'100%', height:8, bottom:-8, position:'absolute', zIndex:999, backgroundColor:'transparent'}} source={require('../../assets/images/default/shadow.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    paddingBottom:5
  },
  tabs: {
    height:40,
    paddingTop:4,
    position:'relative',
    zIndex:333,
    flexDirection:'row',
    justifyContent:'space-around',
    backgroundColor:'rgba(0,0,0,0.28)'
  },
});


function reduxState(store) {
  return {
    theme: store.config.theme,
    color: store.config.color
  }
}

export default connect(reduxState)(SuperTabbar);
