
import Home from './components/Home.jsx'
import Nav from './components/Nav.jsx'
import React,{ useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './components/About.jsx'
import Detail from './components/Detail.jsx'
import Error from './components/Error.jsx'
import Contacto from './components/Contacto.jsx'
import Favorites from './components/Favorites.jsx'

function App () {
  let [characters, setCharacters] = useState([])

  const onRandom = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          characters.forEach((char) => {
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

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character`)
      .then((res) => res.json())
      .then(data => {

        characters.forEach(c => {
         

          if (c.name.toUpperCase() === character.toUpperCase()) {
            window.alert("Ya existe");
            character = "e"
          }
        })

        

        data.results.forEach(char => {
          if (char.name.toUpperCase() === character.toUpperCase()) {
            setCharacters((oldChars) => [...oldChars, char]);
            character = "n"
          }
        })

        if (character !== "e" && character !== "n") {
          window.alert("No existe")
        }


      })
  }

 const onClose = (character) => {
  setCharacters((oldChars) => oldChars.filter(char => char.name!==character))
 }

 const onDelete = () => {
  setCharacters([])
 }

  return (
    <>
      <div>
        <Nav onRandom={onRandom} onSearch={onSearch}/>
      </div>
      <div>
        <Routes>
          <Route path='/' element={<Home characters={characters} onClose={onClose} onDelete={onDelete}/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/detail/:detailId' element={<Detail/>} />
          <Route path='/contact' element={<Contacto/>} />
          <Route path='/favorites' element={<Favorites/>} />
          <Route path='*' element={<Error/>} />
        
        </Routes>
      </div>
      
    </>
  )
}

export default App



// const DivPadre = styled.div`
   
// `
