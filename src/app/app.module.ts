import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryDetailComponent } from './category/category-detail/category-detail.component';
import { CategoryNewComponent } from './category/category-new/category-new.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    CategoryDetailComponent,
    CategoryNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
