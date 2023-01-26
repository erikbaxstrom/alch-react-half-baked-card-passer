import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext';
// import { useGameContext } from '../context/GameContext';
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
  const { something } = useContext(GameContext);
  // const { something, setSomething } = useGameContext();
  // setSomething('set something');
  console.log(something);
  return (
    <div
      className={`player ${to === player ? 'selected-player' : ''}`}
      onClick={() => setTo(player)}
    >
      <p>
        Player {player} {something}
      </p>
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
