import { Cell } from '../Cell';
import { Colors } from '../Colors';
import logo from '@/assets/bishop-black.svg';

import queenBlack from '@/assets/queen-black.svg';
import bishopBlack from '@/assets/bishop-black.svg';
import rookBlack from '@/assets/rook-black.svg';
import knightBlack from '@/assets/knight-black.svg';
import pawnBlack from '@/assets/pawn-black.svg';

import queenWhite from '@/assets/queen-white.svg';
import bishopWhite from '@/assets/bishop-white.svg';
import rookWhite from '@/assets/rook-white.svg';
import knightWhite from '@/assets/knight-white.svg';
import pawnWhite from '@/assets/pawn-white.svg';

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
  moveFigure(target: Cell) {}
}
