import axios from 'axios';
const CABINS = 'CABINS';

export const getCabins = () => {
  return(dispatch) => {
    axios.get('/api/cabins')
    .then ( res => {
      dispatch({ type: CABINS, cabins: res.data, headers: res.headers })
    });
  };
};

export default (state = [], action) => {
  switch(action.type) {
    case CABINS:
      return action.cabins
    default:
      return state
  };
};