import React from 'react';

import HeaderNavigation from '../../components/HeaderNavigation/index';

import rocket from '../../assets/images/icons/rocket.svg';

import { Container, Header, Main, AvatarBlock } from './styles';

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
      <Main>
        <form>
          <fieldset>
            <legend>Seus dados</legend>
            <div className="input-block">
              <AvatarBlock>
                <img
                  src="https://api.adorable.io/avatars/285/abott@adorable.png"
                  alt="Avatar"
                />
                <p>Gabriel José</p>
              </AvatarBlock>
              <div>
                <label htmlFor="whatsapp">Whatsapp</label>
                <input type="text" id="whatsapp" />
              </div>
            </div>

            <div className="input-block">
              <label htmlFor="bio">
                Biografia <small>(Máximo 300 caracteres)</small>
              </label>
              <textarea name="bio" id="bio" rows={10} maxLength={300} />
            </div>
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>
          </fieldset>

          <fieldset>
            <legend>Horários disponíveis</legend>
          </fieldset>
        </form>
      </Main>
    </Container>
  );
};

export default GiveClasses;
