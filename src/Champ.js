import './Champ.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Champ = ({ champ, version }) => {
  const [champion, setChampion] = useState('')

  useEffect(() => {
    const championGet = async () => {
      try {
        const data = await axios.get(
          `http://ddragon.leagueoflegends.com/cdn/${version.toString()}/data/en_US/champion/${champ}.json`
        )
        setChampion(data.data.data[champ])
        // console.log(data.data.data[champ])
      } catch (error) {
        console.log(error)
      }
    }
    championGet()
  }, [champ, version])

  if (champ === champion.name) {
    let keys = Object.keys(champion.stats)
    return (
      <>
        <div>
          <h2>{champion.name}</h2>
          <h3>{champion.title}</h3>
          <img
            src={`http://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/${champion.name}.png`}
            alt={`This is ${champion.name}`}
          />
          <h3>Lore</h3>
          <p>{champion.lore}</p>
          <h3>Ally Tips</h3>
          <ul>
            {champion.allytips.map((tip) => (
              <li>{tip}</li>
            ))}
          </ul>
          <h3>Enemy Tips</h3>
          <ul>
            {champion.enemytips.map((tip) => (
              <li>{tip}</li>
            ))}
          </ul>
          <h3>Tags</h3>
          <ul>
            {champion.tags.map((tip) => (
              <li>{tip}</li>
            ))}
          </ul>
          <h3>Partype</h3>
          <p>{champion.partype}</p>
          <h3>Info</h3>
          <ul>
            <li>Attack: {champion.info.attack}</li>
            <li>Defense: {champion.info.defense}</li>
            <li>Magic: {champion.info.magic}</li>
            <li>Difficulty: {champion.info.difficulty}</li>
          </ul>
          <h3>Stats</h3>
          <ul>
            {keys.map((key) => (
              <li>{key + ': ' + champion.stats[key]}</li>
            ))}
          </ul>
        </div>
      </>
    )
  } else {
    return <h2>Pick a Champion</h2>
  }
}

export default Champ
