import { Cell } from '../Cell';
import { Colors } from '../Colors';
import { Figure, FigureName } from './Figure';
import queenBlack from '@/assets/queen-black.svg';
import queenWhite from '@/assets/queen-white.svg';
export class Queen extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? queenBlack : queenWhite;
    this.name = FigureName.QUEEN;
  }
  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }
    if (this.cell.emptyVertical(target)) {
      return true;
    }
    if (this.cell.emptyHorizontal(target)) {
      return true;
    }
    if (this.cell.emptyDiagonal(target)) {
      return true;
    }
    return false;
  }
}
