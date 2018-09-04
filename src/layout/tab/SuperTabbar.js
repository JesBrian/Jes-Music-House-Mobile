import React from 'react';
import { StyleSheet, View, Text, Animated } from 'react-native';
import Ripple from 'react-native-material-ripple';
export default class SuperIcon extends React.Component {
    renderTab(name, page, isTabActive, onPressHandler) {
        const textColor = isTabActive ? '#2DC9FF' : '#BBB';
        const fontWeight = isTabActive ? 'bold' : 'normal';
        return (React.createElement(Ripple, { style: { flex: 1, justifyContent: 'center', alignItems: 'center' }, key: name, accessible: true, accessibilityLabel: name, onPress: () => onPressHandler(page) },
            React.createElement(Text, { style: { color: textColor, fontSize: 15, fontWeight: fontWeight } }, name)));
    }
    render() {
        const containerWidth = this.props.containerWidth;
        const numberOfTabs = this.props.tabs.length;
        const tabUnderlineStyle = {
            position: 'absolute',
            width: containerWidth / numberOfTabs,
            height: 2,
            backgroundColor: '#2DC9FF',
            borderRadius: 2,
            bottom: 0,
        };
        const translateX = this.props.scrollValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, containerWidth / numberOfTabs],
        });
        return (React.createElement(View, { style: [styles.tabs, { backgroundColor: this.props.backgroundColor, }, this.props.style,] },
            this.props.tabs.map((name, page) => {
                const isTabActive = this.props.activeTab === page;
                const renderTab = this.props.renderTab || this.renderTab;
                return renderTab(name, page, isTabActive, this.props.goToPage);
            }),
            React.createElement(Animated.View, { style: [
                    tabUnderlineStyle,
                    {
                        transform: [
                            { translateX },
                        ]
                    },
                    this.props.underlineStyle,
                ] })));
    }
}
const styles = StyleSheet.create({
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 5
    },
    tabs: {
        height: 36,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
});
