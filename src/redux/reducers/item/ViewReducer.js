'use strict';

import * as types from '../../constants/ViewTypes.js';

/**
 * 这里可以初始化一个默认的实体类
 */
const initialState = {
  bottomMusic: true, // 底部播放器
  bottomPlayList: false, // 底部播放列表
  bottomMenu: '', // 底部菜单
  showModal: '', // 模态框
};

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

    case types.VIEW_BOTTOM_SHOW_MENU: {
      return {
        ...state, bottomMenu: action.menuType
      };
    }
    case types.VIEW_BOTTOM_HIDDEN_MENU: {
      return {
        ...state, bottomMenu: ''
      };
    }

    case types.VIEW_MODAL_SHOW: {
      return {
        ...state, showModal: action.modalType
      };
    }
    case types.VIEW_MODAL_HIDDEN: {
      return {
        ...state, showModal: ''
      };
    }

    default:
      return state;
  }
}
