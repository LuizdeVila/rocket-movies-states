import { Routes, Route } from 'react-router-dom'

import { Profile } from '../pages/Profile'
import { Home } from '../pages/Home'
import { CreateMovie } from '../pages/CreateMovie'
import { PreviewMovie } from '../pages/PreviewMovie'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/create" element={<CreateMovie />} />
      <Route path="/preview" element={<PreviewMovie />} />
    </Routes>
  )
}