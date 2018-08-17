'use strict';

import * as types from '../constants/ViewTypes.js';

export function showBottomMusic() {
  return {type: types.VIEW_BOTTOM_MUSIC}
}

export function showBottomPlayList() {
  return {type: types.VIEW_BOTTOM_PLAYLIST}
}
