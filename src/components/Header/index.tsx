import logo from '@/assets/logo.svg'
import leftEffect from '@/assets/nav-left-effect.svg'
import rightEffect from '@/assets/nav-right-effect.svg'
import { HeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={leftEffect} alt="" />
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>
      <img src={rightEffect} alt="" />
    </HeaderContainer>
  )
}
