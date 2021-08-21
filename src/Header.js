import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Header.css'
import {
  createTheme,
  MenuItem,
  TextField,
  ThemeProvider,
} from '@material-ui/core'

const Header = () => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#fff',
      },
      type: 'dark',
    },
  })

  const champsArrayGet = async () => {
    try {
      const data = await axios.get(
        `https://ddragon.leagueoflegends.com/cdn/11.16.1/data/en_US/champion.json`
      )
      console.log(data.data.data)
      setChampArray(data.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    champsArrayGet()
  }, [])

  const [champArray, setChampArray] = useState([])
  let keys = Object.keys(champArray)
  const [champ, setChamp] = useState('')

  //   console.log(keys)
  //   console.log(champ)

  return (
    <div>
      <span className='title'>One Trick</span>

      <div className='inputs'>
        <ThemeProvider theme={darkTheme}>
          {/* <TextField id='standard-basic' label='Enter Champion' /> */}

          <TextField
            id='standard-select-currency'
            select
            label='Select'
            value={champ}
            onChange={(e) => setChamp(e.target.value)}
            helperText='Please select your currency'
          >
            {keys.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  )
}

export default Header
