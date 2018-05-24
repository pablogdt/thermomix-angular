import {RecipeStep} from './recipeStep.model';

export class Recipe {
  constructor(
      public id: number,
      public name: string,
      public category: string,
      public steps: Array<RecipeStep>
  ) {}
}
