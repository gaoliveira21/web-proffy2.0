import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  background: #fff;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  border: 1px solid #e6e6f0;
  border-radius: 0.4rem;
  padding: 1.5rem;
  position: relative;
  margin-bottom: 1rem;
  transition: border-left 0.4s ease-in-out;

  div {
    display: flex;
    flex-direction: column;
  }

  border-left: 1px solid #e6e6f0;

  input {
    border: 0;
    font-size: 1.4rem;
  }

  label {
    position: absolute;
    font-size: 1.4rem;
    color: var(--color-text-complement);
    transition: all 0.4s ease;
  }

  &:focus-within {
    border-left: 2px solid var(--color-primary);
  }

  &:focus-within label {
    top: -1px;
    left: 1rem;
    font-size: 1rem;
  }

  &:focus-within svg {
    color: var(--color-primary);
  }
`;
