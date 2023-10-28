import { Cell } from '../Cell';
import { Colors } from '../Colors';
import { Figure } from './Figure';
import rookBlack from '@/assets/rook-black.svg';
import rookWhite from '@/assets/rook-white.svg';
export class rook extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? rookBlack : rookWhite;
  }
}
