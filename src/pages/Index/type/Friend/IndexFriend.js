import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import SuperButton from '../../../../components/SuperButton.js';
import SuperIcon from '../../../../components/SuperIcon.js';
class IndexFriend extends React.Component {
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(Text, null, "Index Friend"),
            React.createElement(View, { style: { width: 43, height: 43, right: 18, bottom: 76, position: 'absolute', zIndex: 5 } },
                React.createElement(SuperButton, { width: 43, height: 43, label: React.createElement(SuperIcon, { type: '\ue638', style: { fontSize: 28 } }) }))));
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});
function reduxState(store) {
    return {
        config: store.config,
        music: store.music
    };
}
export default connect(reduxState)(IndexFriend);
