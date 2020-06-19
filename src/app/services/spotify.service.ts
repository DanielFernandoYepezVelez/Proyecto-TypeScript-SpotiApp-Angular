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
        'Bearer BQBRKVRdgbitGr-tobtxZwdmkvA9zph6jtNMu_mzy9NFG1dfRieD3Tl0tWyAWoHDA-VWVwDxuD2cjb6gisI',
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

  public getArtists(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(
      map((data: any) => data.artists.items)
    );
  }

  public getArtist(id: string) {
    return this.getQuery(
      `artists/${id}`
    ); /* .pipe(
      map((data: any) => data.artists.items)
    ); NO ES NECESARIO TRANSFORMAR O FILTRAR LA DATA POR QUE ME ENTREGA LA QUE EXACTAMENTE NECESITO */
  }

  public getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(
      map((data: any) => data.tracks)
    );
  }
}
