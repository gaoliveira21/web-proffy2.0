import React from 'react';

import Checkbox from '../../components/Checkbox';
import Input from '../../components/Input';

import { Container, LogoContent, Main, RememberMe, Footer } from './styles';

import logo from '../../assets/images/logo.svg';
import heartIcon from '../../assets/images/icons/purple-heart.svg';

const SignIn: React.FC = () => {
  return (
    <Container>
      <LogoContent>
        <div>
          <img src={logo} alt="Proffy" />
          <p>Sua plataforma de estudos online</p>
        </div>
      </LogoContent>
      <Main>
        <form>
          <h2>Fazer login</h2>
          <Input type="email" name="email" label="Email" />
          <Input type="password" name="password" label="Senha" />
          <div>
            <RememberMe>
              <Checkbox />
              <a href="#!">Esqueci minha senha</a>
            </RememberMe>
          </div>
          <button type="button">Entrar</button>
          <Footer>
            <p>
              Não tem conta? <a href="#!">Cadastre-se</a>
            </p>
            <span>
              É de graça <img src={heartIcon} alt="Coração" />
            </span>
          </Footer>
        </form>
      </Main>
    </Container>
  );
};

export default SignIn;
