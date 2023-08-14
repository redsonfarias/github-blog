import { useEffect, useState } from 'react'
import { api } from '@/lib/axios'
import { USERNAME } from '@/utils/constants'
import { Link } from '@/components/Link'
import { FaGithub, FaBuilding, FaUserGroup } from 'react-icons/fa6'
import {
  InfoContainer,
  ProfileCardContainer,
  Name,
  IconContainer
} from './styles'

interface IProfile {
  user: string
  name: string
  url: string
  avatarUrl?: string
  company?: string
  bio?: string
  followers: number
}

export function ProfileCard() {
  const [profile, setProfile] = useState<IProfile | null>(null)

  useEffect(() => {
    async function fetchProfile() {
      const response = await api.get(`/users/${USERNAME}`)
      const { data } = response

      setProfile({
        user: data.login,
        name: data.name,
        url: data.html_url,
        avatarUrl: data.avatar_url,
        company: data.company,
        bio: data.bio,
        followers: data.followers
      })
    }

    fetchProfile()
  }, [])

  return (
    <ProfileCardContainer>
      <img src={profile?.avatarUrl} alt="avatar" />

      <InfoContainer>
        <div>
          <Name>{profile?.name}</Name>
          <Link to={profile?.url ?? ''} text="github" />
        </div>
        <p>{profile?.bio}</p>
        <div>
          <IconContainer>
            <FaGithub size={18} />
            <p>{profile?.user}</p>
          </IconContainer>
          {profile?.company && (
            <IconContainer>
              <FaBuilding size={18} />
              <p>{profile.company}</p>
            </IconContainer>
          )}
          <IconContainer>
            <FaUserGroup size={18} />
            <p>{profile?.followers} seguidores</p>
          </IconContainer>
        </div>
      </InfoContainer>
    </ProfileCardContainer>
  )
}
