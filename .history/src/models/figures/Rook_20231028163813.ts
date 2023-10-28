import { Cell } from '../Cell';
import { Colors } from '../Colors';
import { Figure, FigureName } from './Figure';
import rookBlack from '@/assets/rook-black.svg';
import rookWhite from '@/assets/rook-white.svg';
export class Rook extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? rookBlack : rookWhite;
    this.name = FigureName.ROOK;
  }
   canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }
    return true;
  }
}
