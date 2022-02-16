import React from 'react';
import GameCard from './GameCard';
import './GameGrid.scss'

// setup state to meausre faceUP cards- make sure max is two & check for match when 2 

let cards = [{
    symbol: "infinite",
    color: "green"
  },
  {
    symbol: "heart",
    color: "pink"
  },
  {
    symbol: "diamond",
    color: "blue"
  },
  {
    symbol: "fish",
    color: "red"
  },
  {
    symbol: "bug",
    color: "purple"
  },
  {
    symbol: "flower",
    color: "yellow"
  }
]

const deck = [...cards, ...cards]
export default function GameGrid(props) {
  return (
    <div className="game-grid">
      {deck.map(function(card, index) {
      return <GameCard key={index} card={card}>
      </GameCard>
    })}
    </div>
  );
}