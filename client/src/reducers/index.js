import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import cabins from './cabins';

const rootReducer = combineReducers({
  user,
  flash,
  cabins,
});

export default rootReducer;
