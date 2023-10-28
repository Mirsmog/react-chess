import { Cell } from '../Cell';
import { Colors } from '../Colors';
import { Figure, FigureName } from './Figure';
import bishopBlack from '@/assets/bishop-black.svg';
import bishopWhite from '@/assets/bishop-white.svg';
export class Bishop extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? bishopBlack : bishopWhite;
    this.name = FigureName.BISHOP
  }
}
