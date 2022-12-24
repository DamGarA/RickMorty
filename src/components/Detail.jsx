import React, {useState, useEffect} from "react"
import styled from "styled-components"
import { useParams } from "react-router-dom"
import img from "../portalVerde.jpg"

export default function Detail () {
    const { detailId } = useParams()

    let [character, setCharacter] = useState([])

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
           .then((response) => response.json())
           .then((char) => {
              if (char.name) {
                console.log(char)
                 setCharacter({
                    name: char.name,
                    status: char.status,
                    species: char.species,
                    gender: char.gender,
                    origin: char.origin.name,
                    type: char.type,
                    image: char.image
                });
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           })
           .catch((err) => {
            
              window.alert('No hay personajes CON ese ID');
           });
        return setCharacter({});
     }, [detailId]);

    return <>
            <H1Detail>Detalles del personaje</H1Detail>
            <DivDetalles>            
              <ImageDetail src={character.image}/>
              <DivInfo>
                <InfoP>Nombre: {character.name}</InfoP>
                <InfoP>Estatus: {character.status}</InfoP>
                <InfoP>Especie: {character.species}</InfoP>
                <InfoP>Género: {character.gender}</InfoP>
                <InfoP>Origen: {character.origin}</InfoP>
                {character.type && <InfoP>Tipo: {character.type}</InfoP>}
              </DivInfo>        
            </DivDetalles>
        </>
}

//Estilos

const DivDetalles = styled.div`
    display: flex;
    flex-direction: row;
`
const DivInfo = styled.div`
    margin-left: 20px;
    margin-top: 100px;
    border: 6px solid #4407a0;
    border-radius: 14px;
    width: 300px;
    height: 300px;
    max-height: 300px;
    background-image: url(${img});
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-around
   
`

const InfoP = styled.p`
    color: black;
    margin: 2px;
    width: 289px;
    text-align: center;
    font-size: 25px;
    font-weight: 800;
`
const ImageDetail = styled.img`
    width: 300px;
    height: 300px;
    border: 6px solid #4407a0;
    border-radius: 14px;
    margin-left: 350px;
    margin-top: 100px;
`
const H1Detail = styled.h1`
    color: white;
    font-size: x-large;
    background-color: #880ebcef;
    padding: 20px;
    text-align: center;
    display: inline;
    position: relative;
    left: 550px;
    top: 40px;
    border-radius: 10px;
    border: 2px solid white;
`