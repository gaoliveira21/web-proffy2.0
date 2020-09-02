import React from 'react';

import Input from '../Input';
import Select from '../Select';

import { Container } from './styles';

const ScheduleInput: React.FC = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default ScheduleInput;
