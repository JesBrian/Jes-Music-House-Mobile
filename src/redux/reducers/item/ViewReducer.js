'use strict';

import * as types from '../../constants/ViewTypes.js';

/**
 * 这里可以初始化一个默认的实体类
 */
const initialState = {
  bottom: 'music'
}

/**
 * 在这里可以拿到action并return给index.js进行分发。
 * 根据type判断了是从哪个action过来的数据，并进行选择性return。
 */
export default function showView(state = initialState, action) {
  switch (action.type) {
    case types.VIEW_BOTTOM_MUSIC:
      return {
        ...state, bottom: 'music'
      };
      break;
    case types.VIEW_BOTTOM_PLAYLIST:
      return {
        ...state, bottom: 'playList'
      };
      break;
    default:
      return state;
  }
}
