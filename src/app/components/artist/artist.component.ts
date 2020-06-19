import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
})
export class ArtistComponent implements OnInit {
  artista: any = {};
  loadingArtista: boolean;
  topTracks: any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private spotifyService: SpotifyService
  ) {
    this.loadingArtista = true;
    this.activatedRoute.params.subscribe((params) => {
      this.artist(params.id);
      this.getTopTracks(params.id);
    });
  }

  artist(id: string): void {
    this.spotifyService.getArtist(id).subscribe((artist) => {
      this.loadingArtista = false;
      this.artista = artist;
    });
  }

  getTopTracks(id: string): void {
    this.spotifyService
      .getTopTracks(id)
      .subscribe((tracks) => (this.topTracks = tracks));
  }

  ngOnInit(): void {}
}
