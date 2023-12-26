import { Container } from '../header/styles.js'
import { Input } from '../Input'
import { Link } from 'react-router-dom'
import { useAuth } from "../../hooks/auth"
import { api } from '../../services/api.js'
import { useEffect, useState } from 'react'

export function Header() {
  const { signOut, user } = useAuth()
  const [search, setSearch] = useState("")

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}`)
      setNotes(response.data)

      fetchNotes()
    }
  }, [search])

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  return (
    <Container>
      <h1>RocketMovies</h1>
      <Input
       placeholder="Pesquisar pelo título"
       onChange={() => setSearch(e.target.value)} 
       />
      <div className="Profile">
        <div id="text">
          <h1>{user.name}</h1>
          <Link onClick={signOut} to="/">sair</Link>
        </div>
        <Link to="profile"><img src={avatarUrl}></img></Link>
      </div>
    </Container>
  )
}