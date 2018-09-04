import React from 'react';
import { Dimensions, StyleSheet, ScrollView, View, Text } from 'react-native';
import { connect } from 'react-redux';
import Swiper from 'react-native-swiper';
import SuperIcon from '../../../../components/SuperIcon.js';
class IndexRecommend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            testData: [],
            playListSize: 0
        };
    }
    componentWillMount() {
        this.setState({
            testData: ['Hello Swiper', 'Beautiful', 'And simple'],
            playListSize: (Dimensions.get('window').width - 30) * 0.31
        });
    }
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(ScrollView, { style: { width: '100%', flex: 1 } },
                React.createElement(View, { style: { width: '100%', height: 138, marginTop: 18, paddingLeft: 18, paddingRight: 18 } },
                    React.createElement(Swiper, { style: styles.wrapper, showsButtons: true, autoplay: true }, this.state.testData.map((item, index) => {
                        return (React.createElement(View, { key: index, style: styles.slide },
                            React.createElement(Text, { style: styles.text }, item)));
                    }))),
                React.createElement(View, { style: { width: '100%', height: 68, marginTop: 18, paddingLeft: 8, paddingRight: 8, flexDirection: 'row' } },
                    React.createElement(View, { style: { flex: 1, justifyContent: 'center', alignItems: 'center' } },
                        React.createElement(View, { style: { width: 44, height: 44, marginBottom: 5, justifyContent: 'center', alignItems: 'center', borderRadius: 22, backgroundColor: 'rgba(0,0,0,0.3)' } },
                            React.createElement(SuperIcon, { type: '\ue640', style: { paddingTop: 3, fontSize: 32, color: '#BBB', backgroundColor: 'transparent' } })),
                        React.createElement(Text, { style: { color: '#BBB' } }, "\u6BCF\u65E5\u63A8\u8350")),
                    React.createElement(View, { style: { flex: 1, justifyContent: 'center', alignItems: 'center' } },
                        React.createElement(View, { style: { width: 44, height: 44, marginBottom: 5, justifyContent: 'center', alignItems: 'center', borderRadius: 22, backgroundColor: 'rgba(0,0,0,0.3)' } },
                            React.createElement(SuperIcon, { type: '\ue646', style: { paddingTop: 3, fontSize: 32, color: '#BBB', backgroundColor: 'transparent' } })),
                        React.createElement(Text, { style: { color: '#BBB' } }, "\u6B4C\u5355")),
                    React.createElement(View, { style: { flex: 1, justifyContent: 'center', alignItems: 'center' } },
                        React.createElement(View, { style: { width: 44, height: 44, marginBottom: 5, justifyContent: 'center', alignItems: 'center', borderRadius: 22, backgroundColor: 'rgba(0,0,0,0.3)' } },
                            React.createElement(SuperIcon, { type: '\ue624', style: { paddingTop: 3, fontSize: 32, color: '#BBB', backgroundColor: 'transparent' } })),
                        React.createElement(Text, { style: { color: '#BBB' } }, "\u6B4C\u624B")),
                    React.createElement(View, { style: { flex: 1, justifyContent: 'center', alignItems: 'center' } },
                        React.createElement(View, { style: { width: 44, height: 44, marginBottom: 5, justifyContent: 'center', alignItems: 'center', borderRadius: 22, backgroundColor: 'rgba(0,0,0,0.3)' } },
                            React.createElement(SuperIcon, { type: '\ue62c', style: { paddingTop: 3, fontSize: 32, color: '#BBB', backgroundColor: 'transparent' } })),
                        React.createElement(Text, { style: { color: '#BBB' } }, "\u6392\u884C\u699C"))),
                React.createElement(View, { style: { marginTop: 18, flexDirection: 'row' } },
                    React.createElement(Text, null, "\u63A8\u8350\u6B4C\u5355"),
                    React.createElement(SuperIcon, { type: '\ue604' })),
                React.createElement(View, { style: { width: '100%', paddingLeft: 15, paddingRight: 15, flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap' } },
                    React.createElement(View, { style: { width: '31%' } },
                        React.createElement(View, { style: { width: '100%', height: this.state.playListSize, borderRadius: 8, backgroundColor: '#f09c9d' } }),
                        React.createElement(View, { style: { width: '100%', height: 38, backgroundColor: '#38daf0' } },
                            React.createElement(Text, null, "1"))),
                    React.createElement(View, { style: { width: '31%' } },
                        React.createElement(View, { style: { width: '100%', height: this.state.playListSize, borderRadius: 8, backgroundColor: '#f09c9d' } }),
                        React.createElement(Text, null, "2")),
                    React.createElement(View, { style: { width: '31%' } },
                        React.createElement(View, { style: { width: '100%', height: this.state.playListSize, borderRadius: 8, backgroundColor: '#f09c9d' } }),
                        React.createElement(Text, null, "3")),
                    React.createElement(View, { style: { width: '31%' } },
                        React.createElement(View, { style: { width: '100%', height: this.state.playListSize, borderRadius: 8, backgroundColor: '#f09c9d' } }),
                        React.createElement(Text, null, "4")),
                    React.createElement(View, { style: { width: '31%' } },
                        React.createElement(View, { style: { width: '100%', height: this.state.playListSize, borderRadius: 8, backgroundColor: '#f09c9d' } }),
                        React.createElement(Text, null, "5")),
                    React.createElement(View, { style: { width: '31%' } },
                        React.createElement(View, { style: { width: '100%', height: this.state.playListSize, borderRadius: 8, backgroundColor: '#f09c9d' } }),
                        React.createElement(Text, null, "6"))))));
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent'
    },
    wrapper: {},
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
});
function reduxState(store) {
    return {
        config: store.config,
        music: store.music
    };
}
export default connect(reduxState)(IndexRecommend);
