import { Cell } from '@/models/Cell';
import React from 'react';

type Props = {
  cell: Cell;
  selected: boolean;
  currentCell: Cell | null;
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
      className={`cell ${cell.color} ${selected && 'selected'} ${
        cell.available && cell.figure && !cell.empty() && 'target'
      }`}
      onClick={() => click(cell)}
    >
      {cell.available && !cell.figure && (
        <img draggable={false} src={`${currentCell?.figure?.logo}`} className='available' />
      )}
      {cell.figure?.logo && (
        <img draggable={false} src={cell.figure.logo} alt={cell.figure.logo} />
      )}
    </div>
  );
};

export default CellComponent;
