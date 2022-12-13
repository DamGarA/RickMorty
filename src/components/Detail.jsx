import React, {useState, useEffect} from "react"
import styled from "styled-components"
import { useParams } from "react-router-dom"

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

    return <DivDetalles>
            <InfoP>Nombre: {character.name}</InfoP>
            <InfoP>Estatus: {character.status}</InfoP>
            <InfoP>Especie: {character.species}</InfoP>
            <InfoP>Género: {character.gender}</InfoP>
            <InfoP>Origen: {character.origin}</InfoP>
            <InfoP>Tipo: {character.type}</InfoP>
            <ImageDetail src={character.image}/>
        
        </DivDetalles>
}

//Estilos

const DivDetalles = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
`
const InfoP = styled.p`
    color: white;
    margin: auto;
    margin-bottom: 10px;
    font-size: x-large;
`
const ImageDetail = styled.img`
    width: 300px;
    height: 300px;
    margin: auto;
    border: 6px solid #4407a0;
    border-radius: 14px;
`