import { Cell } from '../Cell';
import { Colors } from '../Colors';
import { Figure, FigureName } from './Figure';
import kingBlack from '@/assets/king-black.svg';
import kingWhite from '@/assets/king-white.svg';
export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? kingBlack : kingWhite;
    this.name = FigureName.KING;
  }
  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }
    if (this.cell.x === target.x -1 && this.cell.y === target.y) {
    return true;
    }
    console.log(this.cell.x, this.cell.y);
    console.log(target.x, target.y);
    return false;
  }
}
