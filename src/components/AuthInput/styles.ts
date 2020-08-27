import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  background: #fff;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  border: 1px solid #e6e6f0;
  border-radius: 0.4rem;
  padding: 1rem;
  position: relative;
  margin-bottom: 1rem;
  transition: border-left 0.4s ease-in-out;
  border-left: 1px solid #e6e6f0;

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  input {
    border: 0;
    font-size: 1.4rem;
    padding-top: 0.5rem;
    display: flex;
    justify-self: stretch;
  }

  label {
    position: absolute;
    display: flex;
    justify-self: center;
    font-size: 1.4rem;
    color: var(--color-text-complement);
    transition: all 0.4s ease;
  }

  &:focus-within {
    border-left: 2px solid var(--color-primary);
  }

  &:focus-within label {
    transform: translateY(-50%);
    font-size: 1rem;
  }

  &:focus-within svg {
    color: var(--color-primary);
  }
`;
