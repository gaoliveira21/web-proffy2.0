import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';

import logo from '../../assets/images/logo.svg';
import landing from '../../assets/images/landing.svg';

import heart from '../../assets/images/icons/purple-heart.svg';
import giveClasses from '../../assets/images/icons/give-classes.svg';
import study from '../../assets/images/icons/study.svg';

import {
  Container,
  Header,
  LogoContent,
  Main,
  Welcome,
  Buttons,
  Connections,
} from './styles';

const Home: React.FC = () => {
  const history = useHistory();

  return (
    <Container>
      <Header>
        <div>
          <div>
            <img
              src="https://api.adorable.io/avatars/285/abott@adorable.png"
              alt="Avatar"
            />
            <span>Gabriel José</span>
          </div>
          <button type="button">
            <FiPower color="#D4C2FF" />
          </button>
        </div>
        <LogoContent>
          <div>
            <img src={logo} alt="Proffy" />
            <p>Sua plataforma de estudos online</p>
          </div>
        </LogoContent>
        <img src={landing} alt="Landing" />
      </Header>
      <Main>
        <Welcome>
          <p>
            Seja bem-vindo. <br />
            <strong>O que deseja fazer?</strong>
          </p>
        </Welcome>
        <Buttons>
          <button type="button" className="study">
            <div>
              <img src={study} alt="Estudar" />
              <span>Estudar</span>
            </div>
          </button>
          <button
            type="button"
            className="give-classes"
            onClick={() => history.push('/give-classes')}
          >
            <div>
              <img src={giveClasses} alt="Dar aulas" />
              <span>Dar Aulas</span>
            </div>
          </button>
        </Buttons>
        <Connections>
          <p>
            Total de 285 conexões <br />
            já realizadas <img src={heart} alt="Coração" />
          </p>
        </Connections>
      </Main>
    </Container>
  );
};

export default Home;
