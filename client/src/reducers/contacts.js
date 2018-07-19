import axios from 'axios'
import { setFlash } from './flash'
import { Switch, Route } from 'react-router-dom';
import { StatisticLabel } from 'semantic-ui-react';
import { setHeaders } from '../actions/headers';

const CONTACTS = 'CONTACTS'
const ADD_CONTACT = 'ADD_CONTACT'
const EDIT_CONTACT = 'DELECT_ITEM'

export const getContacts = () => {
    return (dispatch) => {
        axios.get('/api/contacts')
        .then(res => {
            const { headers } = res;
            dispatch(setHeaders(headers));
            dispatch({ type: CONTACTS, contacts: res.data })
        })
    }
}

export const addContact = (contact) => {
    return (dispatch) => {
        axios.post('/api/contacts', { contact })
        .then ( res => {
            const { headers } = res
            dispatch(setHeaders(headers))
            dispatch({ type: ADD_CONTACT, contact: res.data })
            dispatch(setFlash(' Thank you ', 'green'))
        })
        .catch( (err) => dispatch(setFlash('Failed to submit your question, please try again', 'red')) )
    }
}

export const editContact = (contact) => {
    return (dispatch) => {
        axios.put('/api/contacts', { contact })
        .then ( res => {
            const { headers } = res
            dispatch(setHeaders(headers))
            dispatch({ type: EDIT_CONTACT, contact: res.data })
        })
    }
}

export default ( state = [], action ) => {
    switch (action.type) {
        case CONTACTS:
            return action.contacts;
        case ADD_CONTACT:
            return [action.contact, ...state];
        default:
            return state;
    }
}