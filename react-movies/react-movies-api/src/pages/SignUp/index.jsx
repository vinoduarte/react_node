import { Input } from "../../components/Input";
import { Container, Form, Background } from "./styles";
import { IoMail } from "react-icons/io5";
import { IoLockClosed } from "react-icons/io5";
import { IoMdPerson } from "react-icons/io";
import { Buttons } from "../../components/button";
import { RiArrowLeftLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useState, userState } from "react";
import { api } from "../../services/api.js"
import { useNavigate } from "react-router-dom";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  function handleSignUp() {
    if(!name || !email || !password) {
      return alert("Preencha todos os campos!")
    }

    api.post("/users", { name, email, password }).then(() => {
        alert("Usuário cadastrado com sucesso!")
        navigate("/")
      }).catch(error => {
        if(error.response) {
          alert(error.response.data.message)
        } else {
          alert("Não foi possível cadastrar")
        }
      })
    }

    function handleBack() {
      navigate(-1)
    }
  

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Crie sua conta</h2>
        <div class="inputs">
          <Input 
            icon={IoMdPerson} 
            placeholder="Nome"
            onChange={e => setName(e.target.value)}
            />
          <Input 
            icon={IoMail} 
            type="email" 
            placeholder="E-mail"
            onChange={e => setEmail(e.target.value)}
            />
          <Input
            icon={IoLockClosed}
            type="password"
            placeholder="Senha"
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <Buttons className="submitButton" title="Entrar" onClick={handleSignUp}></Buttons>
        <Link className="returnButton" onClick={handleBack}>
          <RiArrowLeftLine />
          Voltar para o login
        </Link>
      </Form>
      <Background />
    </Container>
  )
}
