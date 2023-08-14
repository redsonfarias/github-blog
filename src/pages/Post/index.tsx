import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '@/lib/axios'
import { PostHeader } from './components/PostHeader'
import { PostBody } from './components/PostBody'
import { REPOSITORY, USERNAME } from '@/utils/constants'

interface IPost {
  title: string
  body: string
  comments: number
  user: string
  createdAt: string
  url: string
}

export function Post() {
  const [post, setPost] = useState<IPost | null>(null)

  const { number } = useParams()

  useEffect(() => {
    async function fetchPost() {
      const response = await api.get(
        `/repos/${USERNAME}/${REPOSITORY}/issues/${number}`
      )
      const { data } = response

      setPost({
        title: data.title,
        body: data.body,
        comments: data.comments,
        user: data.user.login,
        createdAt: data.created_at,
        url: data.html_url
      })
    }

    fetchPost()
  }, [number])

  if (!post) {
    return null
  }

  const { title, body, comments, createdAt, url, user } = post

  return (
    <>
      <PostHeader
        title={title}
        url={url}
        comments={comments}
        createdAt={createdAt}
        user={user}
      />
      <PostBody body={body} />
    </>
  )
}
