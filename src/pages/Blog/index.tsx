import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { api } from "../../lib/axios";
import { PostProps, Posts } from "./components/Post";
import { Profile } from "./components/Profile";
import SearchForm from "./components/SearchForm";
import { PostsContainer, PublishedContainer } from "./styles";


export function Blog() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  async function getRepository() {
    const response = await api.get('/search/issues?q=%20repo:rmatos96/github-blog')
    setPosts(response.data.items);
  }

  useEffect(() => {
    getRepository()
  }, [])

  return (
    <div>
      <Profile />
      <PublishedContainer>
        <h2>Publicações</h2>
        <span>{posts.length} Publicações</span>
        <SearchForm />
        <PostsContainer>
          {posts.map((post) => {
            return (
              <Posts key={post.number} post={post}/>
            )
          })}
        </PostsContainer>
      </PublishedContainer>
    </div>
  )
}
