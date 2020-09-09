import React from "react";
import PropTypes from "prop-types";
import styles from "./contactListItem.module.css";

export function ContactListItem({ text, number, onRemove }) {
  return (
    <li className={styles.contactsCards}>
      <p className={styles.contactsCardsItems}>{text}:</p>
      <p className={styles.contactsCardsItems}>{number}</p>
      <button className={styles.button} type="button" onClick={onRemove}>
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  text: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};
