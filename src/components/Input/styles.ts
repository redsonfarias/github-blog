import styled from 'styled-components'

export const InputContainer = styled.input`
  width: 100%;
  background: ${(props) => props.theme.colors.baseInput};
  border: 0.063rem solid ${(props) => props.theme.colors.baseBorder};
  border-radius: 6px;
  padding: 0.75rem 1rem;

  &::placeholder {
    color: ${(props) => props.theme.colors.baseLabel};
  }

  &:focus {
    border: 0.063rem solid ${(props) => props.theme.colors.blue};
  }
`
