import { useState } from 'react'
import './style.css'

//const numero = Number(prompt("Digite um numero ou vai reprovar de ano"))
//const outronumero = Number(prompt("digite outro numero"))
//alert(numero+outronumero)
function ScriptAtividade1() {
    const [numero, setNumero] = useState("")
    const [outronumero, setOutronumero] = useState("")
    const [ resultado, setResultado ] = useState()

     function handleSubmit(event) {
        event.preventDefault();
        console.log(numero,outronumero)
        setResultado( Number(numero) + Number(outronumero) );
    }

    return (
        <>
      <form onSubmit={handleSubmit}> 
      <label>digite um numero</label>
      <input 
      type="text" 
      value={numero}
      onChange={ (event) => setNumero(event.target.value)}
      />

      <label>digite outro numero</label>
      <input 
      type="text" 
      value={outronumero}
      onChange={ (event) => setOutronumero(event.target.value)}
      />
    
    <p>{resultado}</p>

      <button type="submit">veja resultado</button>
    </form>
        </>
    )
}

export default ScriptAtividade1