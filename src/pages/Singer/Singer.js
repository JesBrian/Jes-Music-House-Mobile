import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import NormalNavbar from '../../layout/top/type/NormalNavbar.js';
import SuperButton from '../../components/SuperButton.js';
import Video from 'react-native-video';
export default class Singer extends React.Component {
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(NormalNavbar, null),
            React.createElement(Text, { onPress: () => { this.openControlPanel(); } }, "\u6B4C\u624B"),
            React.createElement(SuperButton, { label: "\u767B\u5F55" }),
            React.createElement(View, { style: styles.backgroundVideo },
                React.createElement(Video, { source: { uri: "http://music.jesbrian.cn/static/music/test2.mp3" }, ref: (ref) => {
                        this.player = ref;
                    } }))));
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent'
    },
    backgroundVideo: {
        width: 108,
        height: 108,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: '#555'
    },
});
