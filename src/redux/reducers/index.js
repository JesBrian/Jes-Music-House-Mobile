// redux 统一入口操作

'use strict';

import { combineReducers } from 'redux';
import music from './MusicReducer.js';


const rootReducer = combineReducers({
  music,
});

export default rootReducer;
