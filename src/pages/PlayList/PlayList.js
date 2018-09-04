import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import NormalNavbar from '../../layout/top/type/NormalNavbar.js';
class PlayList extends React.Component {
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(NormalNavbar, { label: '歌单' })));
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent'
    },
});
function reduxState(store) {
    return {
        config: store.config
    };
}
export default connect(reduxState)(PlayList);
