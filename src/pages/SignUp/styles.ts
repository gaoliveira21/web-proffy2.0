import styled from 'styled-components';

import background from '../../assets/images/success-background.svg';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 0.3fr 0.7fr;
  grid-template-areas:
    'logo'
    'main';

  @media (min-width: 1100px) {
    grid-template-columns: 0.5fr 0.5fr;
    grid-template-areas: 'main logo';
    height: 100vh;
  }
`;

export const LogoContent = styled.div`
  background: var(--color-primary);
  grid-area: logo;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.4rem;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: contain;

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
  min-height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;

  img {
    display: flex;
    align-self: flex-start;
    justify-self: start;
  }

  form {
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-self: center;
    margin-top: 2rem;

    h2 {
      font-family: Poppins;
      font-weight: bold;
      color: var(--color-text-title);
      font-size: 3.6rem;
      margin-bottom: 2rem;
    }

    p {
      font-family: Poppins;
      color: var(--color-text-title);
      font-size: 1.4rem;
      margin-bottom: 2rem;
    }
  }
`;
