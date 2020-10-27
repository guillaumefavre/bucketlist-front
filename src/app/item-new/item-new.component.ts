import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Category } from '../model/category';
import { Item } from '../model/item';
import { CategoryService } from '../services/category.service';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-item-new',
  templateUrl: './item-new.component.html',
  styleUrls: ['./item-new.component.scss']
})
export class ItemNewComponent implements OnInit {

  categoryList: Category[];

  categorySubscription: Subscription;

  itemSubscription: Subscription;

  newItemForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private categoryService: CategoryService, private itemService: ItemService) { }


  ngOnInit(): void {
    this.categorySubscription = this.categoryService.getCategories().subscribe(
      categories => {
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
    let formValue = this.newItemForm.value;
    let categoryNewItem = this.categoryList.find(categ => categ.id == formValue['itemCategory'])
    let newItem = new Item(formValue['itemLabel'], categoryNewItem, formValue['itemStatus'])
    this.itemSubscription = this.itemService.createItem(newItem).subscribe();
  }

  ngOnDestroy() {
    this.categorySubscription.unsubscribe();
    if(this.itemSubscription) {
      this.itemSubscription.unsubscribe();
    }
  }

}
