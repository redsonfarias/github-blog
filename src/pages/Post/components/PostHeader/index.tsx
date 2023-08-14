import { MdKeyboardArrowLeft } from 'react-icons/md'
import { FaGithub, FaCalendarDay, FaComment } from 'react-icons/fa6'
import {
  PostHeaderContainer,
  BackButtonContainer,
  IconContainer,
  Title
} from './styles'
import { NavLink } from 'react-router-dom'
import { Link } from '@/components/Link'
import { relativeTime } from '@/utils/functions'

interface PostHeaderProps {
  title: string
  comments: number
  user: string
  createdAt: string
  url: string
}

export function PostHeader({
  title,
  comments,
  user,
  createdAt,
  url
}: PostHeaderProps) {
  const timePassed = relativeTime(createdAt)

  return (
    <PostHeaderContainer>
      <div>
        <NavLink to="/">
          <BackButtonContainer>
            <MdKeyboardArrowLeft size={22} />
            <p>voltar</p>
          </BackButtonContainer>
        </NavLink>
        <Link to={url} text="ver no github" />
      </div>

      <Title>{title}</Title>

      <div>
        <IconContainer>
          <FaGithub size={18} />
          <p>{user}</p>
        </IconContainer>
        <IconContainer>
          <FaCalendarDay size={18} />
          <p>{timePassed}</p>
        </IconContainer>
        <IconContainer>
          <FaComment size={18} />
          <p>{comments} comentários</p>
        </IconContainer>
      </div>
    </PostHeaderContainer>
  )
}
