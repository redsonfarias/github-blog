import styled from 'styled-components'

export const BodyContainer = styled.div`
  padding: 2rem;
  color: ${(props) => props.theme.colors.baseText};
  white-space: pre-wrap;

  h1,
  h2,
  h3 {
    color: ${(props) => props.theme.colors.baseTitle};
  }
`
