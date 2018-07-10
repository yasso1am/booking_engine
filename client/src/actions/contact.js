import axios from 'axios';


export const addUser = (contact) => {
    return (dispatch) => {
      axios.post('/api/contacts', contact )
       .then( res => dispatch({ type: 'ADD_CONTACT', contact: res.data }) ); 
    }
  }
  