import React, { useContext } from 'react'
import LanguageContex from './LanguageContex'

function LanguageComponent() {

    const language = useContext(LanguageContex)
    const message = {
        eng: 'Hello',
        esp: 'Hola'
    }
  return (
    <div> {message[language]}</div>
  )
}

export default LanguageComponent