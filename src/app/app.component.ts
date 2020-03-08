import { Component } from '@angular/core';
import { Category } from './model/category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bucketlist';

  categories: Category[] = [
    new Category(1, 'Sport'),
    new Category(2, 'Voyage'),
    new Category(3, 'Carrière')
  ];
}
