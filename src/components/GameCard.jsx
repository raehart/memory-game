import React, { useState } from 'react';
import './GameCard.scss';

export default function GameCard(props) {
  let [cardDirection, setCardDirection] = useState("faceDown");

  const flipCard = () => {
    setCardDirection(cardDirection === 'faceDown' ? 'faceUp' : 'faceDown')
  }

  const onKeyPress = e => {
    const enterOrSpace =
      e.key === "Enter" ||
      e.key === " " ||
      e.key === "Spacebar" ||
      e.which === 13 ||
      e.which === 32;
    if (enterOrSpace) {
      e.preventDefault();
      flipCard();
    }
  };

  
  if(cardDirection === 'faceDown') {
    return (
      <div role="button" className="c-card u-high game-card face-down-card" 
        tabIndex={0} 
        onClick={flipCard}
        onKeyPress={onKeyPress}
        > 
        <img alt="fancy blue checkered playing card back with a floral center" className="o-image" src="/img/cardback.jpg"></img>
      </div>
    );
  } else {
    return (
      <div role="button" className="c-card u-high game-card"
       tabIndex={0} 
       onClick={flipCard}
       onKeyPress={onKeyPress}  
       >


        <div className="c-card__body">
          <ion-icon name="infinite"></ion-icon>
        </div>
      </div>
    )} 
}