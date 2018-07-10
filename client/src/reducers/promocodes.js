import axios from 'axios';
import { setFlash } from '../actions/flash';
const ADD_PROMO_CODE = 'ADD_PROMO_CODE';
const PROMO_CODES = 'PROMO_CODES';

export const addPromoCode = (promo_code) => {
	return(dispatch) => {
		axios.post('/api/promo_codes', {promo_code})
		.then( res => {
			dispatch({ type: ADD_PROMO_CODE, promo_codes: res.data, headers: res.data })
			dispatch(setFlash('Promo Code Successfully Created', 'green'))
		});
	};
};

export const getPromoCodes = () => {
	return(dispatch) => {
		axios.get('/api/promo_codes')
		.then( res => {
			dispatch({ type: PROMO_CODES, promo_codes: res.data, headers: res.data })
		});
	};
};

export default (state = [], action) => {
	switch(action.type) {
		case ADD_PROMO_CODE:
			return [...state, action.promo_codes];
		case PROMO_CODES:
			return action.promo_codes;
		default:
			return state;
	}
};