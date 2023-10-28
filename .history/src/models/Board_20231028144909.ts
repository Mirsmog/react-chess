import { Cell } from './Cell';
import { Colors } from './Colors';
import { King } from './figures/King';
import { Pawn } from './figures/Pawn';
import { Queen } from './figures/Queen';

export class Board {
  cells: Cell[][] = [];

  public initCells() {
    for (let i = 0; i < 8; i++) {
      const row: Cell[] = [];
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 !== 0) {
          row.push(new Cell(this, j, i, Colors.BLACK, null)); // black
        } else {
          row.push(new Cell(this, j, i, Colors.WHITE, null)); // white
        }
      }
      this.cells.push(row);
    }
  }
  public getCell(x: number, y: number) {
    return this.cells[y][x];
  }

  private addKings() {}
  private addQueens() {}
  private addPawns() {}
  private addBishops() {}
  private addKnights() {}
  private addRooks() {}

  public addFigures() {
    
  }
}