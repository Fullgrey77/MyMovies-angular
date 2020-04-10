import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moviePic'
})
export class MovieImagePipe implements PipeTransform {

  transform(picture: any): any {
    const url = 'http://image.tmdb.org/t/p/w400';

    if (picture.poster_path) {
      return url + picture.poster_path;
    } else {
      if (picture.backdrop_path) {
        return url + picture.backdrop_path;
      } else {
        return 'assets/img/noimage.png';
      }
    }
  }

}
