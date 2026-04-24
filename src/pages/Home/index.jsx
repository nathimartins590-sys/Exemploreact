import { Link } from 'react-router-dom';
import './style.css';

function Home() {
    return (
        <>
          <h2>Bem-vindo a esse trem DIFICIL</h2>
          <Link to="/signup">
          <button>Navegar no SignUp</button>
          </Link>

          <Link to="/scriptatividade1">
          <button>atividade 1</button>
          </Link>
        </>
    )
}

export default Home