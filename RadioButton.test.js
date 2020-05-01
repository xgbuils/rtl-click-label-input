import React from 'react';
import RadioButton from './RadioButton';
import {render, fireEvent} from '@testing-library/react'

test('callback is called when input is clicked', () => {
  const onChange = jest.fn();
  const label = 'label content';

  const { getByLabelText } = render(
    <RadioButton onChange={onChange}>{label}</RadioButton>
  );

  fireEvent.click(getByLabelText(label));

  expect(onChange).toHaveBeenCalledTimes(1);
})

test('callback is called when label is clicked', () => {
  const onChange = jest.fn();
  const label = 'label content';

  const { getByText } = render(
    <RadioButton onChange={onChange}>{label}</RadioButton>
  );

  fireEvent.click(getByText(label));

  expect(onChange).toHaveBeenCalledTimes(1);
})