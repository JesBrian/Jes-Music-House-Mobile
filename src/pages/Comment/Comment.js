import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { hiddenBottomMusic, showBottomMusic } from '../../redux/actions/ViewActions.js';
import NormalNavbar from '../../layout/top/type/NormalNavbar.js';
import SuperInput from '../../components/SuperInput/SuperInput.js';
class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentWillMount() {
        this.props.dispatch(hiddenBottomMusic());
    }
    componentWillUnmount() {
        this.props.dispatch(showBottomMusic());
    }
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(NormalNavbar, { label: '评论 [11111111]' }),
            React.createElement(View, { style: { flex: 1, backgroundColor: 'rgba(0,0,0,0.73)' } },
                React.createElement(View, { style: { width: '100%', height: 68 } },
                    React.createElement(Text, null, "hhh")),
                React.createElement(ScrollView, { style: { flex: 1 } },
                    React.createElement(View, null,
                        React.createElement(Text, null, "\u7CBE\u5F69\u8BC4\u8BBA")),
                    React.createElement(View, null,
                        React.createElement(Text, null, "\u6700\u65B0\u8BC4\u8BBA"))),
                React.createElement(SuperInput, null))));
    }
}
const styles = StyleSheet.create({
    container: {
        height: '100%',
        position: 'relative',
        flexDirection: 'column',
        backgroundColor: 'transparent'
    },
});
function reduxState(store) {
    return {
        showView: store.showView
    };
}
export default connect(reduxState)(Comment);
