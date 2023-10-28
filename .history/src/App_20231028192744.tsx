import BoardComponent from '@/components/BoardComponent';
import { Board } from './models/Board';
import React from 'react';
import { Player } from './models/Player';

const App = () => {
  const [board, setBoard] = React.useState(new Board());
  const [white, setWhite] = React.useState(new Player())

  React.useEffect(() => {
    restart();
  }, []);

  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures()
    setBoard(newBoard);
  }
  return (
    <div className='app'>
      <BoardComponent board={board} setBoard={setBoard} />
    </div>
  );
};

export default App;