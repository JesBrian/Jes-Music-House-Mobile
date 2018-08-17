// redux 统一入口操作

'use strict';

import { combineReducers } from 'redux';
import music from './item/MusicReducer.js';
import showView from './item/ViewReducer.js';


const rootReducer = combineReducers({
  music, showView
});

export default rootReducer;
