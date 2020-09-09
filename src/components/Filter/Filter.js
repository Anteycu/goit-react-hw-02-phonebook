import React from "react";
import PropTypes from "prop-types";

export function Filter({ value, changeFilter }) {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => changeFilter(e.target.value)}
      />
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
