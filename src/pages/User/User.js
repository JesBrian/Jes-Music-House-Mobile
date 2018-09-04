import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import SuperButton from '../../components/SuperButton.js';
export default class User extends React.Component {
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(Text, { onPress: () => { this.openControlPanel(); } }, "\u7528\u6237\u6CE8\u518C 88"),
            React.createElement(SuperButton, { label: "\u6CE8\u518C" })));
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent'
    },
});
