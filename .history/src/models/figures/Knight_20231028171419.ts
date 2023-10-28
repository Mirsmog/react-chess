import { Cell } from '../Cell';
import { Colors } from '../Colors';
import { Figure, FigureName } from './Figure';
import knightBlack from '@/assets/knight-black.svg';
import knightWhite from '@/assets/knight-white.svg';
export class Knight extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? knightBlack : knightWhite;
    this.name = FigureName.KNIGHT;
  }
  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }
    const dx = Math.abs(this.cell.x - target.x);
    const dx = Math.abs(this.cell.x - target.x);
    return true;
  }
}
