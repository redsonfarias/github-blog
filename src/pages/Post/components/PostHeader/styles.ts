import styled from 'styled-components'

export const PostHeaderContainer = styled.div`
  padding: 2rem;
  background: ${(props) => props.theme.colors.baseProfile};
  border-radius: 10px;

  > :first-child {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  > :last-child {
    display: flex;
    gap: 1.5rem;
    margin-top: 0.5rem;
  }
`

export const Title = styled.p`
  font-size: 1.5rem;
  line-height: 130%;
  color: ${(props) => props.theme.colors.baseTitle};
`

export const BackButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.125rem;
  color: ${(props) => props.theme.colors.blue};
  text-transform: uppercase;

  p {
    font-size: 0.75rem;
    color: ${(props) => props.theme.colors.blue};
  }
`

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme.colors.baseLabel};
`
