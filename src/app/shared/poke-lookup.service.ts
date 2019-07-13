import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokeLookupService {

  constructor(private http: HttpClient) { }

  getPokeData(pokeName: string, dataPoints: string[]): Observable<any> {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/' + pokeName + '/');
  }
}
