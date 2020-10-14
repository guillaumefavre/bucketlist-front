import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { BucketListComponent } from './bucket-list/bucket-list.component';

const routes: Routes = [
  { path: 'categories', component: CategoryListComponent },
  { path: 'bucketlist', component: BucketListComponent },
  { path: '', component: BucketListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
