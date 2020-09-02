import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-family: Poppins;
    color: var(--color-text-complement);
    font-size: 1.6rem;
    padding: 1rem 0;

    small {
      font-size: 1.2rem;
      opacity: 0.8;
    }
  }

  select {
    width: 100%;
    padding: 1.2rem;
    background: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);
    border-radius: 0.8rem;
    margin-bottom: 1rem;
    outline: none;

    &:focus {
      border: 1px solid var(--color-primary);
    }
  }
`;
