import axios from 'axios';
import { setFlash } from '../actions/flash';
const ADD_PROMO_CODE = 'ADD_PROMO_CODE';

export const addPromoCode = (promo_code) => {
	return(dispatch) => {
		axios.post('/api/promo_codes', {promo_code})
		.then( res => {
			dispatch({ type: ADD_PROMO_CODE, promo_codes: res.data, headers: res.data })
			dispatch(setFlash('Promo Code Successfully Created', 'green'))
		});
	};
};

export default (state = [], action) => {
	switch(action.type) {
		case ADD_PROMO_CODE:
			return action.promo_codes;
		default:
			return state;
	}
};