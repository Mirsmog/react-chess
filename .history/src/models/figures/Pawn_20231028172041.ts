import { Cell } from '../Cell';
import { Colors } from '../Colors';
import { Figure, FigureName } from './Figure';
import pawnBlack from '@/assets/pawn-black.svg';
import pawnWhite from '@/assets/pawn-white.svg';
export class Pawn extends Figure {
  firstSteep: boolean = true;
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? pawnBlack : pawnWhite;
    this.name = FigureName.PAWN;
  }
  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }
    const direction = this.cell.figure?.color === Colors.BLACK ? 1 : -1;
    const firstSteepDirection = this.cell.figure?.color === Colors.BLACK ? 2 : -2;
    return true;
  }
  moveFigure(target: Cell): void {
    super.moveFigure(target);
    this.firstSteep = false;
  }
}
