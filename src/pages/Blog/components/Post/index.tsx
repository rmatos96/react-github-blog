import { formatDistanceToNow } from "date-fns";
import { useEffect, useState } from "react";
import { api } from "../../../../lib/axios";
import { PostContent } from "./styles";
import { ptBR } from "date-fns/locale"


export interface PostProps {
  title: string;
  body: string;
  created_at: string;
  number: number;
  /* html_url: string;
  comments: number; */ 
}

export function Posts({ post }: { post: PostProps }) {
  
  return (
    <PostContent>
      <div>
        <b>{post.title}</b>
        <span>{formatDistanceToNow(new Date (post.created_at), {
          addSuffix: true,
          locale: ptBR
        })}</span>
      </div>
      <p>{post.body}</p>
    </PostContent>
  )
}
