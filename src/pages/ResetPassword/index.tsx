import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, LogoContent, Main } from './styles';

import logo from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

const ResetPassword: React.FC = () => {
  return (
    <Container>
      <Main>
        <form>
          <Link to="/">
            <img src={backIcon} alt="Voltar" />
          </Link>
          <h2>Eita, esqueceu sua senha?</h2>
          <p>Não esquenta, vamos dar um jeito nisso.</p>
          <Input type="email" name="email" label="Email" />
          <Button>Enviar</Button>
        </form>
      </Main>
      <LogoContent>
        <div>
          <img src={logo} alt="Proffy" />
          <p>Sua plataforma de estudos online</p>
        </div>
      </LogoContent>
    </Container>
  );
};

export default ResetPassword;
