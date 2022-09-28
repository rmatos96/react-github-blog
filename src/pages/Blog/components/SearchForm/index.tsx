import { SearchFormContainer } from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

const schema = z.object({
  query: z.string()
})

type SearchFormInput = z.infer<typeof schema>

export default function SearchForm() {
  const {register, handleSubmit} = useForm<SearchFormInput>({
    resolver: zodResolver(schema)
  })

  function handleSearchPosts(data: SearchFormInput) {
    console.log(data);
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <input type="text" placeholder="Buscar conteúdo" {...register('query')}/>
    </SearchFormContainer>
  )
}
