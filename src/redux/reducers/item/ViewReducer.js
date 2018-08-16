'use strict';

import * as types from '../../constants/ViewTypes.js';

/**
 * 这里可以初始化一个默认的实体类
 */
const initialState = {
  status: 'init',
  isSuccess: false,
  bean: null,
  message: '',
}

/**
 * 在这里可以拿到action并return给index.js进行分发。
 * 根据type判断了是从哪个action过来的数据，并进行选择性return。
 */
export default function getWeather(state = initialState, action) {
  switch (action.type) {
    case types.VIEW_MUSIC: // 初始状态
      return Object.assign({}, state, {
        status: 'init',
        isSuccess: false,
        bean: action.bean,
        message: action.message,
      });
      break;
    case types.VIEW_PLAYLIST: // 初始状态
      return Object.assign({}, state, {
        status: 'success',
        isSuccess: true,
        bean: action.bean,
        message: action.message,
      });
      break;
    default:
      return state;
  }
}
