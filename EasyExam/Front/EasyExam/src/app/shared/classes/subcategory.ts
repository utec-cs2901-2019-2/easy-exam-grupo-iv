import { Category } from './category';
export class Subcategory {
  id: string;
  constructor(public name: string, public category: Category) {}
}
