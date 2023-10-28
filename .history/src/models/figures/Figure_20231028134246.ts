import { Cell } from '../Cell';
import { Colors } from '../Colors';
import logo from '@/assets/bishop-black.svg';

export enum FigureName {

}

export class Figure {
  color: Colors;
  logo: typeof logo | null;
  cell: Cell;
  name: FigureName;
  id: number;

 
}
