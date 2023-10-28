import { Cell } from '../Cell';
import { Colors } from '../Colors';
import { Figure } from './Figure';
import knightBlack from '@/assets/knight-black.svg';
import knightWhite from '@/assets/knight-white.svg';
export class knight extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? knightBlack : knightWhite;
  }
}
