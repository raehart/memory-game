import React from 'react';
import GameCard from './GameCard';
import './GameGrid.scss'

// Setup and loop over intinal grid - 20 cards - 2 sets of 10 matching pairs
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
},
{
  id: 13,
  value: "",
  symbol: ""
},
{
  id: 14,
  value: "",
  symbol: ""
},
{
  id: 15,
  value: "",
  symbol: ""
},
{
  id: 16,
  value: "",
  symbol: ""
},
{
  id: 17,
  value: "",
  symbol: ""
},
{
  id: 18,
  value: "",
  symbol: ""
},
{
  id: 19,
  value: "",
  symbol: ""
},
{
  id: 20,
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