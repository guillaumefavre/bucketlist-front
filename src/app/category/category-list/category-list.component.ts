import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  //@Input()
  categoryList: Category[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryList = this.categoryService.categories;
  }

}
