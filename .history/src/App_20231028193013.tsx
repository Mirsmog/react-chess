import BoardComponent from '@/components/BoardComponent';
import { Board } from './models/Board';
import React from 'react';
import { Player } from './models/Player';
import { Colors } from './models/Colors';

const App = () => {
  const [board, setBoard] = React.useState(new Board());
  const [whitePlayer, setWhitePlayer] = React.useState(
    new Player(Colors.WHITE)
  );
  const [blackPlayer, setBlackPlayer] = React.useState(
    new Player(Colors.BLACK)
  );
  const [currentPlayer, setCurrentPlayer] = React.useState<Player | null>(null);

  React.useEffect(() => {
    restart();
    setCurrentPlayer(whitePlayer);
  }, []);

  function switchPlayer() {
    
  }

  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
  }
  return (
    <div className='app'>
      <BoardComponent board={board} setBoard={setBoard} />
    </div>
  );
};

export default App;
