import { Header } from "../../components/header/index.jsx";
import { Buttons } from "../../components/button/index.jsx";
import { Container, Content } from "./styles.js";
import { Return } from "../../components/Return/index.jsx";
import { Section } from "../../components/section/index.jsx";
import { Tag } from "../../components/tag/index.jsx";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api.js";

export function Details() {
  const [data, setData] = useState(null);
  
  const params = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fetchNote();
  });

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover a nota?")

    if(confirm) {
      await api.delete(`/notes/${params.id}`)
      navigate(-1)
    }
  }

  function handleBack() {
    navigate(-1)
  }

  return (
    <Container>
      <Header />
      {data && (
        <main>
          <Content>
            <div className="detailsContentHeader">
              <Return onClick={handleBack}></Return>
              <Buttons 
               className="deleteNote" 
               title="Excluir nota"
               onClick={handleRemove}></Buttons>
            </div>
            <Section title={data.title}>
              {data.tags && (
                <div id="tags">
                  {data.tags.map((tag) => (
                    <Tag
                      className="detailsTag"
                      key={String(tag.id)}
                      title={tag.name}
                    ></Tag>
                  ))}
                </div>
              )}
              <div id="text">
                <p>{data.description}</p>
              </div>
            </Section>
          </Content>
        </main>
      )}
    </Container>
  );
}
