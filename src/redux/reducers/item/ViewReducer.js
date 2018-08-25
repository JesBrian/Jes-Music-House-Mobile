'use strict';

import * as types from '../../constants/ViewTypes.js';

/**
 * 这里可以初始化一个默认的实体类
 */
const initialState = {
  bottomMusic: true,
  bottomPlayList: false,
  bottomSongMenu: false
}

/**
 * 在这里可以拿到action并return给index.js进行分发。
 * 根据type判断了是从哪个action过来的数据，并进行选择性return。
 */
export default function showView(state = initialState, action) {
  switch (action.type) {
    case types.VIEW_BOTTOM_SHOW_MUSIC: {
      return {
        ...state, bottomMusic: true
      };
    }
    case types.VIEW_BOTTOM_HIDDEN_MUSIC: {
      return {
        ...state, bottomMusic: false
      };
    }
    case types.VIEW_BOTTOM_SHOW_PLAYLIST: {
      return {
        ...state, bottomPlayList: true
      };
    }
    case types.VIEW_BOTTOM_HIDDEN_PLAYLIST: {
      return {
        ...state, bottomPlayList: false
      };
    }
    case types.VIEW_BOTTOM_SHOW_SONGMENU: {
      return {
        ...state, bottomSongMenu: true
      };
    }
    case types.VIEW_BOTTOM_HIDDEN_SONGMENU: {
      return {
        ...state, bottomSongMenu: false
      };
    }
    default:
      return state;
  }
}
