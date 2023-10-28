import { Board } from '@/models/Board';
import React from 'react';

type Props = {
  board: Board;
  setBoard: (board: )
};

const BoardComponent = (props: Props) => {
  return <div className='board'></div>;
};

export default BoardComponent;
