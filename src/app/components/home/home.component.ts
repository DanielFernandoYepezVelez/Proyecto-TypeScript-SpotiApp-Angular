import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  newRealeses: any[] = [];
  loading;

  constructor(private spotify: SpotifyService) {
    this.loading = true;

    this.spotify.getNewRealeses().subscribe((data: any) => {
      this.newRealeses = data;
      this.loading = false;
    });
  }
}
