import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Category } from '../model/category';
import { Item } from '../model/item';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-item-new',
  templateUrl: './item-new.component.html',
  styleUrls: ['./item-new.component.scss']
})
export class ItemNewComponent implements OnInit {

  categoryList: Category[];

  categorySubscription: Subscription;

  newItemForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private categoryService: CategoryService) { }


  ngOnInit(): void {
    this.categorySubscription = this.categoryService.getCategories().subscribe(
      categories => {
        console.log('réponse categories : ' +categories);
        this.categoryList = categories;
      }
    );

    this.newItemForm = this.formBuilder.group({
      itemLabel: '',
      itemCategory: '',
      itemStatus: ''
    });

  }

  onSubmitForm() {
    const formValue = this.newItemForm.value;
    const categoryNewItem = this.categoryList.find(categ => categ.id == formValue['itemCategory'])
    const newItem = new Item(formValue['itemLabel'], categoryNewItem, formValue['itemStatus'])
    console.log('newItem : ', newItem)
  }

}
