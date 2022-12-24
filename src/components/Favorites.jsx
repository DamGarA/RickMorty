import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import styled from "styled-components"
import Cards from "./Cards";
import { deleteAll, deleteCharacter } from "../redux/actions";
import btnStyles from '../CSS Modules/botones.module.css'

function Favorites (props) {
    const [characters, setCharacters] = useState(props.charactersFav)

    const onClose = (character) => {
        setCharacters((oldChars) => oldChars.filter(char => char.name!==character));
        props.deleteCharact(character)
       }
    
    const borrarFavoritos = () => {
        props.deleteAll();
    }

    useEffect(()=> {
        setCharacters(props.charactersFav)
    }, [props.charactersFav])

    return <div>
        <H1Fav> My Favorite Characters</H1Fav>
        <DivBorrar className={btnStyles.container}>
                <button className={btnStyles.btn} onClick={borrarFavoritos}>
                    <span className={btnStyles.btnText}>Delete Favorites</span>
                </button>
        </DivBorrar>
        <br/>
        <br/>
        <br/>
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
        deleteCharact: (name) => dispatch(deleteCharacter(name)),
        deleteAll: () => dispatch(deleteAll())
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