import React from 'react';
import { Link } from 'react-router-dom';

import Checkbox from '../../components/Checkbox';
import Input from '../../components/Input';
import Button from '../../components/Button';

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
          <Input type="password" name="password" label="Senha" icon />
          <div>
            <RememberMe>
              <Checkbox />
              <Link to="/reset-password">Esqueci minha senha</Link>
            </RememberMe>
          </div>
          <Button>Entrar</Button>
          <Footer>
            <p>
              Não tem conta? <Link to="sign-up">Cadastre-se</Link>
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
