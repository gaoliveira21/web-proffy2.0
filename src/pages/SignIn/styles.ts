import styled from 'styled-components';

import background from '../../assets/images/success-background.svg';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 0.3fr 0.7fr;

  @media (min-width: 1100px) {
    grid-template-columns: 0.5fr 0.5fr;
    height: 100vh;
  }
`;

export const LogoContent = styled.div`
  background: var(--color-primary);
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
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    max-width: 40rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
      font-family: Poppins;
      font-weight: bold;
      color: var(--color-text-title);
      font-size: 3.6rem;
      margin-bottom: 2rem;
    }
  }

  @media (min-width: 1100px) {
    grid-template-columns: 1fr 1fr;
    height: 100vh;
  }
`;

export const RememberMe = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;

  a {
    font-family: Poppins;
    font-size: 1.4rem;
    color: var(--color-text-complement);
    text-decoration: none;
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;

  p {
    font-family: Poppins;
    font-size: 1.6rem;
    color: var(--color-text-base);

    a {
      color: var(--color-primary);
      font-weight: bold;
    }
  }

  @media (min-width: 1100px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    p {
      max-width: 20rem;
    }
  }
`;
