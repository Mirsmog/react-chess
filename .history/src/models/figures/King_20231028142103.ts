import { Cell } from '../Cell';
import { Colors } from '../Colors';
import { Figure } from './Figure';
import kingBlack from '@/assets/king-black.svg';
import kingWhite from '@/assets/king-white.svg';
export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? kingBlack : kingWhite;
  }
}
