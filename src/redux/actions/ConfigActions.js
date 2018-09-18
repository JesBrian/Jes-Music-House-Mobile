'use strict';

import * as types from '../constants/ConfigTypes.js';

export function setNavigation(obj = {}) {
  return {
    type: types.SET_NAVIGATION,
    obj: obj
  }
}

export function setTheme(theme = 'light') {
  return {
    type: types.SET_THEME,
    theme: theme
  }
}

export function setColor(color = '#000') {
  return {
    type: types.SET_COLOR,
    color: color
  }
}
