import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { getVisibleContacts } from 'redux/contacts/contactsSelectors';
import React from 'react';
import ContactListItem from './ContactListItem/ContactListItem';
import { Contacts } from '@mui/icons-material';

const ContactList = () => {
  const dispatch = useDispatch();
  const deleteContactItem = contactId => dispatch(deleteContact(contactId));
  const contacts = useSelector(getVisibleContacts);
  return (
    <Contacts>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          onDeleteContact={() => deleteContactItem(id)}
        />
      ))}
    </Contacts>
  );
};
export default ContactList;
