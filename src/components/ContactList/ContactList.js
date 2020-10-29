import React from "react";
import PropTypes from "prop-types";

import ContactListItem from "../ContactListItem/ContactListItem";

export default function ContactList({ contacts, onRemoveContact }) {
  return (
    <ul>
      {contacts.map((contact) => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          onRemove={() => onRemoveContact(contact.id)}
        />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  onRemoveContact: PropTypes.func.isRequired,
};
