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

  emptyVertical(target: Cell): boolean {
    if (this.x !== target.x) return false;
    const min = Math.min(this.y, target.y);
    const max = Math.max(this.y, target.y);
    for (let y = min + 1; y < max; y++) {
      if (this.board.getCell(this.y, y).e) {
        
      }
      
    }
  }
  emptyHorizontal(target: Cell): boolean {}
  emptyDiagonal(target: Cell): boolean {}

  moveFigure(target: Cell) {
    if (this.figure && this.figure.canMove(target)) {
      this.figure.moveFigure(target);
      target.figure = this.figure;
      this.figure = null;
    }
  }
}
