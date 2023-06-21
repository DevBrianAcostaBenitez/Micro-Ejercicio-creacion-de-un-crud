import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap, map  } from 'rxjs/operators';
import {forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { 
  }
 getData(): Observable<any> {
  return this.http.get<string[]>('https://api.chucknorris.io/jokes/categories').pipe(
      switchMap((categories: string[]) => {
        const requests = categories.map((category: string) => {
          return this.http.get<any>(`https://api.chucknorris.io/jokes/search?query=${category}`);
        });
        return forkJoin(requests);
      }),
      map((responses: any[]) => {
        const jokes = responses.reduce((acc: string[], response: any) => {
          response.result.forEach((result: any) => {
            acc.push(result.value);
          });
          return acc;
        }, []);
        return jokes;
      })
    );
  }
}