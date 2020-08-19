import styled from 'styled-components';

import background from '../../assets/images/success-background.svg';

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 0.3fr 0.7fr;

  @media (min-width: 1100px) {
    grid-template-columns: 1fr 1fr;
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
  @media (min-width: 1100px) {
    grid-template-columns: 1fr 1fr;
    height: 100vh;
  }
`;

export const RememberMe = styled.div``;

export const Footer = styled.footer``;
