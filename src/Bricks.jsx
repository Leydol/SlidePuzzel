import React from "react";
import { getMatrixPosition, getVisualPosition } from "./Helpers";
import { TILE_COUNT, GRID_SIZE, BOARD_SIZE } from "./constants"

function Brick(props) {
  const { tile, index, width, height, handleTileClick } = props;
  const { row, col } = getMatrixPosition(index);



  const tileStyle = {
    width: `calc(100% / ${GRID_SIZE})`,
    height: `calc(100% / ${GRID_SIZE})`,
    backgroundSize: `${BOARD_SIZE}px`,
    backgroundPosition: `${(100 / (GRID_SIZE - 1)) * (tile % GRID_SIZE)}% ${(100 / (GRID_SIZE - 1)) * (Math.floor(tile / GRID_SIZE))}%`,

  };
 
  return (
    <div>
        <li
          style={{
            ...tileStyle,
            opacity: tile === TILE_COUNT - 1 ? 0 : 1,
            
          }}
          className="tile"
          onClick={() => handleTileClick(index)}
        >
        {tile}        
</li>
    </div>
  );
}

export default Brick;