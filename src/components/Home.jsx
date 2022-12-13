import React from "react"
import Cards from "./Cards"
import styled from "styled-components"

export default class Home extends React.Component {
    constructor (props) {
        super (props)
    }



    render () {
        return <div>
            <H1Home>Personajes de Rick and Morty</H1Home>
            
            <Cards characters={this.props.characters} onClose={this.props.onClose}/>
        </div>
    }
}

//Estilos

const H1Home = styled.h1`
    color: white;
    font-size: x-large;
    background-color: #880ebcef;
    padding: 20px;
    text-align: center;
    display: inline;
    margin: 300px 0px 0px 500px;
    border-radius: 10px;
    border: 2px solid white;
`