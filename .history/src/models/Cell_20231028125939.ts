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
    figure: Figure | null,
    color: Colors,
    x: number,
    y: number
  ) {
    this.board = board;
    this.figure = figure;
    this.color = color;
    this.x = x;
    this.y = y;
    this.available = false;
    this.id = Math.random();
  }
}
