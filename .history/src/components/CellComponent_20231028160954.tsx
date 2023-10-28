import { Cell } from '@/models/Cell';
import React from 'react';

type Props = {
  cell: Cell;
  selected: boolean;
  currentCell: Cell;
  click: (cell: Cell) => void;
};

const CellComponent: React.FC<Props> = ({
  cell,
  currentCell,
  selected,
  click,
}) => {
  const dad = (cell) => {
    console.log(cell.figure.logo, currentCell);
    click(cell);
  };
  return (
    <div
      className={`cell ${cell.color} ${selected && 'selected'}`}
      onClick={() => dad(cell)}
    >
      {!cell.figure && (
        <img src={`${cell.figure?.logo}`} className='available' />
      )}
      {cell.figure?.logo && (
        <img src={cell.figure.logo} alt={cell.figure.logo} />
      )}
    </div>
  );
};

export default CellComponent;