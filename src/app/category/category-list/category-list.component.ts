import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/model/category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  @Input()
  categoryList: Category[];

  constructor() { }

  ngOnInit(): void {
  }

}
