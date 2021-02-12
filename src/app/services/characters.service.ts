import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  BASE_URL = 'https://www.breakingbadapi.com/api/characters';

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<any[]> {
    return this.http.get<any[]>(this.BASE_URL, httpOptions);
  }
}
