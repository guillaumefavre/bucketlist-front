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

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {

    this.itemSubscription = this.itemService.getItems().subscribe(
      items => {
        console.log('items : ', items)

        this.itemsList = items.sort(function (a, b) {
          return a.category.id - b.category.id;
        });

      }
    );
  }

  ngOnDestroy() {
    this.itemSubscription.unsubscribe();
  }
}
