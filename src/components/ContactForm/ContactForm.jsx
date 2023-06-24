import * as yup from 'yup';
import Notiflix from 'notiflix';
import { ErrorMessage, Form, Formik, Field } from 'formik';
import { ErrorText, Label } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contactsSelectors';
import { postContact } from 'redux/contacts/contactsOperations';
import { nanoid } from 'nanoid';

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/(^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$)/, {
      message:
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
    })
    .required(),

  number: yup
    .string()
    .matches(
      /(\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9})/,
      {
        message:
          'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
      }
    )
    .required(),
});
const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};
const initialValues = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const setContact = contact => dispatch(postContact(contact));
  const addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    const currentName = name.toLowerCase();
    const matchName = contacts.some(
      ({ name }) => name.toLowerCase() === currentName
    );
    matchName
      ? Notiflix.Notify.failure(`${name} is already in contacts`)
      : setContact(contact);
  };
  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;
    addContact(name, number);
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Label>
          Name
          <Field name="name" type="text" />
          <FormError name="name" />
        </Label>
        <Label>
          Number
          <Field name="number" type="tel" />
          <FormError name="number" />
        </Label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
