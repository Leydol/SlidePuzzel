import React, { useState } from "react";
import Bricks from "./Bricks";
import { canSwap, shuffle, swap, isSolved } from "./Helpers"
import {BOARD_SIZE, GRID_SIZE, TILE_COUNT} from './constants'

function Board() {
  const [tiles, setTiles] = useState([...Array(TILE_COUNT)]);
  const [isStarted, setIsStarted] = useState(false);

  const shuffleTiles = () => {
    const shuffledTiles = shuffle(tiles)
    setTiles(shuffledTiles);
  }

  const swapTiles = (tileIndex) => {
    if (canSwap(tileIndex, tiles.indexOf(tiles.length - 1))) {
      const swappedTiles = swap(tiles, tileIndex, tiles.indexOf(tiles.length - 1))
      setTiles(swappedTiles)
    }
  }

  const handleTileClick = (index) => {
    swapTiles(index)
  }

  const handleShuffleClick = () => {
    shuffleTiles()
  }

  const handleStartClick = (index) => {
    console.log('handleStartClick')
    shuffleTiles(index)
    swapTiles()
    setIsStarted(true)
  }

  const pieceWidth = Math.round(BOARD_SIZE / GRID_SIZE);
  const pieceHeight = Math.round(BOARD_SIZE / GRID_SIZE);
  const style = {
    width: BOARD_SIZE,
    height: BOARD_SIZE,
  };
  const hasWon = isSolved(tiles)

  return (
    <div>
      <ul style={style} className="board">
        {tiles.map((tile, index) => (
          <Bricks
            key={index}
            index={index}
            tile={tile}
            width={pieceWidth}
            height={pieceHeight}
            handleTileClick={handleTileClick}
           
          />
        ))}
      </ul>
      {hasWon && isStarted && <div>Yey you solved it!</div>}
      {!isStarted ?
        (<button onClick={(index) => handleStartClick(index)}>Start game</button>) :
        (<button onClick={() => handleShuffleClick()}>Restart game</button>)}
    </div>
  );
}

export default Board;