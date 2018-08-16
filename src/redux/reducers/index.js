// redux 统一入口操作

'use strict';

import { combineReducers } from 'redux';
import music from './item/MusicReducer.js';
import view from './item/ViewReducer.js';


const rootReducer = combineReducers({
  music, view
});

export default rootReducer;
