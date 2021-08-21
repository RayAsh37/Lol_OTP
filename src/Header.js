import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Header.css'
import {
  createTheme,
  MenuItem,
  TextField,
  ThemeProvider,
} from '@material-ui/core'

const Header = ({ version, champ, setChamp }) => {
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
        `https://ddragon.leagueoflegends.com/cdn/${version.toString()}/data/en_US/champion.json`
      )
      setChampArray(data.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    champsArrayGet()
  }, [version])

  const [champArray, setChampArray] = useState([])
  let keys = Object.keys(champArray)

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
