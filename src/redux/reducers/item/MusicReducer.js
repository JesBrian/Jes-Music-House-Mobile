'use strict';

import * as types from '../../constants/MusicTypes.js';

/**
 * 这里可以初始化一个默认的实体类
 */
const initialState = {
  playStatus: false,
  playModel: 'loop', // [ loop/single-loop/random ]
}


/**
 * 在这里可以拿到action并return给index.js进行分发。
 * 根据type判断了是从哪个action过来的数据，并进行选择性return。
 */
export default function showView(state = initialState, action) {
  switch (action.type) {
    case types.MUSIC_STATUS_PLAY: {
      return {
        ...state, playStatus: true
      };
    }
    case types.MUSIC_STATUS_PAUSE: {
      return {
        ...state, playStatus: false
      };
    }
    case types.CHANGE_MUSIC_PLAY_STATUS: {
      return {
        ...state, playStatus: !state.playStatus
      };
    }
    case types.CHANGE_MUSIC_PLAY_MODEL: {
      return {
        ...state, playModel: (state.playModel === 'loop' ? 'single-loop' : state.playModel === 'random' ? 'loop' : 'random')
      };
    }
    default:
      return state;
  }
}

