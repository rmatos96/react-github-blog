import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../../../lib/axios'
import { PostContentContainer } from './styles'

interface PostContentProps{
  body?: string
}

export function PostContent({ body }: PostContentProps) {
  return (
    <PostContentContainer>
      <p>{body}</p>
    </PostContentContainer>
  )
}
