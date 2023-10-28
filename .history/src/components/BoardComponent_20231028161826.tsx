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
  const click = (cell: Cell) => {
    cell.figure && setCurrentCell(cell);
  };
  const higlightCells = () => {
    board.higlightCells()
  }
  const updateBoard = () => {
    const newBoard = board.getCopy
  }
  return (
    <div className='board'>
      {board.cells.map((row, index) => (
        <React.Fragment key={index}>
          {row.map((cell) => (
            <CellComponent
              click={click}
              key={cell.id}
              cell={cell}
              selected={cell.x === currentCell?.x && cell.y === currentCell?.y}
              currentCell={currentCell}
            />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default BoardComponent;