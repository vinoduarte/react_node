import { Container, Content } from "./styles";
import { Header } from "../../components/header";
import { Return } from "../../components/Return";
import { Input } from "../../components/Input";
import { Buttons } from "../../components/button";
import { Tag } from "../../components/tag";
import { IoAdd } from "react-icons/io5";
import { InputNew } from "../../components/InputNew";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { AddTag } from "../../components/addTag";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function NewNote() {
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(Number);
  const navigate = useNavigate()

  function handleAddTag() {
    if (!newTag) {
      return alert("Escreva algo na tag para a adicionar.")
    }
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("")
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag!== deleted))
  }

  async function handleNewNote() {
    if(!title) {
      return alert("Digite o título da nota.")
    }

    if(newTag) {
      return alert("Você deidxou uma tag no campo para adicionar, mas não clicou para confirmar. Confirme ou deixe o campo vazio.")
    }

    if(rating > 5 || rating < 1) {
      return alert("Você precisa de escolher uma nota entre 1 e 5!")
    }

    await api.post("/notes", {
      title,
      description,
      tags,
      rating
    })

    alert("Nota criada com sucesso!")
    navigate("/")
  }

  function handleBack() {
    navigate(-1)
  }


  return (
    <Container>
      <Header></Header>
      <main>
        <Content>
          <Return onClick={handleBack}></Return>
          <div id="addingMovie">
            <h1>Novo filme</h1>
            <div id="titleandscore">
              <Input
               placeholder="Título"
               onChange={e => setTitle(e.target.value)} />
              <Input
               placeholder="Sua nota de 1 a 5"
               type="number"
               onChange={e => setRating(e.target.value)}
                />
            </div>
            <InputNew
             placeholder="Escreva uma breve descrição do filme"
             onChange={e => setDescription(e.target.value)} />
          </div>
          <h2>Marcadores</h2>
          <div id="addingMovieTags">
            {
             tags.map((tag, index) => (
              <AddTag 
                key={String(index)}
                value={tag}
                onClick={() => handleRemoveTag(tag)}></AddTag>
              ))
            }
              <AddTag
               placeholder="Novo marcador"
               isNew
               value={newTag}
               onClick={handleAddTag}
               onChange={e => setNewTag(e.target.value)}></AddTag>
              
          </div>
          <div id="deleteOrSave">
            <Buttons className="submit" title="Salvar alterações" onClick={handleNewNote} />
          </div>
        </Content>
      </main>
    </Container>
  );
}
