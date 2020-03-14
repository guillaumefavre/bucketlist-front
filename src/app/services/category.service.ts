import { Injectable } from '@angular/core';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  categories: Category[] = [
    new Category(1, 'Sport'),
    new Category(2, 'Voyage'),
    new Category(3, 'Carrière'),
    new Category(4, 'Famille'),
    new Category(5, 'Apprentissage')
  ];
}
