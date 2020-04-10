import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviedbService {
  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const url = `http://localhost:8080${query}`;
    return this.http.get(url);
  }

  getDiscoverMovies() {
    return this.getQuery('/discover').pipe(
      map((data: any) => data.results)
    );
  }

  getMovie(id: string) {
    return this.getQuery(`/movie/${id}`).pipe(
      map((data: any) => data)
    );
  }
}
