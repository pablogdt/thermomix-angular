import { Component, OnInit } from '@angular/core';

import { Recipe } from '../../model/recipe.model';
import { ThermomixApiServiceService } from '../../services/thermomix-api-service.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes3.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  public recipeList: Array<Recipe>;
  dtOptions: DataTables.Settings = {};
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject();

  constructor(public thermomixApi: ThermomixApiServiceService) {
    this.recipeList = [];
  }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 20,
      columns: [{
        title: 'Nombre'
      }, {
        title: 'Tipo'
      }, {
        title: '',
        orderable: false
      }]
    };
    this.thermomixApi.getRecipes().subscribe(
      data => {
        (<Array<Object>>data).forEach(recipe => {
          this.recipeList.push(<Recipe>recipe);
        });
        this.dtTrigger.next();
      },
      err => console.log('Error retrieving recipes')
    );
  }

  removeRecipe($event, recipe: Recipe) {
    this.thermomixApi.removeRecipe(recipe.id).subscribe(
      (val) => {
          const index = this.recipeList.indexOf(recipe, 0);
          if (index > -1) {
            this.recipeList.splice(index, 1);
          }
        },
        response => {
          console.log('Error deleting', response);
          alert('Error deleting recipe ' + recipe.name);
        },
        () => {
          console.log('Recipe removed fine');
    });
  }

  editRecipe($event, recipe) {
    console.log('Editing recipe...');
  }

  viewRecipe($event, recipe) {
    console.log('Viewing recipe...');
  }

}
