import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';

import Input from '../../components/AuthInput';
import Button from '../../components/Button';
import Success from '../../components/Success';

import { Container, LogoContent, Main } from './styles';

import logo from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

const SignUp: React.FC = () => {
  const [success, setSuccess] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSuccess(true);
  }

  return (
    <>
      {success && (
        <Success
          title="Cadastro concluído"
          description="Agora você faz parte da plataforma da Proffy.
Tenha uma ótima experiência."
          buttonText="Fazer login"
          link="/"
        />
      )}

      <Container>
        <Main>
          <form onSubmit={handleSubmit}>
            <Link to="/">
              <img src={backIcon} alt="Voltar" />
            </Link>
            <h2>Cadastro</h2>
            <p>Preencha os dados abaixo para começar.</p>
            <Input type="text" name="first-name" label="Nome" />
            <Input type="text" name="last-name" label="Sobrenome" />
            <Input type="email" name="email" label="Email" />
            <Input type="password" name="password" label="Senha" />
            <Button type="submit">Concluir cadastro</Button>
          </form>
        </Main>
        <LogoContent>
          <div>
            <img src={logo} alt="Proffy" />
            <p>Sua plataforma de estudos online</p>
          </div>
        </LogoContent>
      </Container>
    </>
  );
};

export default SignUp;
