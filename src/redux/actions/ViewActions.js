'use strict';

import * as types from '../constants/ViewTypes.js';

export function showMusicViewAction(list) {
  return (dispatch) => {
    //开始获取，发送一个dispatch
    dispatch(init(list));
    /**
     * 在这里假装做了一个类似于调接口的操作
     */
    //获取成功，发送一个dispatch
    dispatch(success(list));
  }
}

/**
 * 这里会通过dispatch把action送给reducer，TYPE是判断拿到的是哪个action。
 */
function init(list){
  return{
    type : types.VIEW_MUSIC,
    message : '开始获取',
    bean : list,
  }
}

function success(list){
  return{
    type : types.VIEW_PLAYLIST,
    message : '获取成功',
    bean : list,
  }
}
