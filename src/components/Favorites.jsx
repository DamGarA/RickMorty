import React, {useState} from "react";
import { connect } from "react-redux";
import styled from "styled-components"
import Cards from "./Cards";
import { deleteCharacter } from "../redux/actions";

function Favorites (props) {
    const [characters, setCharacters] = useState(props.charactersFav)

    const onClose = (character) => {
        setCharacters((oldChars) => oldChars.filter(char => char.name!==character));
        props.deleteCharact(character)
       }

    return <div>
        <H1Fav> Mis cartas favoritas</H1Fav>
        <Cards characters={characters} onClose={onClose}/>
    </div>
}

const mapStateToProps = (state) => {
    return {
        charactersFav: state.myFavorites
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteCharact: (name) => dispatch(deleteCharacter(name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)

//Estilos

const H1Fav = styled.h1`
    color: white;
    font-size: x-large;
    background-color: #880ebcef;
    padding: 20px;
    text-align: center;
    display: inline;
    margin-left: 550px;
    border-radius: 10px;
    border: 2px solid white;
`