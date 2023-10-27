import React from 'react';

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Article from './components/Article';

function App() {

  /**
   * logica
   */

  /**
   * En el return {} usamos JS
   * 
   * Metodos con valor de return ( retornan algo )
   * map
   * filter
   * find
   * reduce
   * 
   */

  // if ternario =  condicion   ?  true   :   false
  // const n =  18 > 15   ?  'es mas grande'  :   'es mas chico'

  const numeros = [1,2];

  // JSX = JS + XML (similiar HTML)
  return (
    <>
      <h1>Aprendiendo React</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sit nisi iusto. Nihil illo aliquid, hic eum optio non doloribus mollitia minima autem porro? Officiis incidunt voluptate explicabo dolore. Enim.
      </p>

      {
        numeros.map(() => <Article/>)
      }

    </>

  )
}

export default App
