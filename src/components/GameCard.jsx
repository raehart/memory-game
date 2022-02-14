import React from 'react';
import './GameCard.scss';

// add state -front or back to card
let cardDirection = "faceUp";

//add on-click to card- toggle cardDirection state 

export default function GameCard(props) {
  return (
    <div className="u-high game-card">
      <blaze-card>
        <h2>Card State:  {cardDirection}</h2>
      </blaze-card>
    </div>
  );
}