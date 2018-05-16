import { Component, OnInit } from '@angular/core';
import {Recipe} from '../../model/recipe.model';
import {RecipeStep} from '../../model/recipeStep.model';
import {DragulaService} from 'ng2-dragula';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  public recipe: Recipe;
  public recipeStep: RecipeStep;

  constructor( private dragulaService: DragulaService ) {
    this.recipeStep = new RecipeStep(null, null, 'ADD', 15, 'Minutes', 2, 50, 'Naïve description', true);
    this.recipe = new Recipe('Pisto de bonito', 'FISH', []);
    // this.recipe.steps = [];
    this.recipe.steps.push(new RecipeStep(null, null, null, null, null, null, null, 'Cortar ingredientes', null));
    this.recipe.steps.push(new RecipeStep(null, null, null, null, null, null, null, 'Cocinar ingredientes', null));
    this.recipe.steps.push(new RecipeStep(null, null, null, null, null, null, null, 'Emplatar', null));

    dragulaService.drop.subscribe((value) => {
      console.log('drop: ${value[0]}');
      this.onDrop(value.slice(1));
    });
  }

  private onDrop(args) {
    // let [e, el] = args;
    // alert(args);
  }

  ngOnInit() {
  }

  onClick() {
    this.recipe.steps.push(this.recipeStep);
    this.recipeStep = new RecipeStep(null, null, null, null, null, null, null, null, false);
  }

  onSubmit() {
    console.log(JSON.stringify(this.recipe));
  }

}
