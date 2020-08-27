import React from 'react';

import HeaderNavigation from '../../components/HeaderNavigation/index';

import rocket from '../../assets/images/icons/rocket.svg';

import { Container, Header } from './styles';

const GiveClasses: React.FC = () => {
  return (
    <Container>
      <HeaderNavigation title="Dar aulas" />
      <Header>
        <h2>Que incrível que você quer dar aulas.</h2>
        <div>
          <p>O primeiro passo, é preencher esse formulário de inscrição.</p>
          <p className="rocket">
            <img src={rocket} alt="Foguete" />
            Prepare-se! <br />
            Vai ser o máximo.
          </p>
        </div>
      </Header>
    </Container>
  );
};

export default GiveClasses;
