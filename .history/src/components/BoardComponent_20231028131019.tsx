import { Board } from '@/models/Board';
import React from 'react';

type Props = {
  board: Board;
  setBoard: (board: Board) => void;
};

const BoardComponent: React.FC<Props> = ({ board, setBoard }) => {
  return <div className='board'>
    {board.cells.map((row, index) => {
      <React.Fragment key={index}>
{row.map(() => )}
      </React.Fragment>
    })}
  </div>;
};

export default BoardComponent;
