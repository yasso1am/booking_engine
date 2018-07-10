const user = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.user;
    case 'LOGOUT':
      return {};
    case 'ADD_CONTACT':
      return action.contact;
    default: 
      return state;
  }
};

export default user;

