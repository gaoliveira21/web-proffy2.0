import styled from 'styled-components';

export const Container = styled.fieldset`
  border: 0;
  margin-bottom: 4rem;
  padding: 0 4rem;

  legend {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    font-family: Archivo;
    font-weight: bold;
    font-size: 2.4rem;
    color: var(--color-text-title);
    padding-bottom: 1.6rem;
    border-bottom: 1px solid var(--color-line-in-white);

    > button {
      border: 0;
      background: transparent;
      padding-top: 0.8rem;
      color: var(--color-primary);
      font-weight: bold;
      font-family: Archivo;
      font-size: 1.8rem;
      outline: 0;
      cursor: pointer;
    }
  }

  div.schedule-footer {
    display: grid;
    grid-template-columns: 0.8fr 1.4fr 0.8fr;
    grid-column-gap: 0.5rem;
    align-items: center;
    margin: 0.5rem 0;

    div.line {
      width: 100%;
      height: 1px;
      background: var(--color-line-in-white);
    }

    button {
      border: 0;
      background: transparent;
      cursor: pointer;
      color: var(--color-red);
      font-family: Archivo;
    }
  }

  @media (min-width: 1100px) {
    div.schedule-block div.schedule {
      display: grid;
      grid-template-columns: 0.6fr 0.2fr 0.2fr;
      grid-column-gap: 2rem;
    }

    div.schedule-block div.schedule-footer {
      grid-template-columns: 1fr 0.5fr 1fr;
    }
  }
`;
