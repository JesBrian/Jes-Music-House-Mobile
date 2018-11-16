import React from 'react';

import ScrollableTabView from 'react-native-scrollable-tab-view'

import SuperTabbar from '../../layout/content/ContentTab/SuperTabbar.js'
import ListenHistoryWeek from './type/ListenHistoryWeek.js'
import ListenHistoryAll from './type/ListenHistoryAll.js'


export default class SuperListenHistoryTab extends React.Component {
  render() {
    return (
      <ScrollableTabView
        renderTabBar={() => <SuperTabbar />}
        style={{backgroundColor:'rgba(0,0,0,0.73)'}}>

        <ListenHistoryWeek tabLabel={'最近一周'} />
        <ListenHistoryAll tabLabel={'所有时间'} />
      </ScrollableTabView>
    );
  }
}