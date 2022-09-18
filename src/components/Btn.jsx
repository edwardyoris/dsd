import React from 'react'

function Btn({ ranColor, obtenRanClick }) {

  const fondoBtn = {
    backgroundColor: ranColor
  }

  return (
    <button style={fondoBtn} onClick={obtenRanClick} className='tarjeta__btn'>▶️</button>
  )
}

export default Btn