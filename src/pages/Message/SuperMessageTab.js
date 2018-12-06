import React from 'react';

import ScrollableTabView from 'react-native-scrollable-tab-view'

import SuperTabbar from '../../layout/content/ContentTab/SuperTabbar.js'
import MessagePersonalLetter from './type/MessagePersonalLetter.js'
import MessageComment from './type/MessageComment.js'
import MessageNotice from './type/MessageNotice.js'


export default class SuperMessageTab extends React.Component {
  render() {
    return (
      <ScrollableTabView
        renderTabBar={() => <SuperTabbar />}
        style={{paddingBottom:4, backgroundColor:'rgba(0,0,0,0.73)'}}>

        <MessagePersonalLetter tabLabel={'私信'} />
        <MessageComment tabLabel={'评论'} />
        <MessageNotice tabLabel={'通知'} />
      </ScrollableTabView>
    );
  }
}