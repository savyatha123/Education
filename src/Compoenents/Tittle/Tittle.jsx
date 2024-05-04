import React from 'react'
import './Tittle.css'

const Tittle = ({subTittle,tittle}) => {
  return (
    <div className='title'>
    <p>{subTittle}</p>
    <h2>{tittle}</h2>
      
    </div>
  )
}

export default Tittle
