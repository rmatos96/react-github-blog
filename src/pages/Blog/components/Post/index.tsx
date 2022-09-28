import { formatDistanceToNow } from "date-fns";
import { useEffect, useState } from "react";
import { api } from "../../../../lib/axios";
import { PostContent } from "./styles";
import { ptBR } from "date-fns/locale"

export interface IPost {
  title: string;
  body: string;
  created_at: string;
  number: number;
}

export interface PostProps extends React.HTMLAttributes<HTMLDivElement> {
  post: IPost
}

export function Posts({ post: { title, body, created_at }, ...rest }: PostProps) {

  return (
    <PostContent {...rest}>
      <div>
        <b>{title}</b>
        <span>{formatDistanceToNow(new Date(created_at), {
          addSuffix: true,
          locale: ptBR
        })}</span>
      </div>
      <p>{body}</p>
    </PostContent>
  )
}
