import { GithubIcon, ProfileContainer, ProfileIcons } from './styles'
import { ArrowLineUpRight, Buildings, GithubLogo, Users } from 'phosphor-react'
import { api } from '../../../../lib/axios'
import { useEffect, useState } from 'react'

interface ProfileProps {
  name: string | undefined,
  login: string,
  avatar_url: string,
  bio: string,
  followers: number
}

export function Profile() {
  const [profile, setProfile] = useState<ProfileProps>()

  async function getProfile() {
    const response = await api.get('users/rmatos96')
    setProfile(response.data)
  }

  useEffect(() => {
    getProfile()
  }, [])

  return (
    <ProfileContainer>
      <img src={profile?.avatar_url} alt="" />
      <h1>{profile?.name}</h1>
      <GithubIcon target='_blank' href='https://github.com/rmatos96'>
        <span>GITHUB</span>
        <ArrowLineUpRight size={20} color={'#3294F8'}/>
      </GithubIcon>
      <p>{profile?.bio}</p>

      <ProfileIcons>
        <GithubLogo size={20} style={{color:'white', opacity: '0.4'}}/>
        <a>{profile?.login}</a>
        
        <Buildings size={20} style={{color:'white', opacity: '0.4'}}/>
        <a>Rocketseat</a>

        <Users size={20} style={{color:'white', opacity: '0.4'}}/>
        <a>{profile?.followers} seguidores</a>
      </ProfileIcons>
    </ProfileContainer>
  )
}
