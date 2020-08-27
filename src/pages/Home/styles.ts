import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 0.4fr 0.6fr;
  grid-template-areas: 'header' 'main';
`;

export const Header = styled.header`
  width: 100%;
  background: var(--color-primary);
  grid-area: header;
  padding: 2rem 0;

  > div:first-child {
    grid-area: profile;

    max-width: 90%;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
      display: flex;
      flex-direction: row;
      align-items: center;

      > img {
        width: 4.5rem;
        border-radius: 50%;
      }

      > span {
        margin-left: 1rem;
        color: var(--color-text-in-primary);
        font-family: Poppins;
        font-size: 1.4rem;
      }
    }

    button {
      background: var(--color-primary-dark);
      border: 0;
      padding: 1rem;
      border-radius: 0.8rem;

      display: flex;
      align-items: center;
      justify-content: center;

      cursor: pointer;
      transition: background 0.4s ease-in-out;

      &:hover {
        background: var(--color-primary-darker);
      }
    }
  }

  > img {
    grid-area: landing;
    width: 100%;
  }
`;

export const LogoContent = styled.div`
  grid-area: logo;
  background: var(--color-primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.4rem;

  img {
    width: 25rem;
  }

  p {
    color: var(--color-text-in-primary);
    font-size: 1.8rem;
    max-width: 20rem;
  }
`;

export const Main = styled.main`
  width: 100%;
  padding: 0 2rem;
  grid-area: main;

  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 0.5fr 1fr 0.5fr;
  grid-template-areas: 'welcome' 'buttons' 'connections';
  align-items: center;
  justify-content: center;
`;

export const Welcome = styled.div`
  grid-area: welcome;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Buttons = styled.div`
  width: 100%;
  grid-area: buttons;

  display: flex;
  flex-direction: column;

  button {
    border: 0;
    cursor: pointer;
    padding: 3rem 4rem;
    border-radius: 0.8rem;
    color: var(--color-title-in-primary);
    font-weight: bold;
    font-size: 2.2rem;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: background 0.4s ease-in-out;

    > div {
      display: flex;
      align-items: center;
      justify-self: center;

      > span {
        margin-left: 0.8rem;
      }
    }
  }

  button.study {
    margin-bottom: 1.2rem;
    background: var(--color-primary);

    &:hover {
      background: var(--color-primary-dark);
    }
  }

  button.give-classes {
    background: var(--color-secondary);

    &:hover {
      background: var(--color-secondary-dark);
    }
  }
`;

export const Connections = styled.div`
  grid-area: connections;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  p {
    color: var(--color-text-complement);
    font-size: 1.2rem;
  }
`;
