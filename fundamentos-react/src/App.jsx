import React from 'react'
import Primeiro from './components/basicos/primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/aleatorio'
import Card from './components/layout/card'
import "./App.css"
import Familia from './components/basicos/familia'
import FamiliaMembro from './components/basicos/familiaMembro'
import ListaAlunos from './components/repeticao/listaAlunos'
import ListaProdutos from './components/repeticao/listaProdutos'
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import DiretaPai from './components/comunicacao/diretaPai'
import IndiretaPai from './components/comunicacao/indiretaPai'
import Input from './components/formulario/input'
import Contador from './components/contador/contador.jsx'
import MegaSena from './components/megasena/display'


export default () =>
    <div className="App">

        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="#13 Mega-Sena" color="#BC8F8F">
                <MegaSena></MegaSena>
            </Card>  

            <Card titulo="#12 Contador" color="#424242">
                <Contador numeroInicial = {10}></Contador>
            </Card>  

            <Card titulo="#11 Componente Controlado (Input)" color="#E45F56">
                <Input></Input>
            </Card>  

            <Card titulo="#10 Comunicacao Indireta" color="#8BAD39">
                <IndiretaPai></IndiretaPai>
            </Card>  
            <Card titulo="#09 Comunicacao Direta" color="#59323C">
                <DiretaPai></DiretaPai>
            </Card>   

            <Card titulo="#08 Renderizacao Condicional" color="#982395">
                <ParOuImpar numero = {21}></ParOuImpar>
                <UsuarioInfo usuario={{nome: 'Fernando'}}></UsuarioInfo>
            </Card>   
            <Card titulo="#07 Desafio Repeticao" color="#3A9AD9">
                <ListaProdutos></ListaProdutos>
            </Card>

            <Card titulo="#06 Repeticao" color="#FF4C65">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#05 Componente com Filhos" color="#00C8F8">
                <Familia  sobrenome="Silva">
                    <FamiliaMembro nome = "Pedro" />                    
                    <FamiliaMembro nome = "Ana"  />
                    <FamiliaMembro nome = "Gustavo" />
                </Familia>
            </Card>

            <Card titulo="#04 Desafio Aleatorio" color="#FA6900">
                <Aleatorio minimo={1} maximo={60} />
            </Card>

            <Card titulo="#03 Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>

            <Card titulo="#02 Com Parametro" color="#E8B71A">
                <ComParametro
                    titulo="Situacao do Aluno"
                    aluno="Pedro" nota={6.9} />
                <ComParametro
                    titulo="Situacao do Aluno"
                    aluno="Maria" nota={9.9} />
            </Card>

            <Card titulo="#01 Primeiro Componente" color="#588C73">
                <Primeiro />
            </Card>
        </div>
    </div>