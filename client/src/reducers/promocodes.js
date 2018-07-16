import axios from 'axios';
import { setFlash } from '../actions/flash';
const ADD_PROMO_CODE = 'ADD_PROMO_CODE';
const PROMO_CODES = 'PROMO_CODES';
const UPDATE_PROMO_CODE = 'UPDATE_PROMO_CODE';
const DELETE_PROMO_CODE = 'DELETE_PROMO_CODE';

export const addPromoCode = (promo_code) => {
	return(dispatch) => {
		axios.post('/api/promo_codes', {promo_code})
		.then( res => {
			dispatch({ type: ADD_PROMO_CODE, promo_code: res.data, headers: res.headers })
			dispatch(setFlash('Promo Code Successfully Created', 'green'))
		});
	};
};

export const getPromoCodes = () => {
	return(dispatch) => {
		axios.get('/api/promo_codes')
		.then( res => {
			dispatch({ type: PROMO_CODES, promo_codes: res.data, headers: res.headers })
		});
	};
};

export const updatePromoCode = (promo_code) => {
	return (dispatch) => {
		axios.put(`/api/promo_codes/${promo_code.id}`, {promo_code})
		.then( res => {
			dispatch({ type: UPDATE_PROMO_CODE, promo_code: res.data, headers: res.headers})
		});
	};
};

export const deletePromoCode = (id) => {
	return(dispatch) => {
		axios.delete(`/api/promo_codes/${id}`)
		.then( res => {
			dispatch({ type: DELETE_PROMO_CODE, id, headers: res.headers})
			dispatch(setFlash('Promo Code Destroyed', 'orange'))
		});
	};
};

export default (state = [], action) => {
	switch(action.type) {
		case ADD_PROMO_CODE:
			return [action.promo_code, ...state];
		case PROMO_CODES:
			return action.promo_codes;
		case UPDATE_PROMO_CODE:
			return state.map( c => {
				if (c.id === action.promo_code.id)
					return action.promo_code
				return c
			});
		case DELETE_PROMO_CODE:
			 return state.filter( p => p.id !== action.id )
		default:
			return state;
	}
};