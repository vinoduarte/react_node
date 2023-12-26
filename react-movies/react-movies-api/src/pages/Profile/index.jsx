import { Container, Content } from "./styles";
import { Return } from "../../components/Return";
import { IoCamera } from "react-icons/io5";
import { IoMdPerson } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { IoLockClosed } from "react-icons/io5";
import { Input } from "../../components/Input";
import { Buttons } from "../../components/button";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function Profile() {
  const { user, updateProfile } = useAuth();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();

  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  const navigate = useNavigate()



  async function handleUpdate() {
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld
    }
    
    const userUpdated = Object.assign(user, updated)
    await updateProfile({ user: userUpdated, avatarFile })
  }


  function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  function handleBack() {
    navigate(-1)
  }

  return (
    <Container>
      <header>
        <div class="return">
          <Return onClick={handleBack}></Return>
        </div>
        <div class="imgDiv">
          <img src={avatar}></img>
          <div className="camera">
            <IoCamera></IoCamera>
            <input type="file" onChange={handleChangeAvatar}></input>
          </div>
        </div>
      </header>
      <main>
        <Content>
          <div class="profileInfos">
            <div class="secondInput">
              <Input icon={IoMdPerson} placeholder="Nome" value={name} onChange={e => setName(e.target.value)}></Input>
              <Input icon={IoMail} type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}></Input>
            </div>
            <Input
              icon={IoLockClosed}
              type="password"
              placeholder="Senha atual"
              onChange={e => setPasswordOld(e.target.value)}
            ></Input>
            <Input
              icon={IoLockClosed}
              type="password"
              placeholder="Nova senha"
              onChange={e => setPasswordNew(e.target.value)}
            ></Input>
          </div>
          <Buttons title="Salvar" onClick={handleUpdate}></Buttons>
        </Content>
      </main>
    </Container>
  );
}
