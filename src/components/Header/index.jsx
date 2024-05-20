import { Container, Profile } from './styles'
import { Input } from '../../components/Input'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import { useEffect, useState } from 'react'

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

export function Header() {
  const { signOut, user } = useAuth()
  const [search, setSearch] = useState('')
  const [notes, setNotes] = useState([])

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}`)

      setNotes(response.data)
    }

    fetchNotes()
  }, [search])

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  return (
    <Container>
      <div className='centralize'>
        <h1>RocketMovies</h1>

        <Input
          placeholder="Pesquisar pelo título"
          type="text"
          onChange={e => setSearch(e.target.value)}
        />

        <Profile to="/profile">

          <div>
            <strong>{user.name}</strong>
          </div>

          <img
            src={avatarUrl}
            alt={user.name}
          />
        </Profile>

        <button onClick={signOut}>Sair</button>
      </div>
    </Container>
  )
}