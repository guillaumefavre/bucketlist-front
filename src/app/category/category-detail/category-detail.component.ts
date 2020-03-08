import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/model/category';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {

  @Input()
  categoryDetail: Category;

  constructor() { }

  ngOnInit(): void {
  }

}
