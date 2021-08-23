import './App.css'
import React, { useState, useEffect } from 'react'
import { Container } from '@material-ui/core'
import Header from './Header'
import Champ from './Champ'
import axios from 'axios'

const App = () => {
  const [version, setVersion] = useState([])
  const versionArrayGet = async () => {
    try {
      const data = await axios.get(
        `https://ddragon.leagueoflegends.com/api/versions.json`
      )
      // console.log(data.data.data)
      setVersion(data.data[0])
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    versionArrayGet()
  }, [])

  const [champ, setChamp] = useState([])

  return (
    <>
      <div
        className='App'
        style={{ height: '500vh', backgroundColor: '#282c34', color: 'white' }}
      >
        <Container
          maxWidth='md'
          style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}
        >
          <Header version={version} champ={champ} setChamp={setChamp} />
          <Champ champ={champ} version={version} />
        </Container>
      </div>
    </>
  )
}

export default App
