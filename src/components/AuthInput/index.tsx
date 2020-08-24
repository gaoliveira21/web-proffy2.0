// eslint-disable-next-line no-unused-vars
import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const AuthInput: React.FC<Props> = ({ label, name, ...rest }) => {
  return (
    <Container>
      <div>
        <label htmlFor={name}>{label}</label>
        <input id={name} {...rest} />
      </div>
    </Container>
  );
};

export default AuthInput;
