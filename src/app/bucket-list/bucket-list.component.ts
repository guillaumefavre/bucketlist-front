import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Category } from '../model/category';
import { Item } from '../model/item';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-bucket-list',
  templateUrl: './bucket-list.component.html',
  styleUrls: ['./bucket-list.component.scss']
})
export class BucketListComponent implements OnInit {

  itemsList: Item[];

  itemSubscription: Subscription;

  lastCategoryId: number;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {

    this.itemSubscription = this.itemService.getItems().subscribe(
      items => {
        this.itemsList = items;
      }
    );
  }

  ngOnDestroy() {
    this.itemSubscription.unsubscribe();
  }

  /**
   * Indique si l'item correspond à une 
   * catégorie parcourue pour la première fois
   * @param id 
   */
  isNewCategory(id) {
    if(this.lastCategoryId != id) {
      this.lastCategoryId = id;
      return true;
    }
    return false;
  }
}
