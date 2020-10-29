import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactListItem.module.css";

const ContactListItem = ({ contact, onRemove }) => {
  const { name, number } = contact;
  return (
    <div className={styles.ContactListItem}>
      <div className={styles.name}>
        {name} : {number}
      </div>
      <div className={styles.buttonSection}>
        <button className={styles.button} type="button" onClick={onRemove}>
          Delete
        </button>
      </div>
    </div>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default ContactListItem;
