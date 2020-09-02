import React, { TextareaHTMLAttributes } from 'react';

import { Container } from './styles';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

const Textarea: React.FC<Props> = ({ label, name, ...rest }) => {
  return (
    <Container>
      <label htmlFor={name}>
        {label} <small>(Máximo 300 caracteres)</small>
      </label>
      <textarea name={name} id={name} {...rest} />
    </Container>
  );
};

export default Textarea;
