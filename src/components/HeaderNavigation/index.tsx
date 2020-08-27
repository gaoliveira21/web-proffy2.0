import React from 'react';
import { useHistory } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';
import back from '../../assets/images/icons/back.svg';

import { Container } from './styles';

interface Props {
  title: string;
}

const HeaderNavigation: React.FC<Props> = ({ title }) => {
  const history = useHistory();

  return (
    <Container>
      <div>
        <img src={back} alt="Voltar" onClick={() => history.goBack()} />
        <p>{title}</p>
        <img src={logo} alt="Proffy" />
      </div>
    </Container>
  );
};

export default HeaderNavigation;
