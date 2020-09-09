import React from "react";
import PropTypes from "prop-types";
import { ContactListItem } from "../ContactListItem/ContactListItem";

export const ContactList = ({ contacts, onRemoveContact }) => (
  <ul>
    {contacts.map(({ id, text, number }) => (
      <ContactListItem
        key={id}
        text={text}
        number={number}
        onRemove={() => onRemoveContact(id)}
      />
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};
