import React from 'react'
import Card from './Card';
import styled from 'styled-components';

export default function Cards(props) {
   return (
   <DivCards>
      { props.characters.map(p => 
            <Card 
            id={p.id}
            name={p.name}
            species={p.species}
            gender={p.gender}
            image={p.image}
            onClose={props.onClose}
            />
         
      )}
      
   </DivCards>
   )
}

//Estilos

const DivCards = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-around;
   flex-wrap: wrap;
   margin: 50px;
   border: 0px;
`
