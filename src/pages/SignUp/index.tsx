import React from 'react';

import Input from '../../components/Input';

import { Container, LogoContent, Main } from './styles';

import logo from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

const SignUp: React.FC = () => {
  return (
    <Container>
      <Main>
        <img src={backIcon} alt="Voltar" />
        <form>
          <h2>Cadastro</h2>
          <p>Preencha os dados abaixo para começar.</p>
          <Input type="text" name="first-name" label="Nome" />
          <Input type="text" name="last-name" label="Sobrenome" />
          <Input type="email" name="email" label="Email" />
          <Input type="password" name="password" label="Senha" />
          <button type="button">Entrar</button>
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

export default SignUp;
