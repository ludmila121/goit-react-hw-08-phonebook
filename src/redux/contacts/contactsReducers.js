import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  deleteContact,
  fetchContacts,
  postContact,
} from './contactsOperations';
import { changeFilter } from './contactsActions';

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [postContact.fulfilled]: (state, { payload }) => [payload, ...state],
  [deleteContact.fulfilled]: (state, { payload }) => {
    return state.filter(contact => contact.id !== payload);
  },
});
const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});
const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, action) => action.payload,
  [fetchContacts.pending]: () => null,
});

export default combineReducers({
  items,
  filter,
  isLoading,
  error,
});
