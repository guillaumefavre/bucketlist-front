import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { Item } from '../model/item';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  // TODO : ne pas mettre l'URL en dur
  private itemsUrl = 'http://localhost:8090/bucketlist/1/items';

  items: Item[] = [];
  itemSubject = new Subject<Item[]>();

  constructor(private httpClient: HttpClient) { }

  getItems(): Observable<Item[]> {
    return this.httpClient.get<Item[]>(this.itemsUrl).pipe(
      tap(data => {
          this.items = data;
          this.emitItems();
        }),
      catchError(this.handleError)
    );
  }

  createItem(item: Item): Observable<Item> {
    return this.httpClient.post<Item>(this.itemsUrl, item).pipe(
      tap(data => {
        this.items.push(data);
        this.emitItems();
      }),
      catchError(this.handleError)
    );
  }

  emitItems() {
    this.itemSubject.next(
      // Tri des items par catégorie
      this.items.sort(function (a, b) {
        return a.category.id - b.category.id;
      })
    );
  }

  private handleError(err: HttpErrorResponse) {
    console.log('handleError');
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

}
