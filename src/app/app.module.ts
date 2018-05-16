import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { MenuComponent } from './components/menu/menu.component';
import { IngredientsComponent } from './components/ingredients/ingredients.component';

import { HttpClientModule } from '@angular/common/http';
import {ThermomixApiServiceService} from './services/thermomix-api-service.service';
import {DataTablesModule} from 'angular-datatables';
import {DragulaModule, DragulaService} from 'ng2-dragula';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddRecipeComponent,
    RecipesComponent,
    HomeComponent,
    MenuComponent,
    ErrorComponent,
    IngredientsComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    DataTablesModule,
    DragulaModule,
    FormsModule
  ],
  providers: [appRoutingProviders, ThermomixApiServiceService, DragulaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
