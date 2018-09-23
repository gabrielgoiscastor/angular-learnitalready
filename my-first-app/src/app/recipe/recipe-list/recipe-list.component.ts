import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test one', 'Lorem ipsum', 'https://img.delicious.com.au/52hfFIjf/h506-w759-cfill/del/2017/05/one-pot-butter-chicken-with-dill-yoghurt-46876-2.jpg'),
    new Recipe('Takito', 'I love this!', 'http://www.fnstatic.co.uk/images/content/recipe/beef-tacos.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
