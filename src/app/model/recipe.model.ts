import {RecipeStep} from './recipeStep.model';

export class Recipe {
  constructor(
      public id: number,
      public name: string,
      public category: string,
      public steps: Array<RecipeStep>,
      public calories: number,
      public warnings: Array<string>,
      public vegetarian: boolean
  ) {}
}
