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
    padding-top: 4rem;

    fieldset {
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

      div.input-block {
        display: flex;
        flex-direction: column;

        > div {
          display: flex;
          flex-direction: column;
        }
      }
    }

    footer {
      background: var(--color-input-background);
      border-top: 1px solid var(--color-line-in-white);
      width: 100%;
      padding: 4rem;
      margin-bottom: 4rem;
      border-bottom-left-radius: 0.8rem;
      border-bottom-right-radius: 0.8rem;

      div.warning {
        display: grid;
        grid-template-columns: 0.3fr 0.7fr;
        align-items: center;
        margin-bottom: 2rem;

        > img {
          align-self: center;
          justify-self: center;
        }

        > p {
          font-size: 1.4rem;
          font-family: Poppins;

          > strong {
            font-weight: 400;
            color: var(--color-primary);
          }
        }
      }
    }
  }

  @media (min-width: 1100px) {
    padding: 0 20% 8rem;

    form fieldset div.input-block.row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    form fieldset.about-class {
      display: grid;
      grid-template-columns: 0.6fr 0.4fr;
      grid-column-gap: 2rem;
    }

    form footer {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
  }
`;

export const AvatarBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  p {
    font-size: 2.2rem;
    color: var(--color-text-title);
    font-family: Archivo;
    font-weight: bold;
    padding: 1.5rem 0;
  }

  @media (min-width: 1100px) {
    flex-direction: row !important;
    margin-bottom: 3rem;

    p {
      margin-left: 2.5rem;
    }
  }
`;
