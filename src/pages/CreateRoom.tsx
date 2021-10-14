import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import "../styles/auth.scss";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";
// import { useAuth } from "../hooks/useAuth";

export function CreateRoom() {
  // const { user } = useAuth();

  return (
    <div id="page-auth">
      <aside>
        <img
          src={illustrationImg}
          alt="Ilustração simbolizando troca de perguntas e repostas"
        />
        <strong>Crie Salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="logo da letmeask" />
          {/* <h3>{user?.name}</h3> */}
          <h3>Criar um nova sala</h3>
          <form>
            <input type="text" placeholder="Nome da Sala" />
            <Button type="submit">Criar sala</Button>
            <p>
              Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>
            </p>
          </form>
        </div>
      </main>
    </div>
  );
}
