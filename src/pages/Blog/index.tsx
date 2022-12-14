import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../lib/axios";
import { IPost, Posts } from "./components/Post";
import { Profile } from "./components/Profile";
import SearchForm from "./components/SearchForm";
import { FullContainer, PostsContainer, PublishedContainer } from "./styles";


export function Blog() {
  const [posts, setPosts] = useState<IPost[]>([]);

  async function getRepository() {
    const response = await api.get('/search/issues?q=%20repo:rmatos96/github-blog')
    setPosts(response.data.items);
  }

  useEffect(() => {
    getRepository()
  }, [])

  const navigate = useNavigate()

  function handleOpenPost(id: number) {
    navigate(`/post/${id}`)
  }

  async function getPosts(query?:string) {
    const response = await api.get(`/search/issues?q=${query}%20repo:rmatos96/github-blog`)
    setPosts(response.data.items)
  }

  return (
    <FullContainer>
      <Profile />
      <PublishedContainer>
        <h2>Publicações</h2>
        <span>{posts.length} Publicações</span>
        <SearchForm getPosts={getPosts}/>
        <PostsContainer>
          {posts.map((post) => {
            return (
              <Posts onClick={() => handleOpenPost(post.number)} key={post.number} post={post}/>
            )
          })}
        </PostsContainer>
      </PublishedContainer>
    </FullContainer>
  )
}
