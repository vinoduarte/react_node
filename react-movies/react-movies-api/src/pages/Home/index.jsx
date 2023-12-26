import { Container, Content } from "./styles";
import { MovieOption } from "../../components/MovieOption";
import { useState, useEffect } from "react";

import { Header } from "../../components/header";
import { ButtonHome } from "../../components/buttonHome";
import { Note } from "../../components/Note";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

export function Home() {
  const [notes, setNotes] = useState([]);
  const { signOut, user } = useAuth();
  const [search, setSearch] = useState("");
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}`);
      setNotes(response.data);

    }
    fetchNotes();
  }, [search]);

  function handleDetails(id) {
    navigate(`/details/${id}`)

  }

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;
  return (
    <Container>
      <div className="header">
        <h1>RocketMovies</h1>
        <Input
          placeholder="Pesquise o filme pelo título"
          onChange={(e) => setSearch(e.target.value)}
        ></Input>
        <div>
          <div className="Profile">
            <div id="text">
              <h1>{user.name}</h1>
              <Link onClick={signOut} to="/">sair</Link>
            </div>
            <Link to="profile">
              <img src={avatarUrl}></img>
            </Link>
          </div>
        </div>
      </div>
      <main>
        <Content>
          <div id="moviesHeader">
            <h1>Meus filmes</h1>
            <ButtonHome
              to="newnote"
              id="HomeButton"
              title="Adicionar filme"
            ></ButtonHome>
          </div>
          <div className="notes">
          {notes.map((note) => (
            <Note
              className="note"
              key={String(note.id)}
              data={{
                title: note.title,
                textPreview: note.description,
                rating: note.rating,
                tags: note.tags,
              }}
              onClick={() => handleDetails(note.id)}
            ></Note>
          ))}
          </div>
        </Content>
      </main>
    </Container>
  );
}
