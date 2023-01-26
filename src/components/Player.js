import React, { useContext } from 'react';
import { useGameContext } from '../context/GameContext';
import CardList from './CardList';

export default function Player({
  player,
  setTo,
  hand,
  setFrom,
  setSelectedCard,
  selectedCard,
  to,
}) {
  const { something, setSomething } = useGameContext();

  return (
    <div
      className={`player ${to === player ? 'selected-player' : ''}`}
      onClick={() => setTo(player)}
    >
      <p>Player {player}</p>
      <CardList
        player={player}
        cards={hand}
        setFrom={setFrom}
        selectedCard={selectedCard}
        setSelectedCard={setSelectedCard}
      />
    </div>
  );
}
