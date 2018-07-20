import axios from "axios";
import { setHeaders } from "../actions/headers";

export const addUser = contact => {
  return dispatch => {
    axios.post("/api/contacts", { contact })
    .then(res => {
      dispatch({ type: "ADD_CONTACT", contact: res.data });
      dispatch(setHeaders(res.headers));
    });
  };
};
