import {RecipeIngredient} from './recipeIngredient.model';

export class RecipeStep {
  constructor(
      public recipeIngredientsToAdd: Array<RecipeIngredient>,
      public stepOrder: number,
      public action: string,
      public time: number,
      public timeUnit: string,
      public speed: number,
      public temperature: number,
      public description: string,
      public usesThermomix: boolean
  ) {}
}
