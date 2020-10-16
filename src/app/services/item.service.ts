import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { Item } from '../model/item';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itemsUrl = 'http://localhost:8090/bucketlist/1/items';

  items: Item[] = [];
  itemSubject = new Subject<Item[]>();

  constructor(private httpClient: HttpClient) { }

  getItems(): Observable<Item[]> {
    console.log('getItems');
    return this.httpClient.get<Item[]>(this.itemsUrl).pipe(
      tap(data => {
          console.log('Data : '+JSON.stringify(data));
          this.items = data;
          this.emitItems();
        }),
      catchError(this.handleError)
    );
  }

  emitItems() {
    this.itemSubject.next(this.items);
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
