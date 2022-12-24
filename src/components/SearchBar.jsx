import React, { useState } from 'react'
import btnStyles from '../CSS Modules/botones.module.css'

export default function SearchBar(props) {
   const[busqueda, setBusqueda] = useState("");

   const funcSetearBusqueda = e => {
      setBusqueda(e.target.value);
      console.log(e)
   }

   const funcSearchYBusq = () => {
      props.onSearch(busqueda)
   }

   const keyEnter = (e) => {
      if (e.keyCode === 13) {
         props.onSearch(busqueda)
      }
   }

   return (
      <>
         <input id= "as" type='search' onChange={funcSetearBusqueda} placeholder="character´s name..." onKeyUp={keyEnter}/>
         <div className={btnStyles.container}>
            <button onClick={funcSearchYBusq} className={btnStyles.btn}>
               <span className={btnStyles.btnText}>Add</span>
            </button>
         </div>
      </>
   );
}
