import { Component, OnInit } from '@angular/core';
import {Recipe} from '../../model/recipe.model';
import {RecipeStep} from '../../model/recipeStep.model';
import {DragulaService} from 'ng2-dragula';
import {RecipeIngredient} from '../../model/recipeIngredient.model';
import {ThermomixApiServiceService} from '../../services/thermomix-api-service.service';
import {Ingredient} from '../../model/ingredient.model';
import {ActivatedRoute, Router, Params} from '@angular/router';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  public recipe: Recipe;
  public recipeStep: RecipeStep;
  public parameterRecipeId: number;

  constructor(private route: ActivatedRoute, private router: Router,  private dragulaService: DragulaService,
              private thermomixApi: ThermomixApiServiceService) {
    this.recipe = new Recipe(null, null, null, []);
    this.recipeStep = this.createDefaultStep();
    this.recipe.steps.push(this.recipeStep);
    this.recipeStep.recipeIngredientsToAdd = [];

    dragulaService.drop.subscribe((value) => {
      this.onDrop(value.slice(1));
    });
    this.route.paramMap.subscribe(params => {
      this.parameterRecipeId = Number(params.get('id'));
    });
    if (this.parameterRecipeId) {
      this.thermomixApi.getRecipe(this.parameterRecipeId).subscribe(
        (val) => {
          this.recipe = <Recipe>val;
        },
        response => {
          console.log('Error getting ', response);
        });
    }
  }

  private onDrop(args) {
  }

  ngOnInit() {
  }

  onClickAddStep() {
    this.recipeStep = this.createDefaultStep();
    this.recipe.steps.push(this.recipeStep);
  }

  private createDefaultStep() {
    const step = new RecipeStep(null, null, null, null, 'SECONDS', null, null, null, true);
    step.recipeIngredientsToAdd = [];
    return step;
  }

  onSubmitRecipe() {
    this.recipe.steps.forEach((step, index) => {
      step.stepOrder = index + 1;
    });
    console.log(JSON.stringify(this.recipe));
    if (this.parameterRecipeId) {
      this.thermomixApi.updateRecipe(this.recipe, this.parameterRecipeId).subscribe(
      (val) => {
        console.log('POST call successful value returned in body', val);
      },
      response => {
        console.log('POST call in error', response);
      },
      () => {
        console.log('The POST observable is now completed.');
      });
    } else {
      this.thermomixApi.createNewRecipe(this.recipe).subscribe(
        (val) => {
          console.log('POST call successful value returned in body', val);
        },
        response => {
          console.log('POST call in error', response);
        },
        () => {
          console.log('The POST observable is now completed.');
        });
    }
  }

  onClickAddIngredient() {
    this.recipeStep.recipeIngredientsToAdd.push(new RecipeIngredient(null, null, new Ingredient(null, null, null)));
  }

  onClickDeleteIngredient($event, ingredient) {
    const index = this.recipeStep.recipeIngredientsToAdd.indexOf(ingredient, 0);
    if (index > -1) {
      this.recipeStep.recipeIngredientsToAdd.splice(index, 1);
    }
  }

  onClickStepSelected($event, item) {
    this.recipeStep = item;
  }
}
