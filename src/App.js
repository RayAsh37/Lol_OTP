import './App.css'
import React from 'react'
import { Container } from '@material-ui/core'
import Header from './Header'

const App = () => {
  return (
    <>
      <div
        className='App'
        style={{ height: '100vh', backgroundColor: '#282c34', color: 'white' }}
      >
        <Container
          maxWidth='md'
          style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}
        >
          <Header />
        </Container>
      </div>
    </>
  )
}

export default App
