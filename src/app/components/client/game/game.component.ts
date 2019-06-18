import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

// components
import { GameService } from 'src/app/services/game.service';
// 

// jwt_decode
import * as jwt_decode from 'jwt-decode';
// 

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  game: any = [];
  token: string = "";
  decodedToken: any = "";
  tokenValidate: any = "";
  url_trailer: any = "";
  verifyImgLoaded: any = true;
  list: any = [];

  constructor(
    private gameService: GameService,
    private activatedRoute: ActivatedRoute,
    private titleComponent: Title
  ) { }

  ngOnInit() {

    this.getGame();
  }

  getGame() {

    this.gameService.getGame(this.activatedRoute.snapshot.params.id_game).subscribe(
      (res: any) => {
        this.token = res.game;
        this.tokenValidate = res.tokenId;
        this.decodedToken = jwt_decode(this.token);
        this.game = this.decodedToken.token;
        this.titleComponent.setTitle(this.game.nombre + ' - Gamescode')
      },
      err => console.log(err)
    );

  }

  some(i) {
    this.list.push(i);
    if (this.list.length === this.game.urls_imagenes.length) {
      this.verifyImgLoaded = false
    }
  }

}
