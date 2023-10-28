import { Board } from '@/models/Board';
import React from 'react';
import CellComponent from './CellComponent';
import { Cell } from '@/models/Cell';
import { Player } from '@/models/Player';

type Props = {
  board: Board;
  setBoard: (board: Board) => void;
  currentPlayer: Player | null;
  switchPlayer: () => void;
};

const BoardComponent: React.FC<Props> = ({
  board,
  setBoard,
  currentPlayer,
  switchPlayer,
}) => {
  const [currentCell, setCurrentCell] = React.useState<Cell | null>(null);
  const click = (cell: Cell) => {
    cell.figure && setCurrentCell(cell);
    switchPlayer();
    if (
      currentCell &&
      currentCell !== cell &&
      currentCell.figure?.canMove(cell)
    ) {
      currentCell.moveFigure(cell);
      setCurrentCell(null);
      updateBoard()
    } else {
      if (cell.figure?.color === currentPlayer?.color) {
        setCurrentCell(cell);
      }
    }
  };
  React.useEffect(() => {
    highlightCells();
  }, [currentCell]);


  const highlightCells = () => {
    board.highlightCells(currentCell);
    updateBoard();
  };
  const updateBoard = () => {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  };
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
