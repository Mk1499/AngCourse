import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faHeart, faAddressBook, faHeartBroken } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  heartIcon: any;
  @Input('fav') isFav = false;
  @Output('change') change = new EventEmitter();

  ngOnInit(): void {
    // this.changeFav();
    if (this.isFav) {
      this.isFav = false;
      this.heartIcon = faHeartBroken;
    } else {
      this.isFav = true;
      this.heartIcon = faHeart;
    }
  }

  changeFav() {
    console.log('Fav ?: ', this.isFav);

    if (this.isFav) {
      this.isFav = false;
      this.heartIcon = faHeartBroken;
    } else {
      this.isFav = true;
      this.heartIcon = faHeart;
    }

    this.change.emit();
  }


}
