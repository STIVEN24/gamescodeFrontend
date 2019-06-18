import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(
    private http: HttpClient
  ) { }

  url_api = "http://localhost:3000/api/games/";

  getGames() {
    return this.http.get(`${this.url_api}getGames`);
  }

  getGame(id_game) {
    return this.http.get(`${this.url_api}getGame/${id_game}`);
  }

}