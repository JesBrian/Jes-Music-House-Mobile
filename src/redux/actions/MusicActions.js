'use strict';

import * as types from '../constants/MusicTypes.js';

export function musicPlay() {
  return {type: types.MUSIC_STATUS_PLAY}
}

export function musicPause() {
  return {type: types.MUSIC_STATUS_PAUSE}
}

export function changeMusicPlayStatus() {
  return {type: types.CHANGE_MUSIC_PLAY_STATUS}
}


export function changeMusicPlayModel() {
  return {type: types.CHANGE_MUSIC_PLAY_MODEL}
}
