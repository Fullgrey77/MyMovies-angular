import { Component } from '@angular/core';
import { MoviedbService } from './services/moviedb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyMovies';

  constructor(public ms: MoviedbService) {
    this.ms.getDiscoverMovies().subscribe(data => console.log(data));
  }
}
