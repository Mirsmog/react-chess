import { Cell } from '@/models/Cell';
import React from 'react';

type Props = {
  cell: Cell;
  selected: boolean;
};

const CellComponent: React.FC<Props> = ({ cell, selected }) => {
  return (
    <div className={`cell ${cell.color} ${selected && 'selected'}`}>
      {cell.figure?.logo && (
        <img src={cell.figure.logo} alt={cell.figure.logo} />
      )}
    </div>
  );
};

export default CellComponent;
