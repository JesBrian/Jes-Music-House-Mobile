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

export function showBottomMenu(menuType = '') {
  return {
    type: types.VIEW_BOTTOM_SHOW_MENU,
    menuType: menuType
  }
}
export function hiddenBottomMenu() {
  return {type: types.VIEW_BOTTOM_HIDDEN_MENU}
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
