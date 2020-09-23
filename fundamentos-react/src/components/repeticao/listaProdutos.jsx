import './TabelaProdutos.css'
import React from 'react'
import produtos from '../../data/produtos'

export default (props) => {

const produtosLi = produtos.map((produto, i) =>{
    return ( <>
        <tr key={produto.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
            <td>{produto.id}</td> 
            <td>{produto.nome}</td> 
            <td>{produto.valor}</td>
        </tr>
            </>
    )
})            
    return (
        <div className="TabelaProdutos">
            <table>
                <thead>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Preco</th>
                </thead>
                <tbody>
                    {produtosLi}
                </tbody>
            </table>
        </div>
    )
}