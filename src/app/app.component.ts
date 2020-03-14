import { Component, OnInit } from '@angular/core';
import { Category } from './model/category';
import { CategoryService } from './services/category.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bucketlist';

  constructor() {
  }

  ngOnInit() {

  }

}
