import { useState } from 'react';
import './style.css';

function SignUp() {
    const [ nome, setNome ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ senha, setSenha ] = useState("")

    function handleSubmit(event) {
        event.preventDefault();
        console.log(nome,email,senha)
    }

    return (
        <>
        <h2>Criar Conta</h2>

        <form onSubmit={handleSubmit}>
            <label>Nome</label>
            <input 
            type="text" 
            value={nome}
            onChange={ (event) => setNome(event.target.value)}
            />

            <label>E-mail</label>
            <input 
            type="email" 
            value={email}
            onChange={ (event) => setEmail(event.target.value)}
            />

            <label>Senha</label>
            <input 
            type="password" 
            value={senha}
            onChange={ (event) => setSenha(event.target.value)}
            />

            <button type="submit">Cadastrar-se</button>
        </form>
        </>
    )
}

export default SignUp