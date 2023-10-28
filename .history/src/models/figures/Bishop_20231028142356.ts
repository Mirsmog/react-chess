import { Cell } from '../Cell';
import { Colors } from '../Colors';
import { Figure } from './Figure';
import bishopBlack from '@/assets/bishop-black.svg';
import bishopWhite from '@/assets/bishop-white.svg';
export class bishop extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? bishopBlack : bishopWhite;
  }
}
