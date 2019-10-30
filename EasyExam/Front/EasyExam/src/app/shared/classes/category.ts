import { Subcategory } from './subcategory';
export class Category {
  subcategories: Subcategory[];
  constructor(public name: string) {}
  add(subcategory: Subcategory) {
    this.subcategories.push(subcategory);
  }
}
