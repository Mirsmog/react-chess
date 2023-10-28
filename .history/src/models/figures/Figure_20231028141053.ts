import { Cell } from '../Cell';
import { Colors } from '../Colors';
import logo from '@/assets/bishop-black.svg';

import kingBlack from '@/assets/king-black.svg';

export enum FigureName {
  FIGURE = 'figure',
  KING = 'king',
  QUEEN = 'queen',
  ROOK = 'rook',
  BISHOP = 'bishop',
  PAWN = 'pawn',
  KNIGHT = 'knight',
}

export enum FigureLogo {
  KING_BLACK = kingBlack,
  QUEEN_BLACK = queenBlack,
  BISHOP_BLACK = bispohBlack,
  ROOK_BLACK = rookBlack,
  KNIGHT_BLACK = knightBlack,
  PAWN_BLACK = pawnBlack,

  KING_WHITE = kingWhite,
  QUEEN_WHITE = queenWhite,
  BISHOP_WHITE = bispohWhite,
  ROOK_WHITE = rookWhite,
  KNIGHT_WHITE = knightWhite,
  PAWN_WHITE = pawnWhite,
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
