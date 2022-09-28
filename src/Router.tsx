import { Route, Routes } from 'react-router-dom'
import { Layout } from './layouts/Default'
import { Blog } from './pages/Blog'
import { Post } from './pages/Post'

export function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Blog />} />
        <Route path="/post" element={<Post />} />
      </Route>
    </Routes>
  )
}