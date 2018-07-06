import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import cabins from './cabins';
import promocodes from './promocodes';

const rootReducer = combineReducers({
  user,
  flash,
  cabins,
  promocodes,
});

export default rootReducer;
