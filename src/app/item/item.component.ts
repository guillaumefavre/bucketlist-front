import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ItemDialogComponent } from '../item-dialog/item-dialog.component';
import { Item } from '../model/item';
import { ItemService } from '../services/item.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input()
  item: Item;

  itemSubscription: Subscription;

  constructor(private itemService: ItemService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  changeItemStatus(newStatus: string) {
    this.item.status = newStatus,
    this.itemSubscription = this.itemService.modifyItem(this.item).subscribe();
  }

  supprimerItem() {
    console.log('item à supprimer : ', this.item)
    this.itemSubscription = this.itemService.deleteItem(this.item).subscribe();
  }

  openItemDialog() {
    console.group('openItemDialog : ', this.item.label)
    const dialogRef = this.dialog.open(ItemDialogComponent, {
      data: this.item
    });

    dialogRef.afterClosed().subscribe(result => {
      this.itemSubscription = this.itemService.modifyItem(result.modifiedItem).subscribe();
    });
  }

  ngOnDestroy() {
    if(this.itemSubscription) {
      this.itemSubscription.unsubscribe();
    }
  }

}
