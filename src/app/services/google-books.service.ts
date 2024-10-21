import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleBooksService {
  private apiKey = 'YOUR_GOOGLE_BOOKS_API_KEY';  // Replace with your API key
  //private apiUrl = 'https://www.googleapis.com/books/v1/volumes';
  private apiUrl = 'https://www.googleapis.com/books/v1/volumes?q=';

  constructor(private http: HttpClient) { }

  searchBooks(query: string): Observable<any> {
    //const url = `${this.apiUrl}?q=${query}&key=${this.apiKey}`;
    return this.http.get<any>(`${this.apiUrl}${query}`);
    //return this.http.get(`${this.apiUrl}${query}`).pipe(
    //map((data: any) => data.items || [])
    //);
  }

}
