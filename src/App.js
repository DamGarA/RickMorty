import Cards from './components/Cards.jsx'
import Home from './components/Home.jsx'
import Nav from './components/Nav.jsx'
import styled from 'styled-components'
import React,{ useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './components/About.jsx'
import Detail from './components/Detail.jsx'
import Error from './components/Error.jsx'
import Contacto from './components/Contacto.jsx'
import Favorites from './components/Favorites.jsx'

function App () {
  let [characters, setCharacters] = useState([])

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {


          characters.map(char => {
            if(char.name === data.name) {
              data.name = "e";
              window.alert('El personaje ya existe')
            }
          })

          if (data.name && data.name !== "e") {
             setCharacters((oldChars) => [...oldChars, data]);
          } else if (data.name !== "e") {
             window.alert('No hay personajes con ese ID');
          }
       });
 }

 const onClose = (character) => {
  setCharacters((oldChars) => oldChars.filter(char => char.name!==character))
 }

  return (
    <DivPadre>
      <div>
        <Nav onSearch={onSearch}/>
      </div>
      <div>
        <Routes>
          <Route path='/' element={<Home characters={characters} onClose={onClose}/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/detail/:detailId' element={<Detail/>} />
          <Route path='/contact' element={<Contacto/>} />
          <Route path='/favorites' element={<Favorites/>} />
          <Route path='*' element={<Error/>} />
        
        </Routes>
      </div>
      
    </DivPadre>
  )
}

export default App

//Estilos

const DivPadre = styled.div`
   
`
