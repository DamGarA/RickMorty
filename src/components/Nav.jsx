import React from 'react'
import SearchBar from './SearchBar.jsx'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Nav (props) {
    const funcRandom = () => {
      let num = Math.floor(Math.random()*826);
      props.onSearch(num)
    }

    return ( 
    <NavDiv>
        <SearchBar
          onSearch={props.onSearch}
        />
        <button onClick={funcRandom}>Random</button>
        <Link to='/about'><ButtonAbout>About</ButtonAbout></Link>
        <Link to='/'><button>Home</button></Link>
        <Link to='/contact'><ButtonContacto>Contacto</ButtonContacto></Link>
        <Link to='/favorites'><button>Favoritas</button></Link>
    </NavDiv>
    );
}

//Estilos

const NavDiv = styled.div`
  display: flex;
`

const ButtonContacto = styled.button`
  position: absolute;
  right: 20px;
`
const ButtonAbout = styled.button`
  position: absolute;
  right: 90px;
`