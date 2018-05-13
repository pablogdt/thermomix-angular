import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../../model/ingredient.model';
import { ThermomixApiServiceService } from '../../services/thermomix-api-service.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
  public ingredientList: Array<Ingredient>;

  constructor(public thermomixApi: ThermomixApiServiceService) {
    this.ingredientList = [];
  }

  ngOnInit() {
    this.thermomixApi.getIngredients().subscribe(
      data => {
        (<Array<Object>>data).forEach(ingredient => {
          this.ingredientList.push(<Ingredient>ingredient);
        });
        },
      err => console.log('Error retrieving ingredients')
    );
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredientList.push(ingredient);
  }

  removeIngredient(ingredient: Ingredient) {
    const index = this.ingredientList.indexOf(ingredient, 0);
    if (index > -1) {
      this.ingredientList.splice(index, 1);
    }
  }

}
