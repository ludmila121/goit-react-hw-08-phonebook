import Notiflix from 'notiflix';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const postContact = createAsyncThunk(
  'contacts/add',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      Notiflix.Notify.success(`${contact.name} added to the contacts`);
      return data;
    } catch (errror) {
      return rejectWithValue(errror);
    }
  }
);
export const fetchContacts = createAsyncThunk('contacts/fetch', async () => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (errror) {
    console.log('error', errror);
  }
});
export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (contactId, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
