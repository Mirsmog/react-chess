import { Cell } from '../Cell';
import { Colors } from '../Colors';
import { Figure, FigureLogo } from './Figure';

export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo =
      color === Colors.BLACK ? FigureLogo.KING_BLACK : FigureLogo.KING_WHITE;
  }
}
