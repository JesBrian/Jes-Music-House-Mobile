import { StackNavigator } from 'react-navigation'
import IndexAndroid from '../pages/Index/IndexAndroid.js'
import Login from '../pages/Login/Login.js'
import Register from '../pages/Register/Register.js'
import Singer from '../pages/Singer/Singer.js'
import PlayList from '../pages/PlayList/PlayList.js'


// 注册导航
export const PageRouter = StackNavigator({
  Index: { screen: IndexAndroid },
  Login: { screen: Login },
  Register: { screen: Register },
  Singer: { screen: Singer },
  PlayList: { screen: PlayList },
}, {
  initialRouteName: 'IndexAndroid', // 默认显示界面

  mode: 'card',  // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
  headerMode: 'none', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
});
