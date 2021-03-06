import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private apiKey = '?api_key=5e9bd2fa585826bdfc4233fb6424f425';
  private apiUrl = 'https://api.themoviedb.org/';
  imageBaseurl = 'https://image.tmdb.org/t/p/';

  constructor(private http: HttpClient) {}

  getMovies(page, searchType, genresIncluded) {
    console.log(`https://api.themoviedb.org/3/movie/popular?${this.apiKey}`);
    return this.http.get(
      `${this.apiUrl}3/movie/${searchType}${this.apiKey}&language=en-US&page=${page}&with_genres=${genresIncluded}`
    );
  }

  getMovie(id) {
    return this.http.get(
      `${this.apiUrl}3/movie/${id}${this.apiKey}&language=en-US`
    );
  }

  getShow(id) {
    return this.http.get(
      `${this.apiUrl}3/tv/${id}${this.apiKey}&language=en-US`
    );
  }

  getActor(id) {
    return this.http.get(
      `${this.apiUrl}3/person/${id}${this.apiKey}&language=en-US`
    );
  }

  // This returns an object that contains the genre ID and Name
  searchGenreId() {
    return this.http.get(
      `${this.apiUrl}3/genre/movie/list${this.apiKey}&language=en-US`
    );
  }

  getTrendingMoviesByGenre(genreId) {
    return this.http.get(
      `${this.apiUrl}3/discover/movie${this.apiKey}&language=en-US&with_genres=${genreId}`
    );
  }

  getRecomendations(movieId, page) {
    return this.http.get(
      `${this.apiUrl}3/movie/${movieId}/recommendations${this.apiKey}&language=en-US&page=${page}`
    );
  }

  // Search Functions
  searchForMovieByQuery(searchString, page) {
    return this.http.get(
      `${this.apiUrl}3/search/multi${this.apiKey}&query=${searchString}&page=${page}`
    );
  }
  searchForMovieById(movieId, page) {
    return this.http.get(
      `${this.apiUrl}3/movie/${movieId}${this.apiKey}&language=en-US&page=${page}`
    );
  }
  searchForTVById(tvId, page) {
    return this.http.get(
      `${this.apiUrl}3/tv/${tvId}${this.apiKey}&language=en-US&page=${page}`
    );
  }
  searchForActorById(actorID) {
    return this.http.get(
      `${this.apiUrl}3/person/${actorID}${this.apiKey}&language=en-US`
    );
  }
}
