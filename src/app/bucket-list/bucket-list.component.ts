import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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
        this.itemsList = items;
      }
    );
  }

  ngOnDestroy() {
    this.itemSubscription.unsubscribe();
  }
}
