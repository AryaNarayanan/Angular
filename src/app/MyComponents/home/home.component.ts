import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AllSongsService } from '../../all-songs.service';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() data: any = [];
  favorites: any[] = [];

  constructor(private _songsService: AllSongsService) {
    this._songsService.getSongs().subscribe(data => {
      console.warn(data)
      this.data = data
    })
  }

  ngOnInit(): void {
  }

  getFavorites() {
    this.favorites = this._songsService.getFavorites();
  }

  isFavorite(id: String) {
    if (this.favorites != null && this.favorites != undefined) {
      let item = this.favorites.find((favorite) => favorite.id == id);
      if (item != undefined) {
        return 'fas fa-heart';
      }
    }
    return 'far fa-heart';
  }

  changeFavorite(song: any) {
    if (this.favorites != null && this.favorites != undefined) {
      let item = this.favorites.find((favorite) => favorite.id == song.id);
      if (item != undefined) {
        // this.toastr.error('Success', 'Removed from Favorites!');
        return this.favorites = this._songsService.removeFavorites(song);
      }
    }
    // this.toastr.success('Success', 'Added to Favorites!');
    return this.favorites = this._songsService.setFavorites(song);
  }

}
