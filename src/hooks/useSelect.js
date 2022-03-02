import React, { useState } from 'react'

const useSelect = (stateInicial, opciones) => {
  
  // stateInicial es el valor inicial del state
  // opciones es un array de objetos con las opciones del select
  // [{value: '', label: ''}]
  // value es el valor del option
  // label es el texto que se muestra en el option
  const [state, actualizarState] = useState('');
  
  const SelectNoticias = () => (
    <select
      className="browser-default"
      onChange={e => setCategoria(e.target.value)}
    >
      <option value="">Noticias por categoria...</option>
      {opciones.map(opcion => (
        <option key={opcion.value} value={opcion.value}>
          {opcion.label}
        </option>
      ))}
    </select>
  )
  return [state, SelectNoticias]; // [state, funcion]
}

export default useSelect;