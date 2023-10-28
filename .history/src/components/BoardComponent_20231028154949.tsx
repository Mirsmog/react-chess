import { Board } from '@/models/Board';
import React from 'react';
import CellComponent from './CellComponent';
import { Cell } from '@/models/Cell';

type Props = {
  board: Board;
  setBoard: (board: Board) => void;
};

const BoardComponent: React.FC<Props> = ({ board, setBoard }) => {
  const [currentCell, setCurrentCell] = React.useState<Cell | null>(null);
  return (
    <div className='board'>
      {board.cells.map((row, index) => (
        <React.Fragment key={index}>
          {row.map((cell) => (
            <CellComponent key={cell.id} cell={cell} selected={currentCell} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default BoardComponent;
