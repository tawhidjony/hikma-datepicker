import React from 'react';

type PropsSelect = {
  options: {
    value: string;
    label: string;
  }[];
}

const UiSelect = (props: PropsSelect) => {
  return (
    <select>
      {props.options.map((option) => (
        <option value={option.value}>{option.label}</option>
      ))}
    </select>
  )
}

export default UiSelect