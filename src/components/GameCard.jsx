import React, { useState } from 'react';
import './GameCard.scss';

export default function GameCard(props) {
  let [cardDirection, setCardDirection] = useState("faceDown");

  const flipCard = () => {
    setCardDirection(cardDirection === 'faceDown' ? 'faceUp' : 'faceDown')
  }
  if(cardDirection === 'faceDown') {
    return (
      <div role="button" className="c-card u-high game-card face-down-card" tabIndex={0} 
        onClick={flipCard}>
        <img alt="fancy blue checkerd playing card back with a floral center" className="o-image" src="/img/cardback.jpg"></img>
      </div>
    );
  } else {
    return (
      <div role="button" className="c-card u-high game-card" tabIndex={0} 
        onClick={flipCard}>
        <img alt="unsplash placeholder" className="o-image" src="https://source.unsplash.com/random/550x500"></img>
      </div>
    )} 
}