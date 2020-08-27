import React from 'react';

import HeaderNavigation from '../../components/HeaderNavigation/index';

import { Container } from './styles';

const GiveClasses: React.FC = () => {
  return (
    <Container>
      <HeaderNavigation title="Dar aulas" />
    </Container>
  );
};

export default GiveClasses;
