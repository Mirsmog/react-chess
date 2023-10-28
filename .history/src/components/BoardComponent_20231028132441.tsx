import { Board } from '@/models/Board';
import React from 'react';
import CellComponent from './CellComponent';

type Props = {
  board: Board;
  setBoard: (board: Board) => void;
};

const BoardComponent: React.FC<Props> = ({ board, setBoard }) => {
  return (
    <div className='board'>

    </div>
  );
};

export default BoardComponent;