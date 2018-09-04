import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import SearchNavbar from '../../layout/top/type/SearchNavbar.js';
export default class Search extends React.Component {
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(SearchNavbar, { navigation: this.props.navigation }),
            React.createElement(View, { style: { flex: 1, backgroundColor: 'rgba(0,0,0,0.73)' } },
                React.createElement(Text, { onPress: () => { this.openControlPanel(); } }, "\u641C\u7D22"),
                React.createElement(Text, null, "555"))));
    }
}
const styles = StyleSheet.create({
    container: {
        width: '100%', height: '100%',
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'transparent'
    }
});
