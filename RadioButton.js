import React from 'react';

const RadioButton = ({checked, onChange, children}) => (
  <label>
    <input type="radio" checked={checked} onChange={onChange} />
    {children}
  </label>
);

export default RadioButton;
  