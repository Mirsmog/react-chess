import { Cell } from '../Cell';
import { Colors } from '../Colors';
import { Figure } from './Figure';
import queenBlack from '@/assets/queen-black.svg';
import queenWhite from '@/assets/queen-white.svg';
export class queen extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? queenBlack : queenWhite;
  }
}
