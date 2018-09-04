import React from 'react';
import { StyleSheet, Dimensions, DrawerLayoutAndroid, View } from 'react-native';
import { connect } from 'react-redux';
import { setNavigation } from '../../redux/actions/ConfigActions.js';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import IndexNavbar from '../../layout/top/type/IndexNavbar.js';
import MenuPanel from '../../layout/left/MenuPanel.js';
import SuperTabbar from '../../layout/tab/SuperTabbar.js';
import IndexSelf from './type/Self/IndexSelf.js';
import IndexRecommend from './type/Recommend/IndexRecommend.js';
import IndexFrined from './type/Friend/IndexFriend.js';
class Index extends React.Component {
    constructor(props) {
        super(props);
        //打开侧滑栏
        this.onPenLeftDrawable = () => {
            this.drawer.openDrawer();
        };
        this.state = {};
    }
    componentDidMount() {
        this.props.dispatch(setNavigation(this.props.navigation));
    }
    render() {
        return (React.createElement(DrawerLayoutAndroid, { ref: (drawer) => { this.drawer = drawer; }, drawerWidth: Dimensions.get('window').width * 0.82, drawerPosition: DrawerLayoutAndroid.positions.Left, renderNavigationView: () => (React.createElement(MenuPanel, { navigation: this.props.navigation })) },
            React.createElement(View, { style: styles.container },
                React.createElement(IndexNavbar, { openControlPanel: this.onPenLeftDrawable, navigation: this.props.navigation }),
                React.createElement(ScrollableTabView, { renderTabBar: () => React.createElement(SuperTabbar, null), style: { paddingTop: 6, backgroundColor: 'rgba(0,0,0,0.73)' } },
                    React.createElement(IndexSelf, { tabLabel: "\u4E2A\u4EBA" }),
                    React.createElement(IndexRecommend, { tabLabel: "\u63A8\u8350" }),
                    React.createElement(IndexFrined, { tabLabel: "\u670B\u53CB" })))));
    }
}
const styles = StyleSheet.create({
    container: {
        height: '100%',
        position: 'relative',
        flexDirection: 'column'
    },
});
function reduxState(store) {
    return {};
}
export default connect(reduxState)(Index);
