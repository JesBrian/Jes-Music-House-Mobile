import React  from 'react';

import {
  StyleSheet,
  View,
  Text,
  Animated
} from 'react-native'

import Ripple from 'react-native-material-ripple'

import { common } from '../../assets/styles/common.js'

export default class SuperIcon extends React.Component {
  renderTab(name, page, isTabActive, onPressHandler) {
    const textColor = isTabActive ? '#38daf0' : '#BBB';
    const fontWeight = isTabActive ? 'bold' : 'normal';

    return <Ripple
      style={{flex:1, justifyContent:'center', alignItems:'center'}}
      key={name}
      accessible={true}
      accessibilityLabel={name}
      accessibilityTraits={'button'}
      onPress={() => onPressHandler(page)}
    >
      <Text style={{color:textColor, fontSize:15, fontWeight:fontWeight}}>{name}</Text>
    </Ripple>;
  }

  render() {
    const containerWidth = this.props.containerWidth;
    const numberOfTabs = this.props.tabs.length;
    const tabUnderlineStyle = {
      position:'absolute',
      width: containerWidth / numberOfTabs,
      height:2,
      backgroundColor:'#38daf0',
      borderRadius:2,
      bottom:0,
    };

    const translateX = this.props.scrollValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, containerWidth / numberOfTabs],
    });
    return (
      <View style={[styles.tabs, {backgroundColor: this.props.backgroundColor, }, this.props.style, ]}>
        {this.props.tabs.map((name, page) => {
          const isTabActive = this.props.activeTab === page;
          const renderTab = this.props.renderTab || this.renderTab;
          return renderTab(name, page, isTabActive, this.props.goToPage);
        })}
        <Animated.View
          style={[
            tabUnderlineStyle,
            {
              transform: [
                { translateX },
              ]
            },
            this.props.underlineStyle,
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    paddingBottom:5,
  },
  tabs: {
    height:38,
    flexDirection:'row',
    justifyContent:'space-around'
  },
});
