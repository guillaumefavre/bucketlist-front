import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/services/category.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  categoryList: Category[];

  categorySubscription: Subscription;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    console.log('CategoryListComponent ngOnInit()');

    this.categorySubscription = this.categoryService.getCategories().subscribe(
      categories => {
        console.log('réponse categories : ' +categories);
        this.categoryList = categories;
      }
    );
  }

  ngOnDestroy() {
    this.categorySubscription.unsubscribe();
  }

}
