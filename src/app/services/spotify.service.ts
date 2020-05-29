import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  public getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQAEa6uVVypeJ7uApH-DRXxSnMDBdOEvQfQwI_rhhjp49sk8jEfz48NJcPgFGcIWU4pvaoiCP8KtTjKaTR4',
    });

    return this.http.get(url, { headers });
  }

  public getNewRealeses() {
    return this.getQuery(`browse/new-releases?limit=20`).pipe(
      map((data: any) => {
        return data.albums.items;
      })
    );
  }

  public getArtist(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(
      map((data: any) => data.artists.items)
    );
  }
}
