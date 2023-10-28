import { Cell } from '../Cell';
import { Colors } from '../Colors';
import logo from '@/assets/bishop-black.svg';

export enum FigureName {
  FIGURE = 'figure',
  KING = 'king',
  QUEEN = 'queen',
  ROOK = 'rook',
  BISHOP = 'bishop',
  PAWN = 'pawn',
  KNIGHT = 'knight',
}

export class Figure {
  color: Colors;
  logo: typeof logo | null;
  cell: Cell;
  name: FigureName;
  id: number;

  constructor(color: Colors, cell: Cell) {
    this.color = color;
    this.cell = cell;
    this.cell.figure = this;
    this.logo = null;
    this.name = FigureName.FIGURE;
    this.id = Math.random();
  }

  canMove(target: Cell): boolean {
    return true;
  }
  moveFigure()
}
