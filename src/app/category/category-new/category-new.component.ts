import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/model/category';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-category-new',
  templateUrl: './category-new.component.html',
  styleUrls: ['./category-new.component.scss']
})
export class CategoryNewComponent implements OnInit {

  categorySubscription: Subscription;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    let newCategory = new Category(form.value.label);
    this.categoryService.createCategory(newCategory).subscribe();
  }

  ngOnDestroy() {
    this.categorySubscription.unsubscribe();
  }

}
