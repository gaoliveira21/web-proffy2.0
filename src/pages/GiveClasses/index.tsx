import React from 'react';

import HeaderNavigation from '../../components/HeaderNavigation/index';
import Button from '../../components/Button';

import rocket from '../../assets/images/icons/rocket.svg';
import warning from '../../assets/images/icons/warning.svg';

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
            <div className="input-block row">
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

          <fieldset className="about-class">
            <legend>Sobre a aula</legend>
            <div className="input-block">
              <label htmlFor="subject">Matéria</label>
              <select name="subject" defaultValue="" id="subject">
                <option value="" disabled>
                  Seleciona qual você quer ensinar
                </option>
              </select>
            </div>
            <div className="input-block">
              <label htmlFor="price">Custo da sua hora por aula</label>
              <input type="text" id="price" value="R$ " />
            </div>
          </fieldset>

          <fieldset className="available">
            <legend>
              Horários disponíveis
              <button type="button">+ Novo horário</button>
            </legend>
            <div className="schedule-block">
              <div className="schedule">
                <div className="input-block">
                  <label htmlFor="week-day">Dia da semana</label>
                  <select name="week-day" defaultValue="" id="week-day">
                    <option value="" disabled>
                      Seleciona o dia
                    </option>
                  </select>
                </div>
                <div className="input-block">
                  <label htmlFor="from">Das</label>
                  <input type="text" id="from" name="from" />
                </div>
                <div className="input-block">
                  <label htmlFor="to">Até</label>
                  <input type="text" id="to" name="to" />
                </div>
              </div>
              <div className="schedule-footer">
                <div className="line" />
                <button type="button">Excluir horário</button>
                <div className="line" />
              </div>
            </div>
          </fieldset>
          <footer>
            <div className="warning">
              <img src={warning} alt="Alerta" />
              <p>
                <strong>Importante</strong>
                <br />
                Preencha todos os dados corretamente
              </p>
            </div>
            <div className="submit">
              <Button type="submit">Salvar cadastro</Button>
            </div>
          </footer>
        </form>
      </Main>
    </Container>
  );
};

export default GiveClasses;
