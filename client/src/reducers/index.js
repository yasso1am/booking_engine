 import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import cabins from './cabins';
import promocodes from './promocodes';
import reservations from'./reservations';
import contacts from './contacts';

const rootReducer = combineReducers({
  user,
  flash,
  cabins,
  promocodes,
  reservations,
  contacts,
});

export default rootReducer;
