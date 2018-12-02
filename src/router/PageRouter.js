import {
  Platform
} from 'react-native'

import { createStackNavigator } from 'react-navigation'
import StackViewStyleInterpolator from 'react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator'

import Home from '../pages/Home/Home.js'
import Login from '../pages/Login/Login.js'
import Register from '../pages/Register/Register.js'
import IosIndex from '../pages/Index/IndexIos.js'
import AndroidIndex from '../pages/Index/IndexAndroid.js'
import Search from '../pages/Search/Search.js'
import Singer from '../pages/Singer/Singer.js'
import SingerDetail from '../pages/SingerDetail/SingerDetail.js'
import Song from '../pages/Song/Song.js'
import User from '../pages/User/User.js'
import Setting from '../pages/Setting/Setting.js'
import Member from '../pages/Member/Member.js'
import PlayList from '../pages/PlayList/PlayList.js'
import PlayListDetail from '../pages/PlayListDetail/PlayListDetail.js'
import ListenHistory from '../pages/ListenHistory/ListenHistory.js'
import Rank from '../pages/Rank/Rank.js'
import Recommend from '../pages/Recommend/Recommend.js'
import Comment from '../pages/Comment/Comment.js'
import WriteTrend from '../pages/WriteTrend/WriteTrend.js'
import AppTheme from '../pages/AppTheme/AppTheme.js'
import Message from '../pages/Message/Message.js'
import Collection from '../pages/Collection/Collection.js'
import Local from '../pages/Local/Local.js'
import DownloadManagement from '../pages/DownloadManagement/DownloadManagement.js'

import TestPage from '../pages/TestPage/TestPage.js'


// 注册导航
const PageRouter = createStackNavigator({
  Home: { screen: Home },
  Login: { screen: Login },
  Register: { screen: Register },
  Index: { screen: Platform.OS === 'ios' ? IosIndex : AndroidIndex },
  Search: { screen: Search },
  Singer: { screen: Singer },
  SingerDetail: { screen: SingerDetail },
  Song: { screen: Song },
  User: { screen: User },
  Setting: { screen: Setting },
  Member: { screen: Member },
  PlayList: { screen: PlayList },
  PlayListDetail: { screen: PlayListDetail },
  ListenHistory: { screen: ListenHistory },
  Rank: { screen: Rank },
  Recommend: { screen: Recommend },
  Comment: { screen: Comment },
  WriteTrend: { screen: WriteTrend },
  AppTheme: {screen: AppTheme},
  Message: {screen: Message},
  Collection: {screen: Collection},
  Local: {screen: Local},
  DownloadManagement: {screen: DownloadManagement},
  TestPage: {screen: TestPage}
}, {
  initialRouteName: 'Index', // 默认显示界面
  headerMode: 'none', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
  navigationOptions: {
    gesturesEnabled: true,
  },
  transitionConfig: () => ({
    screenInterpolator: StackViewStyleInterpolator.forHorizontal,
  })
});

export default PageRouter
