import * as React from 'react';
import PropTypes from 'prop-types';

function Picker({ value, onChange, options }) {
  return (
    <span>
      <select className="slds-input" onChange={(e) => onChange(e.target.value)} value={value}>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </span>
  );
}

Picker.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Picker;
