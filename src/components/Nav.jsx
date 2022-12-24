import React from 'react'
import SearchBar from './SearchBar.jsx'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import btnStyles from '../CSS Modules/botones.module.css'

export default function Nav (props) {
    const funcRandom = () => {
      let num = Math.floor(Math.random()*826);
      props.onRandom(num)
    }

    return ( 
    <NavDiv>
        <SearchBar onSearch={props.onSearch}/>
        <div className={btnStyles.container}>
          <button className={btnStyles.btn} onClick={funcRandom}>
            <span className={btnStyles.btnText}>Random</span>
          </button>
        </div>
        <Link to='/'>
        <div className={btnStyles.container}>
          <button className={btnStyles.btn}>
            <span className={btnStyles.btnText}>Characters</span>
          </button>
        </div>
        </Link>
        <Link to='/favorites'>
        <div className={btnStyles.container}>
          <button className={btnStyles.btn}>
            <span className={btnStyles.btnText}>Favorites</span>
          </button>
        </div>
        </Link>        
        <Link to='/about'><ButtonAbout>About</ButtonAbout></Link>
        
        <Link to='/contact'><ButtonContacto>Contact Us</ButtonContacto></Link>
        
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
  right: 105px;
`