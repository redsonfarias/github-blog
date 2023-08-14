import { LinkContainer } from './styles'
import { NavLink, NavLinkProps } from 'react-router-dom'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'

interface LinkProps extends NavLinkProps {
  text: string
}

export function Link({ text, ...props }: LinkProps) {
  return (
    <NavLink {...props} target="_blank">
      <LinkContainer>
        <p>{text}</p>
        <FaArrowUpRightFromSquare size={12} />
      </LinkContainer>
    </NavLink>
  )
}
