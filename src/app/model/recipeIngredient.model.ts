import {Ingredient} from './ingredient.model';

export class RecipeIngredient {
  constructor(
      public amount: number,
      public amountType: string,
      public ingredient: Ingredient
  ) {}
}
