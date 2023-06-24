import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/contacts/contactsSelectors';
import React from 'react';
import { changeFilter } from 'redux/contacts/contactsActions';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const setFilter = e => dispatch(changeFilter(e.currentTarget.value));

  return (
    <label>
      Find contacts by name
      <input type="text" value={filter} onChange={setFilter} />
    </label>
  );
}
