import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ThermomixApiServiceService } from '../../services/thermomix-api-service.service';
import { Recipe } from '../../model/recipe.model';
import {RecipeIngredient} from '../../model/recipeIngredient.model';

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.css']
})
export class ViewRecipeComponent implements OnInit {
  private recipeId: number;
  public recipe: Recipe;
  public ingredientAmounts: Array<RecipeIngredient>;

  constructor(private route: ActivatedRoute, private router: Router, private thermomixApi: ThermomixApiServiceService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.recipeId = Number(params.get('id'));
    });
    this.thermomixApi.getRecipe(this.recipeId).subscribe(
      (val) => {
        this.recipe = <Recipe>val;
        this.populateTotalIngredientAmounts();
      },
      response => {
        console.log('Error getting ', response);
      });
  }

  public populateTotalIngredientAmounts() {
    const ingredientAmounts = new Map<string, RecipeIngredient>();
    this.recipe.steps.forEach(item => {
      item.recipeIngredientsToAdd.forEach(recipeIngredient => {
        const recipeIngredientSaved = ingredientAmounts.get(recipeIngredient.ingredient.name);
        if (recipeIngredientSaved) {
          recipeIngredientSaved.amount += recipeIngredient.amount;
        } else {
          ingredientAmounts.set(recipeIngredient.ingredient.name, recipeIngredient);
        }
      });
    });
    this.ingredientAmounts = Array.from(ingredientAmounts.values());
  }

}
