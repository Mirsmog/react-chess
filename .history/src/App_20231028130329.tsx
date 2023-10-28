import BoardComponent from '@/components/BoardComponent';
import { Board } from './models/Board';
import React from 'react';

const App = () => {
  const [board, setBoard] = React.useState(new Board());

  React.useEffect(() => {
    restart();
  }, []);
  return (
    <div className='app'>
      <BoardComponent />
    </div>
  );
};

export default App;
