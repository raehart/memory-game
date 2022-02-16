import React from 'react';
import GameCard from './GameCard';
import './GameGrid.scss'

// setup state to meausre faceUP cards- make sure max is two & check for match when 2 

let cards = [{
    id: 1,
    value: "",
    symbol: ""
  },
  {
    id: 2,
    value: "",
    symbol: ""
  },
  {
    id: 3,
    value: "",
    symbol: ""
  },{
    id: 4,
    value: "",
    symbol: ""
  },
  {
    id: 5,
    value: "",
    symbol: ""
  },
  {
    id: 6,
    value: "",
    symbol: ""
  },
  {
    id: 7,
    value: "",
    symbol: ""
  },
  {
    id: 8,
    value: "",
    symbol: ""
  },
  {
    id: 9,
    value: "",
    symbol: ""
  },
  {
    id: 10,
    value: "",
    symbol: ""
  },
  {
    id: 11,
    value: "",
    symbol: ""
  },
  {
    id: 12,
    value: "",
    symbol: ""
  }
] 

export default function GameGrid(props) {
  return (
    <div className="game-grid">
      {cards.map(function(cards, index) {
      return <GameCard key={index}>
        <span>{cards.id}</span>
      </GameCard>
    })}
    </div>
  );
}