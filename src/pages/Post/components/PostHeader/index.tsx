import { formatDistance, formatDistanceToNow } from 'date-fns';
import { ArrowLeft, ArrowLineUpRight, Calendar, ChatCircle, GithubLogo } from 'phosphor-react'
import { relativeDateFormatter } from '../../../../utils/formatter';
import { BackIcon, GithubAccess, GithubPostIcons, PostHeaderContainer } from './styles'

interface PostHeaderProps {
  title?: string;
  user?: string;
  date?: string;
  comments?: number;
}

export function PostHeader({ title, user, date, comments }: PostHeaderProps) {
  const dateFormatted = relativeDateFormatter(date || '')

  return (
    <PostHeaderContainer>

      <BackIcon to={'/'}>
        <ArrowLeft size={20} color={'#3294F8'} />
        VOLTAR
      </BackIcon>

      <GithubAccess>VER NO GITHUB
        <ArrowLineUpRight size={20} color={'#3294F8'} />
      </GithubAccess>

      <h1>{title}</h1>
      <GithubPostIcons>
        <GithubLogo size={20} style={{ color: 'white', opacity: '0.4' }} />
        <a>{user}</a>
        <Calendar size={20} style={{ color: 'white', opacity: '0.4' }} />
        <a>{dateFormatted}</a>
        <ChatCircle size={20} style={{ color: 'white', opacity: '0.4' }} />
        <a>{comments} Comentários</a>
      </GithubPostIcons>
    </PostHeaderContainer>
  )
}
