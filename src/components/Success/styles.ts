import styled from 'styled-components';

import background from '../../assets/images/success-background.svg';

export const Container = styled.div`
  background: var(--color-primary);
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 100;

  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: contain;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  svg {
    font-size: 8rem;
    color: var(--color-secondary);
    margin-bottom: 2rem;
  }

  h2 {
    color: var(--color-title-in-primary);
    font-size: 5.4rem;
    font-family: Archivo;
    font-weight: bold;
    margin-bottom: 2rem;
  }

  p {
    color: var(--color-title-in-primary);
    font-size: 1.6rem;
    font-family: Poppins;
    max-width: 36rem;
  }

  a {
    text-decoration: none;
  }

  button {
    margin-top: 2rem;
    width: 14rem;
    height: 5rem;
  }
`;
