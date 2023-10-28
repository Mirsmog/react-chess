import { Board } from './Board';
import { Colors } from './Colors';
import { Figure } from './figures/Figure';

export class Cell {
  readonly x: number;
  readonly y: number;
  readonly color: Colors;
  figure: Figure | null;
  board: Board;
  available: boolean;
  id: number;

  constructor(
    board: Board,
    x: number,
    y: number,
    color: Colors,
    figure: Figure | null
  ) {
    this.board = board;
    this.figure = figure;
    this.color = color;
    this.x = x;
    this.y = y;
    this.available = false;
    this.id = Math.random();
  }

  empty() {
    return this.figure === null;
  }

  emptyVertical(target: Cell): boolean {
    if (this.x !== target.x) {
      return false;
    }

    const min = Math.min(this.y, target.y);
    const max = Math.max(this.y, target.y);

    for (let y = min + 1; y < max; y++) {
      if (!this.board.getCell(this.x, y).empty()) {
        return false;
      }
    }
    return true;
  }
  emptyHorizontal(target: Cell): boolean {
    return true;
  }
  emptyDiagonal(target: Cell): boolean {
    return true;
  }

  setFigure(figure: Figure) {
    this.figure = figure;
    this.figure.cell = this;
  }

  moveFigure(target: Cell) {
    if (this.figure && this.figure.canMove(target)) {
      this.figure.moveFigure(target);
      this.setFigure(this.figure);
      this.figure = null;
    }
  }
}
