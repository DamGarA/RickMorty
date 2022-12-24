import React from "react"
import Cards from "./Cards"
import styled from "styled-components"
import btnStyles from '../CSS Modules/botones.module.css'

export default class Home extends React.Component {
    // constructor (props) {
    //     super (props)
    // }

    render () {
        return <>
            <H1Home>Rick & Morty´s characters</H1Home>
            <DivBorrar className={btnStyles.container}>
                <button className={btnStyles.btn} onClick={this.props.onDelete}>
                    <span className={btnStyles.btnText}>Delete All</span>
                </button>
            </DivBorrar>
            <br/>
            <br/>
            <br/>
            <Cards characters={this.props.characters} onClose={this.props.onClose}/>
        </>
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
    position: relative;
    left: 500px;
    top: 40px;
    border-radius: 10px;
    border: 2px solid white;
`
const DivBorrar = styled.div`
    position: absolute;
    right: 300px;
`