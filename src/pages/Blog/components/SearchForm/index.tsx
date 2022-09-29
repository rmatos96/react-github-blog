import { SearchFormContainer } from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

const schema = z.object({
  query: z.string()
})

interface SearchInpoutProps{
  getPosts: (query?:string) => Promise<void>
}

type SearchFormInput = z.infer<typeof schema>

export default function SearchForm({  getPosts }: SearchInpoutProps) {
  const {register, handleSubmit} = useForm<SearchFormInput>({
    resolver: zodResolver(schema)
  })

  async function handleSearchPosts(data: SearchFormInput) {
    getPosts(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <input type="text" placeholder="Buscar conteúdo" {...register('query')}/>
    </SearchFormContainer>
  )
}
