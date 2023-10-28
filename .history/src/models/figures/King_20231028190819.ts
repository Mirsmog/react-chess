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

    const deltaX = Math.abs(currentPosition.x - targetPosition.x);
    const deltaY = Math.abs(currentPosition.y - targetPosition.y);
    // if (
    //   target.x + 1 === this.cell.x ||
    //   (target.x - 1 === this.cell.x && target.y + 1 === this.cell.y) ||
    //   target.y - 1 === this.cell.y
    // ) {
    //   return true;
    // }
    console.log('cell', this.cell.x, this.cell.y);
    console.log('target', target.x, target.y);
    return false;
  }
}
