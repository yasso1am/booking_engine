import axios from 'axios';

const EDIT_FORM = 'EDIT_FORM';
const DELETE_FORM = 'DELETE_FORM';

export const editForm = (id) => {
  return (dispatch) => {
    axios.put('/api/users/', {id} )
     .then( res => dispatch({ type: 'EDIT_FORM', app: res.data }) )
  }
}


export default ( state = [], action ) => {
  switch(action.type) {
    case EDIT_FORM:
      return action.user;
    case DELETE_FORM:
      return {};
    default: 
      return state;
  }
}
