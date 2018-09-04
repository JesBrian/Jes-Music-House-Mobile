import React from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import Ripple from 'react-native-material-ripple';
import SuperButton from '../../components/SuperButton.js';
import { common } from '../../assets/styles/common.js';
export default class Home extends React.Component {
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(Ripple, { onPress: () => { this.props.navigation.goBack(); }, style: { width: 38, height: '100%', position: 'absolute', zIndex: 2, alignItems: 'center', justifyContent: 'center' } },
                React.createElement(Text, { style: [common.icon, { marginLeft: -5, fontSize: 25, color: "#BBB" }] }, "\uE602")),
            React.createElement(View, { style: { flex: 1 } },
                React.createElement(View, { style: { height: 238, flexDirection: 'column', alignItems: 'center', } }),
                React.createElement(View, { style: { flex: 1, flexDirection: 'column', alignItems: 'center', } },
                    React.createElement(SuperButton, { label: "\u624B\u673A\u53F7\u767B\u5F55", width: Dimensions.get('window').width - 99, height: 53, onPressEvent: () => this.props.navigation.navigate('Login') }),
                    React.createElement(SuperButton, { label: "\u6CE8\u518C", width: Dimensions.get('window').width - 99, height: 53, onPressEvent: () => this.props.navigation.navigate('Register') })),
                React.createElement(View, { style: { height: 168, flexDirection: 'column', alignItems: 'center' } },
                    React.createElement(Text, null, "\u5176\u4ED6\u767B\u9646\u65B9\u5F0F"),
                    React.createElement(View, { style: { flexDirection: 'row' } },
                        React.createElement(View, { style: { flex: 1, alignItems: 'center' } },
                            React.createElement(SuperButton, { label: "\u767B\u5F55", onPressEvent: () => this.props.navigation.navigate('Login') })),
                        React.createElement(View, { style: { flex: 1, alignItems: 'center' } },
                            React.createElement(SuperButton, { label: "\u767B\u5F55", onPressEvent: () => this.props.navigation.navigate('Login') })),
                        React.createElement(View, { style: { flex: 1, alignItems: 'center' } },
                            React.createElement(SuperButton, { label: "\u767B\u5F55", onPressEvent: () => this.props.navigation.navigate('Login') }))),
                    React.createElement(View, { style: { flexDirection: 'row' } },
                        React.createElement(View, { style: { flex: 1, alignItems: 'center' } },
                            React.createElement(SuperButton, { style: { marginLeft: 18 }, label: "\u767B\u5F55", onPressEvent: () => this.props.navigation.navigate('Login') })),
                        React.createElement(View, { style: { flex: 1, alignItems: 'center' } },
                            React.createElement(SuperButton, { style: { marginLeft: 18 }, label: "\u767B\u5F55", onPressEvent: () => this.props.navigation.navigate('Login') })),
                        React.createElement(View, { style: { flex: 1, alignItems: 'center' } },
                            React.createElement(SuperButton, { style: { marginLeft: 18 }, label: "\u767B\u5F55", onPressEvent: () => this.props.navigation.navigate('Login') })))))));
    }
}
const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.73)'
    },
});
