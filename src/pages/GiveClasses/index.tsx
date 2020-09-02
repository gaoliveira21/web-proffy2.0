import React from 'react';

import HeaderNavigation from '../../components/HeaderNavigation/index';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Textarea from '../../components/Textarea';

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
              <Input label="Whatsapp" name="whatsapp" />
            </div>

            <Textarea name="bio" label="Biografia" rows={10} maxLength={300} />
          </fieldset>

          <fieldset className="about-class">
            <legend>Sobre a aula</legend>
            <Select
              defaultValue=""
              name="subject"
              label="Matéria"
              options={[
                {
                  value: '',
                  label: 'Selecione qual você quer ensianr',
                  disabled: true,
                },
              ]}
            />
            <Input
              label="Custo da sua hora por aula"
              name="price"
              value="R$ "
            />
          </fieldset>

          <fieldset className="available">
            <legend>
              Horários disponíveis
              <button type="button">+ Novo horário</button>
            </legend>
            <div className="schedule-block">
              <div className="schedule">
                <Select
                  defaultValue=""
                  name="week-day"
                  label="Dia da semana"
                  options={[
                    {
                      value: '',
                      label: 'Seleciona o dia',
                      disabled: true,
                    },
                  ]}
                />
                <Input label="Das" name="from" />
                <Input label="Até" name="to" />
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
