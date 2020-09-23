import React from 'react'
import DiretaFilho  from './diretaFilho'

export default props => {
    return (
        <div>
            <DiretaFilho nome = "Junior" idade={20} nerd = {true}></DiretaFilho>
            <DiretaFilho nome = "Gabriel" idade={17} bool = {false}></DiretaFilho>
        </div>
    )
}