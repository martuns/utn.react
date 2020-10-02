import React from 'react'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'

function Article() {
    return (
        <Jumbotron>
        <h1>Hello, world!</h1>
        <p>
         Contenido de ejemplo - Resumen Clase 01
        </p>
        <p>
          <Button variant="primary">Ver Mas</Button>
        </p>
      </Jumbotron>
    )
}

export default Article
