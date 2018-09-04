import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { setNavigation } from '../../redux/actions/ConfigActions.js';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import IndexNavbar from '../../layout/top/type/IndexNavbar.js';
import MenuPanel from '../../layout/left/MenuPanel.js';
import Drawer from 'react-native-drawer';
import SuperTabbar from '../../layout/tab/SuperTabbar.js';
import IndexSelf from './type/Self/IndexSelf.js';
import IndexRecommend from './type/Recommend/IndexRecommend.js';
import IndexFrined from './type/Friend/IndexFriend.js';
class Index extends React.Component {
    constructor(props) {
        super(props);
        this.closeControlPanel = () => {
            this._drawer.close();
        };
        this.openControlPanel = () => {
            this._drawer.open();
        };
        this.buttonClickEvent = () => {
            this.props.navigation.navigate('Login');
        };
        this.state = {};
    }
    componentDidMount() {
        this.props.dispatch(setNavigation(this.props.navigation));
    }
    render() {
        return (React.createElement(Drawer, { type: "overlay", side: "left" //抽屉方向 top／left／right／bottom
            , open: false, tapToClose: true, openDrawerOffset: 0.18, closedDrawerOffset: -3, panCloseMask: 0.18, ref: (ref) => this._drawer = ref, content: React.createElement(MenuPanel, { closeControlPanel: this.closeControlPanel, navigation: this.props.navigation }), styles: drawerStyles, tweenHandler: (ratio) => ({
                main: { opacity: (2 - ratio) / 2 }
            }) },
            React.createElement(View, { style: styles.container },
                React.createElement(IndexNavbar, { navigation: this.props.navigation, openControlPanel: this.openControlPanel }),
                React.createElement(ScrollableTabView, { initialPage: 1, renderTabBar: () => React.createElement(SuperTabbar, null), style: { paddingTop: 6, backgroundColor: 'rgba(0,0,0,0.73)' } },
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
    }
});
const drawerStyles = {
    drawer: {
        shadowColor: '#000', shadowOpacity: 0.8, shadowRadius: 3
    },
    main: {
        paddingLeft: 3
    }
};
function reduxState(store) {
    return {};
}
export default connect(reduxState)(Index);
