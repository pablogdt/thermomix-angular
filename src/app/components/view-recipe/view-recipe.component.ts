import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ThermomixApiServiceService } from '../../services/thermomix-api-service.service';
import { Recipe } from '../../model/recipe.model';

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.css']
})
export class ViewRecipeComponent implements OnInit {
  private recipeId: number;
  public recipe: Recipe;

  constructor(private route: ActivatedRoute, private router: Router, private thermomixApi: ThermomixApiServiceService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.recipeId = Number(params.get('id'));
    });
    this.thermomixApi.getRecipe(this.recipeId).subscribe(
      (val) => {
        this.recipe = <Recipe>val;
      },
      response => {
        console.log('Error getting ', response);
      });
  }

}
