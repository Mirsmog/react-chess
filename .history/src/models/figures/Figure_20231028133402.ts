import { Cell } from '../Cell';
import { Colors } from '../Colors';
import logo from '@/assets/bishop-black.svg';

export class Figure {
  color: Colors;
  logo: typeof logo | null;
  cell: Cell;
  
}
