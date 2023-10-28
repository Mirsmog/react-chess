import { cell } from './cell';
import { colors } from './colors';
import logo from '@/assets/bishop-black.svg';

import kingblack from '@/assets/king-black.svg';
import queenblack from '@/assets/queen-black.svg';
import bishopblack from '@/assets/bishop-black.svg';
import rookblack from '@/assets/rook-black.svg';
import knightblack from '@/assets/knight-black.svg';
import pawnblack from '@/assets/pawn-black.svg';

import kingblack from '@/assets/king-black.svg';
import queenblack from '@/assets/queen-black.svg';
import bishopblack from '@/assets/bishop-black.svg';
import rookblack from '@/assets/rook-black.svg';
import knightblack from '@/assets/knight-black.svg';
import pawnblack from '@/assets/pawn-black.svg';

export enum figurename {
  figure = 'figure',
  king = 'king',
  queen = 'queen',
  rook = 'rook',
  bishop = 'bishop',
  pawn = 'pawn',
  knight = 'knight',
}

export enum figurelogo {
  king_black = kingblack,
  queen_black = queenblack,
  bishop_black = bishopblack,
  rook_black = rookblack,
  knight_black = knightblack,
  pawn_black = pawnblack,

  king_white = kingwhite,
  queen_white = queenwhite,
  bishop_white = bispohwhite,
  rook_white = rookwhite,
  knight_white = knightwhite,
  pawn_white = pawnwhite,
}

export class figure {
  color: colors;
  logo: typeof logo | null;
  cell: cell;
  name: figurename;
  id: number;

  constructor(color: colors, cell: cell) {
    this.color = color;
    this.cell = cell;
    this.cell.figure = this;
    this.logo = null;
    this.name = figurename.figure;
    this.id = math.random();
  }

  canmove(target: cell): boolean {
    return true;
  }
  movefigure(target: cell) {}
}
