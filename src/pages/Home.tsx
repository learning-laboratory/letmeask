import illustrationImg from "../assets/images/illustration.svg";
import googleIconImg from "../assets/images/google-icon.svg";
import logoImg from "../assets/images/logo.svg";
import { Button } from "../components/Button";
import "../styles/auth.scss";
import { useHistory } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { FormEvent, useState} from "react";
import { database } from "../services/firebase";

export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();
  const [roomCode, setRoomCode] = useState("");

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }
    history.push("/rooms/create");
  }

  async function handleJoinRoom(event: FormEvent){
    event.preventDefault();
    
    if(roomCode.trim() === '')
      return;

    const roomRef = await database.ref(`rooms/${roomCode}`).get()
    if(!roomRef.exists()){
      alert("Room does not exists")
      return;
    }

    history.push(`/rooms/${roomCode}`)
  }
  
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
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImg} alt="Logo da Google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">Ou entre em sua sala</div>
          <form onSubmit={handleJoinRoom}>
            <input type="text" placeholder="Digite o código da sala" onChange={event => setRoomCode(event.target.value)} value={roomCode} />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
