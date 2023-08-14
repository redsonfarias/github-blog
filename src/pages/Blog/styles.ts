import styled from 'styled-components'

export const PublicationsInfoContainer = styled.div`
  margin-top: 4rem;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  :first-child {
    font-size: 1.125rem;
    color: ${(props) => props.theme.colors.baseSubtitle};
  }

  :last-child {
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors.baseSpan};
  }
`

export const PostsContainer = styled.div`
  margin-top: 2.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`
