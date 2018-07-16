 import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import cabins from './cabins';
import promocodes from './promocodes';
import reservations from'./reservations';

const rootReducer = combineReducers({
  user,
  flash,
  cabins,
  promocodes,
  reservations,
});

export default rootReducer;
