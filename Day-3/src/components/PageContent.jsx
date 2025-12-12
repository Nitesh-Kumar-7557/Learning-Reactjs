import React, { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'

const PageContent = () => {
    const {translations,lang,changeLang} = useContext(LanguageContext)
    const message = translations[lang]
  return (
    <div>
      <h1>{message.greeting}</h1>
      <p>{message.message}</p>
      <button onClick={changeLang}>{message.button}</button>
    </div>
  )
}

export default PageContent
