import axios from "axios";
const MAKE_RESERVATION = "MAKE_RESERVATION";

export const makeReservation = (reservation) => {
  return(dispatch) => {
    axios.post('/api/reservations', { reservation })
    .then(res => {
      dispatch({
        type: MAKE_RESERVATION,
        reservation: res.data,
        headers: res.headers,
      });
    });
  };
};

export default (state = [], action) => {
  switch (action.type) {
    case MAKE_RESERVATION:
      return [action.reservation, ...state];
    default:
      return state;
  }
};
