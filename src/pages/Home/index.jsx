import { Link } from 'react-router-dom';
import './style.css';

function Home() {
    return (
        <>
          <h2>Bem-vindo a esse trem DIFICIL</h2>
          <Link to="/about">
          <button>Navegar no About</button>
          </Link>
        </>
    )
}

export default Home