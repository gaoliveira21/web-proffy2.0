import styled from 'styled-components';

export const Container = styled.button`
  border: 0;
  padding: 1.6rem 0;
  width: 100%;
  cursor: pointer;
  transition: background 0.4s ease-in-out;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.8rem;
  background: var(--color-secondary);

  color: var(--color-button-text);
  font-size: 1.6rem;
  font-weight: bold;
  font-family: Archivo;

  &:disabled {
    background: var(--color-button-disabled);
    color: var(--color-text-complement);
  }

  &:hover {
    background: var(--color-secondary-dark);
  }
`;
