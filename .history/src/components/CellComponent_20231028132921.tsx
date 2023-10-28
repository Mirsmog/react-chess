import { Cell } from '@/models/Cell';
import React from 'react';

type Props = {
  cell: Cell;
};

const CellComponent = ({ cell }) => {
  return <div className={`cell ${cell.c}`}></div>;
};

export default CellComponent;
