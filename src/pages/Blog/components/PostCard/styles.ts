import styled from 'styled-components'

export const PostCardContainer = styled.div`
  padding: 2rem;
  background: ${(props) => props.theme.colors.basePost};
  border: 0.063rem solid transparent;
  border-radius: 10px;

  &:hover {
    border: 0.063rem solid ${(props) => props.theme.colors.baseLabel};
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`

export const HeaderContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;

  strong {
    flex: 1;
    font-size: 1.15rem;
    color: ${(props) => props.theme.colors.baseTitle};
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors.baseSpan};
    line-height: 200%;
  }
`
