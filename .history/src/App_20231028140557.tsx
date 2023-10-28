import BoardComponent from '@/components/BoardComponent';
import { Board } from './models/Board';
import React from 'react';
import { FigureLogo } from './models/figures/Figure';

const App = () => {
  const [board, setBoard] = React.useState(new Board());

  React.useEffect(() => {
    restart();
    console.log(FigureLogo.KING_BLACK);
  }, []);

  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    setBoard(newBoard);
  }
  return (
    <div className='app'>
      <BoardComponent board={board} setBoard={setBoard} />
    </div>
  );
};

export default App;
