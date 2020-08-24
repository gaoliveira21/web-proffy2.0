import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';

import Input from '../../components/AuthInput';
import Button from '../../components/Button';
import Success from '../../components/Success';

import { Container, LogoContent, Main } from './styles';

import logo from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

const ResetPassword: React.FC = () => {
  const [success, setSuccess] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSuccess(true);
  }

  return (
    <>
      {success && (
        <Success
          title="Redefinição enviada!"
          description="Boa, agora é só checar o e-mail que foi enviado para você
          redefinir sua senha e aproveitar os estudos."
          buttonText="Voltar ao login"
          link="/"
        />
      )}
      <Container>
        <Main>
          <form onSubmit={handleSubmit}>
            <Link to="/">
              <img src={backIcon} alt="Voltar" />
            </Link>
            <h2>Eita, esqueceu sua senha?</h2>
            <p>Não esquenta, vamos dar um jeito nisso.</p>
            <Input type="email" name="email" label="Email" />
            <Button type="submit">Enviar</Button>
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

export default ResetPassword;
