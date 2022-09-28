import { ArrowLeft, ArrowLineUpRight, Calendar, ChatCircle, GithubLogo } from 'phosphor-react'
import React from 'react'
import { BackIcon, GithubAccess, GithubPostIcons, PostHeaderContainer } from './styles'

export function PostHeader() {
  return (
    <PostHeaderContainer>

      <BackIcon to={'/'}>
        <ArrowLeft size={20} color={'#3294F8'} />
        VOLTAR
      </BackIcon>

      <GithubAccess>VER NO GITHUB
        <ArrowLineUpRight size={20} color={'#3294F8'} />
      </GithubAccess>

      <h1>JavaScript data types and data structures</h1>
      <GithubPostIcons>
        <GithubLogo size={20} style={{ color: 'white', opacity: '0.4' }} />
        <a>rmatos96</a>

        <Calendar size={20} style={{ color: 'white', opacity: '0.4' }} />
        <a>Há 1 dia</a>

        <ChatCircle size={20} style={{ color: 'white', opacity: '0.4' }} />
        <a>5 Comentários</a>
      </GithubPostIcons>
    </PostHeaderContainer>
  )
}
