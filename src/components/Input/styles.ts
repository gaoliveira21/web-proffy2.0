import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 1px solid #e6e6f0;
  padding: 1.5rem;
  position: relative;
  margin-bottom: 1rem;
  transition: border-left 0.4s ease-in-out;

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
`;
