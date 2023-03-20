import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl = 'http://example.com/api';

  constructor(private http: HttpClient) {}

  get<T>(url: string, params?: HttpParams, headers?: HttpHeaders): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${url}`, { params, headers })
      .pipe(
        catchError(this._handleError)
      );
  }

  post<T>(url: string, body: any, params?: HttpParams, headers?: HttpHeaders): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${url}`, body, { params, headers })
      .pipe(
        catchError(this._handleError)
      );
  }

  put<T>(url: string, body: any, params?: HttpParams, headers?: HttpHeaders): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${url}`, body, { params, headers })
      .pipe(
        catchError(this._handleError)
      );
  }

  delete<T>(url: string, params?: HttpParams, headers?: HttpHeaders): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}/${url}`, { params, headers })
      .pipe(
        catchError(this._handleError)
      );
  }

  private _handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);

    if (error.status === 401 && error.error.code === 10002) {
      // If the error status is 401 and the error code is 10002, the user's token has expired.
      // You can customize this logic to fit your particular use case.

      // Redirect the user to the login page
      window.location.href = '/login';
    }

    // For all other errors, return a generic error message
    return throwError('Something bad happened; please try again later.');
  }
}
