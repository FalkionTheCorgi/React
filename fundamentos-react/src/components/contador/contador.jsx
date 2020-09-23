import React from 'react'
import './contador.css'
import Display from './display'
import Botoes from './botoes'
import Form from './passoForm'
export default class Contador extends React.Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5,
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo,
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo,
        })
    }

    setPasso = (evento) => {
        this.setState({
            passo: +evento.target.value,
        })
    }

    render() {
        return (
            <div className='Contador'>
                <h2>Contador</h2>
                <Display numero = {this.state.numero } />
                <Form statePasso = {this.state.passo} change = {this.setPasso}></Form>
                <Botoes incrementar = {this.inc} decrementar = {this.dec}></Botoes>
            </div>
        )
    }
}