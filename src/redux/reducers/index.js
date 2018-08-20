// redux 统一入口操作

'use strict';

import { combineReducers } from 'redux';
import config from './item/ConfigReducer.js';
import music from './item/MusicReducer.js';
import showView from './item/ViewReducer.js';


const rootReducer = combineReducers({
  config, music, showView
});

export default rootReducer;
