import React from 'react';

import { Container, LogoContent, Main, RememberMe, Footer } from './styles';

import logo from '../../assets/images/logo.svg';

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
        <h2>Fazer login</h2>
        <form>
          <input type="text" />
          <input type="password" />
          <div>
            <RememberMe>
              <input type="checkbox" name="" id="remember-me" />
              <label htmlFor="remember-me">Lembrar-me</label>
              <a href="#!">Esqueci minha senha</a>
            </RememberMe>
          </div>
        </form>
      </Main>
      <Footer>
        <p>
          Não tem conta? <a href="#!">Cadastre-se</a>
        </p>
        <span>É de graça</span>
      </Footer>
    </Container>
  );
};

export default SignIn;
