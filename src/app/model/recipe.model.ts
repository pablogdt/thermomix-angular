import {RecipeStep} from './recipeStep.model';

export class Recipe {
  constructor(
      public name: string,
      public category: string,
      public steps: Array<RecipeStep>
  ) {}
}
