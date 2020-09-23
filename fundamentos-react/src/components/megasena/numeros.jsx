import React from 'react'
import Numeros from '../../data/numeros.js'
import './numeros.css'

export default props => {

    const cb = props.quandoClicar

    const numerosLi = Numeros.map((numero) =>{
        return (
            <td>{numero}</td>
        )
    })    

    const gerarTabela = () => <div className="table-megasena">
        <table>
            <thead>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
            </thead>
            <tbody>
            <tr>
                {numerosLi}
            </tr>
            </tbody>
        </table> 
        </div>

    function refazerSorteio(){
        return 'Sorteio Escondido'  
    }    

    return (
        <div>

            <button onClick={_=>cb(gerarTabela(), true)}>Fornecer Informacoes</button>
            <button onClick={_=> cb(refazerSorteio(),false)}>Esconder Sorteio</button>    

        </div>
    )

}