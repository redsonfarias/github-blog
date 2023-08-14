import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 18.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.basePost};

  > :first-child {
    position: absolute;
    left: 0;
  }

  > :nth-child(2) {
    position: absolute;
    top: 4rem;
  }

  > :last-child {
    position: absolute;
    right: 0;
  }
`
