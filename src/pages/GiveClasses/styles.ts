import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 0.1fr 0.3fr 1fr;
`;

export const Header = styled.header`
  background: var(--color-primary);
  width: 100%;
  padding: 4rem 10%;

  h2 {
    font-family: Archivo;
    font-weight: bold;
    color: var(--color-title-in-primary);
    margin-bottom: 1rem;
    font-size: 3.2rem;
  }

  > div {
    display: flex;
    flex-direction: column;

    p {
      color: var(--color-text-in-primary);
      font-size: 1.6rem;
      padding: 1rem 0;
    }

    p.rocket {
      display: flex;
      width: 100%;
      justify-content: flex-start;

      > img {
        width: 3.2rem;
        margin-right: 1rem;
      }
    }
  }

  @media (min-width: 1100px) {
    padding: 4rem 20%;

    > div {
      flex-direction: row;
      justify-content: space-between;

      p.rocket {
        justify-content: flex-end;
      }
    }
  }
`;
