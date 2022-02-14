import React from 'react';
import './GameCard.scss';

export default function GameCard() {
  return (
    <div className="game-card">
      <blaze-card>
        <blaze-card-header>
          <h2 className="c-heading u-xlarge">
            Game Card 
          </h2>
        </blaze-card-header>
      </blaze-card>
    </div>
  );
}