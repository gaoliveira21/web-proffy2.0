import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  input {
    margin-right: 0.5rem;
    display: inline-block;
    width: 16px;
    height: 16px;
    background: red;
    border-radius: 3px;
    transition: all 150ms;
  }

  label {
    font-family: Poppins;
    font-size: 1.4rem;
    color: var(--color-text-complement);
  }
`;
