import React, { useState } from 'react'

export default function SearchBar(props) {
   const[busqueda, setBusqueda] = useState("");

   const funcSetearBusqueda = e => {
      setBusqueda(e.target.value)
   }

   const funcSearchYBusq = () => {
      props.onSearch(busqueda)
   }

   return (
      <div>
         <input type='search' onChange={funcSetearBusqueda}/>
         <button onClick={funcSearchYBusq} >Agregar</button>
      </div>
   );
}
