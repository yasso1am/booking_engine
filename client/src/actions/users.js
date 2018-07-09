import axios from 'axios';
const ADD_USER = 'ADD_USER';

export const addUser = (tempUser) => {
    return (dispatch) => {
      axios.post('/api/temp_users', { tempUser } )
       .then( res => dispatch({ type: 'ADD_USER', tempUser: res.data }) ); 
    }
  }
  
  export default (state = [], action) => {
    switch(action.type) {
      case ADD_USER:
        return action.tempUsers
      default:
        return state
    };
  };
