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

export function showBottomSongMenu() {
  return {type: types.VIEW_BOTTOM_SHOW_SONGMENU}
}
export function hiddenBottomSongMenu() {
  return {type: types.VIEW_BOTTOM_HIDDEN_SONGMENU}
}

export function showModal(modalType = '') {
  return {
    type: types.VIEW_MODAL_SHOW,
    modalType: modalType
  }
}
export function hiddenModal() {
  return {type: types.VIEW_MODAL_HIDDEN}
}
