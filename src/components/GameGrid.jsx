import React from 'react';
import GameCard from './GameCard';
import './GameGrid.scss'

// setup state to meausre faceUP cards- make sure max is two & check for match when 2 

let cards = [{
    id: 1,
    value: "infinite1",
    symbol: "infinite"
  },
  {
    id: 2,
    value: "infinite2",
    symbol: "infinite"
  },
  {
    id: 3,
    value: "heart1",
    symbol: "heart"
  },{
    id: 4,
    value: "heart2",
    symbol: "heart"
  },
  {
    id: 5,
    value: "diamond1",
    symbol: "diamond"
  },
  {
    id: 6,
    value: "diamond2",
    symbol: "diamond"
  },
  {
    id: 7,
    value: "fish1",
    symbol: "fish"
  },
  {
    id: 8,
    value: "fish2",
    symbol: "fish"
  },
  {
    id: 9,
    value: "bug1",
    symbol: "bug"
  },
  {
    id: 10,
    value: "bug2",
    symbol: "bug"
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