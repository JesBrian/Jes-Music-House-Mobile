import React from 'react';
import { Dimensions, StyleSheet, View, Text, TextInput, TouchableWithoutFeedback } from 'react-native';
import NormalNavbar from '../../layout/top/type/NormalNavbar.js';
import SuperButton from '../../components/SuperButton.js';
export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHiddenPasswd: true,
            phone: '',
            passwd: ''
        };
    }
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(NormalNavbar, { navigation: this.props.navigation, label: '手机号注册' }),
            React.createElement(View, { style: { flex: 1, flexDirection: 'column', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.73)' } },
                React.createElement(View, { style: { marginTop: 38, justifyContent: 'center', } },
                    React.createElement(TextInput, { value: this.state.phone, onChangeText: (phone) => { this.setState({ phone: phone }); }, selectionColor: '#2DC9FF', underlineColorAndroid: 'transparent', style: { width: Dimensions.get('window').width - 88, height: 53, paddingLeft: 18, paddingRight: 18, borderRadius: 26, borderWidth: 3, borderColor: '#2DC9FF', color: '#2DC9FF', fontSize: 20 } })),
                React.createElement(View, { style: { marginTop: 18, marginBottom: 18, position: 'relative', justifyContent: 'center' } },
                    React.createElement(TextInput, { value: this.state.passwd, secureTextEntry: this.state.isHiddenPasswd, onChangeText: (passwd) => { this.setState({ passwd: passwd }); }, selectionColor: '#2DC9FF', underlineColorAndroid: 'transparent', style: { width: Dimensions.get('window').width - 88, height: 53, paddingLeft: 18, paddingRight: 51, borderRadius: 26, borderWidth: 3, borderColor: '#2DC9FF', color: '#2DC9FF', fontSize: 20 } }),
                    this.state.passwd === '' ? null :
                        React.createElement(TouchableWithoutFeedback, { onPressIn: () => { this.setState({ isHiddenPasswd: false }); }, onPressOut: () => { this.setState({ isHiddenPasswd: true }); } },
                            React.createElement(View, { style: { width: 38, height: 38, top: 7.5, right: 7.5, position: 'absolute', borderRadius: 19, backgroundColor: '#686868', borderWidth: 1, borderColor: '#2EBCC6' } }))),
                React.createElement(SuperButton, { onPressEvent: this.userRegister.bind(this), label: "\u6CE8\u518C", width: Dimensions.get('window').width - 88, height: 53 })),
            React.createElement(View, { style: { height: 168, flexDirection: 'column', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.73)' } },
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
                        React.createElement(SuperButton, { style: { marginLeft: 18 }, label: "\u767B\u5F55", onPressEvent: () => this.props.navigation.navigate('Login') }))))));
    }
    userRegister() {
        let data = {
            phone: this.state.phone,
            passwd: this.state.passwd
        };
        alert(data);
    }
}
const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'transparent'
    },
});
