import styled from 'styled-components'

export const ProfileCardContainer = styled.div`
  padding: 2rem;
  background: ${(props) => props.theme.colors.baseProfile};
  border-radius: 10px;
  display: flex;
  gap: 2rem;
  position: relative;

  > img {
    height: 9.25rem;
    width: 9.25rem;
    border-radius: 8px;
    object-fit: cover;
  }
`

export const InfoContainer = styled.div`
  flex: 1;

  > :first-child {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }

  > :last-child {
    display: flex;
    gap: 1.5rem;
    position: absolute;
    bottom: 2rem;
  }
`

export const Name = styled.p`
  font-size: 1.5rem;
  line-height: 130%;
  color: ${(props) => props.theme.colors.baseTitle};
`

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme.colors.baseLabel};
`
