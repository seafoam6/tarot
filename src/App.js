import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.json'


const randomCard = () => {
  return data[Math.floor(Math.random() * data.length)];
}

function App() {
  const [card, setCard] = useState(data[0])
  useEffect(() => {
    setCard(randomCard())
  }, [])


  const replaceImage = () => {
    setCard(randomCard())
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>{card.title}</h1>
        <img src={`images/${card.fileName}`} alt={card.title} />
        <a href={card.link}>Read More</a>
        <button onClick={() => replaceImage()}>Click Me for a new card</button>
      </header>
    </div>
  );
}

export default App;
