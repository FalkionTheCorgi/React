import React, {useState} from 'react'
import Numeros from './numeros'



export default props => {
    const [resultado, setResultado] = useState('Sem Resultado Divulgado')
    const [divulga, setBool] = useState(false)

    function fornecerInformacoes(resultado, resposta){
        setResultado(resultado)
        setBool(resposta)
    }


    return (
        <div>
            <h1>Mega Sena</h1>
            <span> { divulga ? resultado : resultado } </span>
            <Numeros quandoClicar={fornecerInformacoes} ></Numeros>   
        </div>
    )
}