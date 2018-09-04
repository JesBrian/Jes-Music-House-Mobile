import React from 'react';
import { StyleSheet, View, Image, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { showBottomSongMenu } from '../../redux/actions/ViewActions.js';
import PlayListNavbar from '../../layout/top/type/PlayListNavbar.js';
import Ripple from 'react-native-material-ripple';
import { common } from '../../assets/styles/common.js';
import { goRouter } from '../../utils/router/router.js';
class PlayListDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            testData: [3, 5, 8, 9, 12, 1, 4685, 13, 156, 46, 541, 2.1, 231, 3, 42, 14, 564, 134865413, 5]
        };
    }
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(PlayListNavbar, null),
            React.createElement(View, { style: { backgroundColor: 'rgba(0,0,0,0.73)' } },
                React.createElement(TouchableWithoutFeedback, null,
                    React.createElement(View, { style: { height: 108, flexDirection: 'row', alignItems: 'center' } },
                        React.createElement(Image, { style: { width: 70, height: 70, margin: 16, borderWidth: 1, borderRadius: 6, borderColor: '#FFF' }, source: { uri: 'http://www.chuanke.com/upload/courseware/f/31/3312428/image/09c68fe797fa58d78a1de4f34e0ea40f.gif' } }),
                        React.createElement(View, { style: { height: '100%', marginLeft: 3, flex: 1 } },
                            React.createElement(Text, null, "rfgyhji"),
                            React.createElement(Ripple, null,
                                React.createElement(Text, null, "JesBrian"))))),
                React.createElement(View, { style: { height: 58, flexDirection: 'row' } },
                    React.createElement(Ripple, { onPress: () => { goRouter(this.props.config.navigation, 'Comment'); }, style: { flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' } },
                        React.createElement(Text, { style: [common.icon, { marginBottom: 5, fontSize: 22, color: '#FFF' }] }, "\uE638"),
                        React.createElement(Text, { style: { fontSize: 13, color: '#DDD' } }, "888")),
                    React.createElement(Ripple, { style: { flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' } },
                        React.createElement(Text, { style: [common.icon, { marginBottom: 5, fontSize: 22, color: '#FFF' }] }, "\uE615"),
                        React.createElement(Text, { style: { fontSize: 13, color: '#DDD' } }, "\u5206\u4EAB")),
                    React.createElement(Ripple, { style: { flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' } },
                        React.createElement(Text, { style: [common.icon, { marginBottom: 5, fontSize: 22, color: '#FFF' }] }, "\uE63C"),
                        React.createElement(Text, { style: { fontSize: 13, color: '#DDD' } }, "\u4E0B\u8F7D")),
                    React.createElement(Ripple, { style: { flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' } },
                        React.createElement(Text, { style: [common.icon, { marginBottom: 5, fontSize: 22, color: '#FFF' }] }, "\uE654"),
                        React.createElement(Text, { style: { fontSize: 13, color: '#DDD' } }, "\u591A\u9009"))),
                React.createElement(View, { style: { width: '100%', height: 48, flexDirection: 'row', borderTopLeftRadius: 12, borderTopRightRadius: 12, backgroundColor: '#222' } },
                    React.createElement(Ripple, { style: { flex: 1 } },
                        React.createElement(View, { style: { height: '100%', padding: 15, flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', borderTopLeftRadius: 12 } },
                            React.createElement(Text, { style: [common.icon, { marginRight: 4, fontSize: 18, color: '#FFF' }] }, "\uE6B4"),
                            React.createElement(Text, { style: { fontSize: 16, color: '#FFF' } }, "\u64AD\u653E\u5168\u90E8 [888]"))),
                    React.createElement(Ripple, null,
                        React.createElement(View, { style: { width: 128, height: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' } },
                            React.createElement(Text, { style: [common.icon, { fontSize: 18, color: '#FFF' }] }, "\uE80D"),
                            React.createElement(Text, { style: { fontSize: 16, color: '#FFF' } }, " \u6536\u85CF")))),
                React.createElement(View, { style: { height: 53, flexDirection: 'row', backgroundColor: 'lightgreen' } },
                    React.createElement(Ripple, { style: { flex: 1, flexDirection: 'row' } },
                        React.createElement(View, { style: { width: 48, height: '100%', justifyContent: 'center', alignItems: 'center' } },
                            React.createElement(Text, { style: [common.icon, { fontSize: 26 }] }, "\uE6B4")),
                        React.createElement(View, { style: { flex: 1, flexDirection: 'column', justifyContent: 'center' } },
                            React.createElement(Text, { style: { fontSize: 17 } }, "The name of the Song \u6B4C\u540D"),
                            React.createElement(Text, { style: { fontSize: 13 } }, "JesBrian"))),
                    React.createElement(Ripple, { onPress: this.showSongMenu.bind(this), style: { width: 32, height: '100%', justifyContent: 'center', alignItems: 'center' } },
                        React.createElement(Text, { style: [common.icon, { fontSize: 18 }] }, "\uE653"))))));
    }
    showSongMenu() {
        this.props.dispatch(showBottomSongMenu());
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent'
    },
});
function reduxState(store) {
    return {
        config: store.config,
        music: store.music
    };
}
export default connect(reduxState)(PlayListDetail);
