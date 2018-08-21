'use strict';

import * as types from '../constants/ConfigTypes.js';

export function setNavigation(obj = {}) {
  return {
    type: types.SET_NAVIGATION,
    obj: obj
  }
}