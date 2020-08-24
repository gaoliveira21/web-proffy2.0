import React from 'react';
import { FiCheckSquare } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Button from '../Button';

import { Container } from './styles';

interface Props {
  title: string;
  description: string;
  buttonText: string;
  link: string;
}

const Success: React.FC<Props> = ({ title, description, buttonText, link }) => {
  return (
    <Container>
      <FiCheckSquare />
      <h2>{title}</h2>
      <p>{description}</p>
      <Link to={link}>
        <Button>{buttonText}</Button>
      </Link>
    </Container>
  );
};

export default Success;
