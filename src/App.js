import './App.css';
import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container } from '@material-ui/core';

const App = () => {
  const [champArray, setChampArray] = useState([]);
  const champsArrayGet = async () => {
    try {
      const data = await axios.get(
        `http://ddragon.leagueoflegends.com/cdn/11.16.1/data/en_US/champion.json`
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
      <Container maxWidth="md">Hello</Container>
    </>
  );
};

export default App;
