import { Category } from './class-interfaces';
import { paper } from './paper';
import { tetraPak } from './tetra-pak';


const idClasses: Category = {
  ...paper,
  ...tetraPak,
};

export default idClasses;
