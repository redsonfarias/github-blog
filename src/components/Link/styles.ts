import styled from 'styled-components'

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme.colors.blue};

  p {
    font-size: 0.75rem;
    color: ${(props) => props.theme.colors.blue};
    text-transform: uppercase;
  }

  &:hover {
    border-bottom: 0.063rem solid ${(props) => props.theme.colors.blue};
  }
`
