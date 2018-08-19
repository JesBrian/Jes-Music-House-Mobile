'use strict';

import * as types from '../constants/ViewTypes.js';

export function showBottomMusic() {
  return {type: types.VIEW_BOTTOM_SHOW_MUSIC}
}

export function hiddenBottomMusic() {
  return {type: types.VIEW_BOTTOM_HIDDEN_MUSIC}
}

export function showBottomPlayList() {
  return {type: types.VIEW_BOTTOM_SHOW_PLAYLIST}
}

export function hiddenBottomPlayList() {
  return {type: types.VIEW_BOTTOM_HIDDEN_PLAYLIST}
}
