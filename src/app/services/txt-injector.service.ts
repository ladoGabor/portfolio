import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TxtInjectorService {

  constructor(private http: HttpClient) {}

  txtInjector(fileNames: string[]): Observable<string[]> {
    const requests: Observable<string>[] = fileNames.map(fileName => {
      return this.http.get(`../../assets/${fileName}.txt`, { responseType: 'text' });
    });
    return forkJoin(requests);
  }
}
