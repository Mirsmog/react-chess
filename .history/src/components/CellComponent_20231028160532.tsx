import { Cell } from '@/models/Cell';
import React from 'react';

type Props = {
  cell: Cell;
  selected: boolean;
  click: (cell: Cell) => void;
};

const CellComponent: React.FC<Props> = ({ cell, selected, click }) => {
  const dad = (cell) => {
    console.log(cell);
    click(cell);
  };
  return (
    <div
      className={`cell ${cell.color} ${selected && 'selected'}`}
      onClick={() => dad(cell)}
    >
      {/* {!cell.figure && <img src={cell} className='available' />} */}
      {cell.figure?.logo && (
        <img src={cell.figure.logo} alt={cell.figure.logo} />
      )}
    </div>
  );
};

export default CellComponent;
