import React from 'react'

export default function aleatorio(props) {
    const number = parseInt(Math.random() * (props.maximo - props.minimo) + props.minimo);
    return (<>
               <p> Valor Aleatorio: <strong>{number} </strong> </p>
            </>
            )
}