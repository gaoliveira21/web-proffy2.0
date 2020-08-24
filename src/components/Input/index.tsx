// eslint-disable-next-line no-unused-vars
import React, { InputHTMLAttributes } from 'react';
import { FiEye } from 'react-icons/fi';

import { Container } from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  icon?: boolean;
}

const Input: React.FC<Props> = ({ label, name, icon, ...rest }) => {
  return (
    <Container>
      <div>
        <label htmlFor={name}>{label}</label>
        <input type="text" id={name} {...rest} />
      </div>
      {icon && <FiEye />}
    </Container>
  );
};

export default Input;
