import React from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";

export default function Filter({ filter, onChangeFilter }) {
  return (
    <div className={styles.Filter}>
      <label>
        Find contacts by name
        <input
          type="text"
          value={filter}
          onChange={(e) => onChangeFilter(e.target.value)}
          name="filter"
        ></input>
      </label>
    </div>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
