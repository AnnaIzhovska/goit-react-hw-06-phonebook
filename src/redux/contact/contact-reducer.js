import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { deleteContact, addContact, changeFilter } from './contact-actions'

const items = createReducer([], {
    [addContact]: (state, { payload }) => [...state, payload],
    [deleteContact]: (state, {payload}) => state.filter(({ id }) => id !== payload)
});

const filter = createReducer('', {
    [changeFilter]: (_, { payload }) => payload,
})

export default combineReducers({
    items,
    filter
})