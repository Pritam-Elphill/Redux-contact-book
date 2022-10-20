import {
  CREATE_CONTACT,
  DELETE_CONTACT,
  GET_SINGLE_CONTACT,
  UPDATE_CONTACT,
} from "../constants/contactConstants";

export const addContact = (contact) => ({
  type: CREATE_CONTACT,
  payload: contact,
});

export const getAContact = (payload) => ({
  type: GET_SINGLE_CONTACT,
  payload,
});

export const updateContact = (payload) => ({
  type: UPDATE_CONTACT,
  payload,
});

export const deleteContact = (payload) => ({
  type: DELETE_CONTACT,
  payload,
});
