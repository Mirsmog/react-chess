import { Cell } from '@/models/Cell';
import React from 'react';

type Props = {
  cell: Cell;
};

const CellComponent: React.FC<Props> = ({ cell }) => {
  return <div className={`cell ${cell.color}`}>
    {cell.figure.logo? && <img/>}
  </div>;
};

export default CellComponent;
