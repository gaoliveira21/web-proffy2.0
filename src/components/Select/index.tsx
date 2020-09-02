import React, { SelectHTMLAttributes } from 'react';

import { Container } from './styles';

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: Array<{ label: string; value: string; disabled?: boolean }>;
}

const Select: React.FC<Props> = ({ label, name, options, ...rest }) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} {...rest}>
        {options.map((option) => (
          <option value={option.value} disabled={!!option.disabled}>
            {option.label}
          </option>
        ))}
      </select>
    </Container>
  );
};

export default Select;
