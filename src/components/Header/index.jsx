import { Link } from 'react-router-dom'
import viteLogo from '../../../public/icons.svg'
import reactLogo from '../../assets/react.svg'
import './style.css'

export default function Header() {
    return (
        <header>
            <h1>Minha pagina react</h1>
              <Link to="/signup">
          <button>Navegar no SignUp</button>
          </Link>

          <Link to="/scriptatividade1">
          <button>atividade 1</button>
          </Link>
        </header>
    )
}