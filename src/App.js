import './App.css';
import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container } from '@material-ui/core';
import Header from './Header';

const App = () => {
  const [champArray, setChampArray] = useState([]);
  const champsArrayGet = async () => {
    try {
      const data = await axios.get(
        `https://ddragon.leagueoflegends.com/cdn/11.16.1/data/en_US/champion.json`
      );
      console.log(data.data.data);
      setChampArray(data.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    champsArrayGet();
  }, []);

  return (
    <>
      <div
        className="App"
        style={{ height: '100vh', backgroundColor: '#282c34', color: 'white' }}
      >
        <Container
          maxWidth="md"
          style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}
        >
          <Header />
        </Container>
      </div>
    </>
  );
};

export default App;
