import { NavLink } from 'react-router-dom'
import { PostCardContainer, HeaderContainer } from './styles'
import { relativeTime } from '@/utils/functions'

interface PostCardProps {
  number: number
  title: string
  createdAt: string
  description: string
}

export function PostCard({
  number,
  title,
  createdAt,
  description
}: PostCardProps) {
  const timePassed = relativeTime(createdAt)

  return (
    <NavLink to={`/post/${number}`}>
      <PostCardContainer>
        <HeaderContainer>
          <strong>{title}</strong>
          <span>{timePassed}</span>
        </HeaderContainer>
        <p>{description}</p>
      </PostCardContainer>
    </NavLink>
  )
}
