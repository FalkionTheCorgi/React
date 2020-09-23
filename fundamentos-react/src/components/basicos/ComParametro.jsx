import React from 'react'

export default function ComParametro(props) {
    console.log(props)
    const status = props.nota >= 7 ? 'Aprovado' : "Recuperacao"
    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>
                <strong> {props.aluno} </strong>
                tem nota
                <strong> {props.nota} </strong>
                e esta
                <strong> {status} </strong>
            </p>
        </div>
    )
}