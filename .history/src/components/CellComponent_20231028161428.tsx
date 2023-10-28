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
  return (
    <div
      className={`cell ${cell.color} ${selected && 'selected'}`}
      onClick={() => click(cell)}
      style={{backgroundColor: cell.available && cell.figure && }}
    >
      {cell.available && !cell.figure && (
        <img src={`${currentCell.figure?.logo}`} className='available' />
      )}
      {cell.figure?.logo && (
        <img src={cell.figure.logo} alt={cell.figure.logo} />
      )}
    </div>
  );
};

export default CellComponent;
