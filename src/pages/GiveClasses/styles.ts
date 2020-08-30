import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 0.1fr 0.3fr 1fr;
`;

export const Header = styled.header`
  background: var(--color-primary);
  width: 100%;
  padding: 4rem 6% 8rem;

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
    padding: 4rem 20% 8rem;

    > div {
      flex-direction: row;
      justify-content: space-between;

      p.rocket {
        justify-content: flex-end;
      }
    }
  }
`;

export const Main = styled.main`
  padding: 0 6% 8rem;
  width: 100%;
  height: 500px;

  form {
    width: 100%;
    background: #fff;

    margin-top: -4rem;
    border-radius: 0.8rem;
    padding: 4rem;

    fieldset {
      border: 0;
      margin-bottom: 4rem;

      legend {
        width: 100%;
        font-family: Archivo;
        font-weight: bold;
        font-size: 2.4rem;
        color: var(--color-text-title);
        padding-bottom: 1.6rem;
        border-bottom: 1px solid var(--color-line-in-white);
      }

      > div.input-block {
        display: flex;
        flex-direction: column;

        > div {
          display: flex;
          flex-direction: column;
        }

        label {
          font-family: Poppins;
          color: var(--color-text-complement);
          font-size: 1.6rem;
          padding: 1rem 0;
        }

        input,
        textarea {
          width: 100%;
          padding: 1.2rem;
          background: var(--color-input-background);
          border: 1px solid var(--color-line-in-white);
          border-radius: 0.8rem;
          margin-bottom: 1rem;
        }
      }
    }
  }

  @media (min-width: 1100px) {
    padding: 0 20% 8rem;
  }
`;

export const AvatarBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  position: relative;

  img {
    width: 50%;
    height: 50%;
    border-radius: 50%;
  }

  p {
    font-size: 2.2rem;
    color: var(--color-text-title);
    font-family: Archivo;
    font-weight: bold;
    padding: 1.5rem 0;
  }
`;
