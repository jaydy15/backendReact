import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'j1',
        email: 'j1@qbee.com',
        phone: '1111-222-3333',
        type: 'personal',
      },
      {
        id: 2,
        name: 'j2',
        email: 'j2@qbee.com',
        phone: '1111-222-3333',
        type: 'personal',
      },
      {
        id: 3,
        name: 'j3',
        email: 'j3@qbee.com',
        phone: '1111-222-3333',
        type: 'professional',
      },
    ],
    current: null,
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);

  //Add contact
  const addContact = (contact) => {
    contact.id = uuidv4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  //delete contact
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  //set current contact
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  //clear current contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  //update contact

  //filter contact

  //clear filter contact

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
      }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
