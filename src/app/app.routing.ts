import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './components/recipes/recipes.component';
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { ViewRecipeComponent } from './components/view-recipe/view-recipe.component';

const app_routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'recipes/:name', component: RecipesComponent },
  { path: 'recipe/:id', component: ViewRecipeComponent },
  { path: 'add-recipe', component: AddRecipeComponent },
  { path: 'add-recipe/:id', component: AddRecipeComponent },
  { path: 'ingredients', component: IngredientsComponent },
  { path: '**', component: ErrorComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(app_routes);
