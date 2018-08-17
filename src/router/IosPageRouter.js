import { createStackNavigator } from 'react-navigation'
import StackViewStyleInterpolator from 'react-navigation/src/views/StackView/StackViewStyleInterpolator'

import Home from '../pages/Home/Home.js'
import Login from '../pages/Login/Login.js'
import Register from '../pages/Register/Register.js'
import Index from '../pages/Index/IndexIos.js'
import Search from '../pages/Search/Search.js'
import Singer from '../pages/Singer/Singer.js'
import User from '../pages/User/User.js'
import PlayList from '../pages/PlayList/PlayList.js'
import Song from '../pages/Song/Song.js'
import Comment from '../pages/Comment/Comment.js'


// 注册导航
const PageRouter = createStackNavigator({
  Home: { screen: Home },
  Login: { screen: Login },
  Register: { screen: Register },
  Index: { screen: Index },
  Search: { screen: Search },
  Singer: { screen: Singer },
  User: { screen: User },
  PlayList: { screen: PlayList },
  Song: { screen: Song },
  Comment: { screen: Comment },
}, {
  initialRouteName: 'Index', // 默认显示界面
  headerMode: 'none', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
  navigationOptions: {
    gesturesEnabled: true,
  },
  transitionConfig: () => ({ // 页面切换效果 - forHorizontal[right -> left], forVertical[bottom -> up]
    screenInterpolator: StackViewStyleInterpolator.forHorizontal,
  })
});

export default PageRouter