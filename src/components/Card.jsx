import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { addCharacter, deleteCharacter } from '../redux/actions.js';

function Card(props) {
   const [isFav, setIsFav] = useState (props.id)

   const funcEliminar = () => {
      props.onClose(props.name)
   }

   const handleFavorite = () => {
      if (isFav === props.name) {
         setIsFav(props.id);
         props.deleteCharact(props.name)
      } else {
         setIsFav(props.name);
         props.addCharact(props);
        
      }
   }

   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(props.name);
         }
      });
   },);

   return (
      <DivCard>
         {
         isFav === props.name ? (
             <button onClick={handleFavorite}>❤️</button>
         ) : (
           <button onClick={handleFavorite}>🤍</button>
        )
         }
         <BotonX onClick={() => funcEliminar()}>X</BotonX>
         <Link to={`/detail/${props.id}`}>
            <Nombre>{props.name}</Nombre>
         </Link>
         <Especie>{props.species}</Especie>
         <Genero>{props.gender}</Genero>
         <ImgElem  src={props.image} alt="Si no aparece" />
         
      </DivCard>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addCharact: (character) => dispatch(addCharacter(character)),
      deleteCharact: (name) => dispatch(deleteCharacter(name)),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)

//Estilos 

const DivCard = styled.div`
   background-color: #8c00ffc7;
   width: 200px;
   height: 380px;
   margin: 5px;
   border-radius: 10px;
   border: 5px solid #3a045ffc;

`
const ImgElem = styled.img`
   width: 170px;
   height: 170px;
   margin: auto;
   display: block;
   border: 3px solid #370771;
   border-radius: 5px;
`

const Nombre = styled.h2`
   text-align: center;
   margin: 2px;
`

const Especie = styled.h2`
   text-align: center;
   margin: 2px;
`

const Genero = styled.h2`
   text-align: center;
   margin: 2px;
`

const BotonX = styled.button`
   text-align: center;
   color: white;
   margin: 1px;
   margin-left: 170px;
   margin-top: 6px;
   background-color: red;
`

