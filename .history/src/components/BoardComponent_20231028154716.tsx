import { Board } from '@/models/Board';
import React from 'react';
import CellComponent from './CellComponent';

type Props = {
  board: Board;
  setBoard: (board: Board) => void;
};

const BoardComponent: React.FC<Props> = ({ board, setBoard }) => {
  const [currentCell, setCurrentCell] = React.useState()
  return (
    <div className='board'>
      {board.cells.map((row, index) => (
        <React.Fragment key={index}>
          {row.map((cell) => (
            <CellComponent key={cell.id} cell={cell} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default BoardComponent;
