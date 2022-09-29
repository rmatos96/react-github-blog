import { formatDistanceToNow } from "date-fns";
import { useEffect, useState } from "react";
import { PostContent } from "./styles";
import { ptBR } from "date-fns/locale"
import { relativeDateFormatter } from "../../../../utils/formatter";

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
  const dateFormatted = relativeDateFormatter(created_at || '')


  return (
    <PostContent {...rest}>
      <div>
        <b>{title}</b>
        <span>{dateFormatted}</span>
      </div>
      <p>{body}</p>
    </PostContent>
  )
}
