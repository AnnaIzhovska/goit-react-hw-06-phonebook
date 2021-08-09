import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('items/Save', ({ name, number }) =>({
    payload: {
    id: uuidv4(),
      name,
      number,
  }, 
  }))

export const deleteContact = createAction('items/Delete')
export const changeFilter = createAction('items/Change')
