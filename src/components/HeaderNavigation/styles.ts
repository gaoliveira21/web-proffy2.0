import styled from 'styled-components';

export const Container = styled.nav`
  width: 100%;
  background: var(--color-primary-dark);
  padding: 1.4rem 0;

  > div {
    width: 80%;
    margin: 0 auto;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    img {
      width: 5rem;
      cursor: pointer;
    }

    p {
      font-size: 1.6rem;
      font-family: Archivo;
      color: var(--color-text-in-primary);
    }
  }
`;
