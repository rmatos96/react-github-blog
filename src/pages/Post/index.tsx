import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { PostContent } from "./components/PostContent";
import { PostHeader } from "./components/PostHeader";

interface Post {
  title: string;
  body: string;
  comments: number;
  created_at: string;
  user: {
    login: string;
  }
}

export function Post() {
  const [post, setPost] = useState<Post>()
  const { id } = useParams()

  async function getPostById() {
    const response = await api.get<Post>(`/repos/rmatos96/github-blog/issues/${id}`)
    setPost(response.data)
  }

  useEffect(() => {
    console.log(id);
    getPostById()
  }, [])

  return (
    <div>
      <PostHeader
        title={post?.title}
        user={post?.user.login}
        date={post?.created_at}
        comments={post?.comments} />
      <PostContent body={post?.body}/>
    </div>
  )
}
