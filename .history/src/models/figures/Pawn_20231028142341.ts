import { Cell } from '../Cell';
import { Colors } from '../Colors';
import { Figure } from './Figure';
import pawnBlack from '@/assets/pawn-black.svg';
import pawnWhite from '@/assets/pawn-white.svg';
export class pawn extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? pawnBlack : pawnWhite;
  }
}
