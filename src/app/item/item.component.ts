import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Item } from '../model/item';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input()
  item: Item;

  itemSubscription: Subscription;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
  }

  changeItemStatus(newStatus: string) {
    this.item.status = newStatus,
    console.log('changeItemStatus : ', newStatus, this.item)
    this.itemSubscription = this.itemService.modifyItem(this.item).subscribe();
  }

  ngOnDestroy() {
    if(this.itemSubscription) {
      this.itemSubscription.unsubscribe();
    }
  }

}
