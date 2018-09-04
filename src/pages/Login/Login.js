import React from 'react';
import { StyleSheet, Dimensions, View, TextInput, TouchableWithoutFeedback } from 'react-native';
import NormalNavbar from '../../layout/top/type/NormalNavbar.js';
import SuperButton from '../../components/SuperButton.js';
import { phoneLogin } from '../../utils/http/request/login.js';
export default class Login extends React.Component {
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
            React.createElement(NormalNavbar, { navigation: this.props.navigation, label: '手机号登录' }),
            React.createElement(View, { style: { flex: 1, flexDirection: 'column', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.73)' } },
                React.createElement(View, { style: { marginTop: 38, justifyContent: 'center', } },
                    React.createElement(TextInput, { value: this.state.phone, onChangeText: (phone) => { this.setState({ phone: phone }); }, selectionColor: '#2DC9FF', underlineColorAndroid: 'transparent', style: { width: Dimensions.get('window').width - 88, height: 53, paddingLeft: 18, paddingRight: 18, borderRadius: 26, borderWidth: 3, borderColor: '#2DC9FF', color: '#2DC9FF', fontSize: 20 } })),
                React.createElement(View, { style: { marginTop: 18, marginBottom: 18, position: 'relative', justifyContent: 'center' } },
                    React.createElement(TextInput, { value: this.state.passwd, secureTextEntry: this.state.isHiddenPasswd, onChangeText: (passwd) => { this.setState({ passwd: passwd }); }, selectionColor: '#2DC9FF', underlineColorAndroid: 'transparent', style: { width: Dimensions.get('window').width - 88, height: 53, paddingLeft: 18, paddingRight: 51, borderRadius: 26, borderWidth: 3, borderColor: '#2DC9FF', color: '#2DC9FF', fontSize: 20 } }),
                    this.state.passwd === '' ? null :
                        React.createElement(TouchableWithoutFeedback, { onPressIn: () => { this.setState({ isHiddenPasswd: false }); }, onPressOut: () => { this.setState({ isHiddenPasswd: true }); } },
                            React.createElement(View, { style: { width: 38, height: 38, top: 7.5, right: 7.5, position: 'absolute', borderRadius: 19, backgroundColor: '#686868', borderWidth: 1, borderColor: '#2EBCC6' } }))),
                React.createElement(SuperButton, { label: "\u767B\u5F55", width: Dimensions.get('window').width - 88, height: 53, onPressEvent: this.phoneLogin.bind(this) }))));
    }
    phoneLogin() {
        let data = {
            phone: this.state.phone,
            passwd: this.state.passwd
        };
        phoneLogin(data).then(res => {
            alert(res.msg);
        }).catch(error => {
            alert(error);
        });
    }
}
const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'transparent'
    },
});
