import React from 'react'

export default props => {
    return (
        <div>
            <label htmlFor="">Passo: </label>
            <input id="passoInput" type="number" value={props.statePasso} onChange={props.change}/>
        </div>
    )


}