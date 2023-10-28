import { Cell } from '../Cell';
import { Colors } from '../Colors';
import { Figure, FigureName } from './Figure';
import bishopBlack from '@/assets/bishop-black.svg';
import bishopWhite from '@/assets/bishop-white.svg';
export class Bishop extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? bishopBlack : bishopWhite;
    this.name = FigureName.BISHOP;
  }
  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }
    if (this.cell.emptyDiagonal(target)) return true;
    return false;
  }
}
