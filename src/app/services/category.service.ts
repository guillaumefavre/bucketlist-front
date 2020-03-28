import { Injectable, ErrorHandler } from '@angular/core';
import { Category } from '../model/category';
import { Observable, Subject, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categoryUrl = 'http://localhost:8090/category';

  categories: Category[] = [];
  categorySubject = new Subject<Category[]>();

  constructor(private httpClient: HttpClient) { }

  // categories: Category[] = [
  //   new Category(1, 'Sport'),
  //   new Category(2, 'Voyage'),
  //   new Category(3, 'Carrière'),
  //   new Category(4, 'Famille'),
  //   new Category(5, 'Apprentissage')
  // ];

  getCategories(): Observable<Category[]> {
    console.log('getCategories');
    return this.httpClient.get<Category[]>(this.categoryUrl).pipe(
      tap(data => {
          console.log('Data : '+JSON.stringify(data));
          this.categories = data;
          this.emitCategories();
        }),
      catchError(this.handleError)
    );
  }

  createCategory(category: Category): Observable<Category> {
    console.log('createCategory : '+JSON.stringify(category));
    return this.httpClient.post<Category>(this.categoryUrl, category).pipe(
      tap(data => {
        this.categories.push(data);
        this.emitCategories();
      }),
      catchError(this.handleError)
    );
  }

  emitCategories() {
    this.categorySubject.next(this.categories);
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
