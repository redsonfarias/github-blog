import { ChangeEvent, useState } from 'react'
import { api } from '@/lib/axios'
import useSWR from 'swr'
import { Input } from '@/components/Input'
import { useDebounce } from '@/hooks/useDebounce'
import { ProfileCard } from './components/ProfileCard'
import { PostCard } from './components/PostCard'
import { REPOSITORY, USERNAME } from '@/utils/constants'
import { PublicationsInfoContainer, PostsContainer } from './styles'

interface IPostCard {
  number: number
  title: string
  created_at: string
  body: string
}

export function Blog() {
  const [search, setSearch] = useState('')

  const debouncedSearch = useDebounce(search, 1000)

  const fetcher = (url: string) => api.get(url).then((res) => res.data)
  const url = `/search/issues?q=${debouncedSearch}%20repo:${USERNAME}/${REPOSITORY}`

  const { data } = useSWR(url, fetcher)
  const posts: IPostCard[] = data?.items ?? []

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value)
  }

  return (
    <>
      <ProfileCard />
      <PublicationsInfoContainer>
        <p>Publicações</p>
        <p>{posts.length} publicações</p>
      </PublicationsInfoContainer>
      <Input
        value={search}
        onChange={handleSearch}
        placeholder="Buscar conteúdo"
      />
      <PostsContainer>
        {posts.map((post) => (
          <PostCard
            key={post.number}
            number={post.number}
            title={post.title}
            description={post.body}
            createdAt={post.created_at}
          />
        ))}
      </PostsContainer>
    </>
  )
}
