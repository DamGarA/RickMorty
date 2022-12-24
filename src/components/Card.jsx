import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { addCharacter, deleteCharacter } from '../redux/actions.js';
import linkStyles from '../CSS Modules/botones.module.css'

function Card(props) {
   const [isFav, setIsFav] = useState ("")

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
             <BotonFav onClick={handleFavorite}>❤️</BotonFav>
         ) : (
           <BotonFav onClick={handleFavorite}>🤍</BotonFav>
        )
         }
         <BotonX onClick={() => funcEliminar()}>X</BotonX>
         <DivInfo>
            <Link to={`/detail/${props.id}`} className={linkStyles.link}>
               <NombreH2>{props.name}</NombreH2>
            </Link>
            <InfoH2>{props.species}</InfoH2>
            <InfoH2>{props.gender}</InfoH2>
         </DivInfo>
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
   height: 350px;
   margin: 5px;
   border-radius: 10px;
   border: 3px solid #3a045ffc;
   position: relative;
   border-color: white;
`
const ImgElem = styled.img`
   width: 170px;
   height: 170px;
   margin: auto;
   display: block;
   border: 3px solid #370771;
   border-radius: 15px;
   position: absolute;
   bottom: 10px;
   left: 13px;
   border-color: white;
`

const NombreH2 = styled.h2`
   background-color: white;
   text-align: center;
   margin: 5px;
   color:  black;
   display: block;
   border-radius: 10px;
`

const DivInfo = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-around;
`

const InfoH2 = styled.h2`
   margin: 0px;
   text-align: center;
   color: lime;
`

const BotonX = styled.button`
   text-align: center;
   color: white;
   background-color: red;
   display: inline;
   position: absolute;
   right: 1px;
   top: 1px;
   border-radius: 5px;
   margin-bottom: 0px;
`
const BotonFav = styled.button`
   background-color: lime;
   border-radius: 5px;
   margin-bottom: 0px;
`

