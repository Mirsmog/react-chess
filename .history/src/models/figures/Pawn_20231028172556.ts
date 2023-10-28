import { dir } from 'console';
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
    const firstSteepDirection =
      this.cell.figure?.color === Colors.BLACK ? 2 : -2;
    if (
      (target.y === this.cell.y + direction ||
        (this.firstSteep && target.y === this.cell.y + firstSteepDirection)) &&
      target.x === this.cell.x &&
      this.cell.board.getCell(target.x, target.y).empty()
    )
      return true;

    if (
      target.y === this.cell.y + direction &&
      (target.x === this.cell.x + 1 || target.x === this.cell.x - 1) &&
      this.cell.empty(target)
    ) {
      return true;
    }
    return false;
  }
  moveFigure(target: Cell): void {
    super.moveFigure(target);
    this.firstSteep = false;
  }
}
