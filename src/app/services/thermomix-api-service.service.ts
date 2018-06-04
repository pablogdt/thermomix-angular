import { Injectable } from '@angular/core';
// import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class ThermomixApiServiceService {

  public apiUrl: string;

  constructor(public httpClient: HttpClient) {
    this.apiUrl = 'http://localhost:8080';
  }

  public getIngredients(): Observable<Object> {
    const url = this.apiUrl + '/ingredient/findAll';
    return this.httpClient.get(url);
  }

  public getRecipes(): Observable<Object> {
    const url = this.apiUrl + '/recipe/findAll';
    return this.httpClient.get(url);
  }

  public removeRecipe(id: number): Observable<Object> {
    const url = this.apiUrl + '/recipe/remove/' + id;
    return this.httpClient.post(url, null);
  }

  public getRecipe(id: number): Observable<Object> {
    const url = this.apiUrl + '/recipe/find/' + id;
    return this.httpClient.get(url);
  }

  public getAmountTypes(): Observable<Object> {
    const url = this.apiUrl + '/static/amounts';
    return this.httpClient.get(url);
  }

  public getCategoriesTypes(): Observable<Object> {
    const url = this.apiUrl + '/static/categories';
    return this.httpClient.get(url);
  }

  public getActionsTypes(): Observable<Object> {
    const url = this.apiUrl + '/static/actions';
    return this.httpClient.get(url);
  }

  public createNewRecipe(body: any): Observable<any> {
    const url = this.apiUrl + '/recipe/add';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post(url, body, {headers: headers});
  }

  updateRecipe(body: any, recipeId: number): Observable<any> {
    const url = this.apiUrl + '/recipe/update/' + recipeId;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post(url, body, {headers: headers});
  }

}
