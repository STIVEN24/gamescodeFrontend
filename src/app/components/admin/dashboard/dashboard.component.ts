import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

// service
import { GameService } from '../../../services/game.service';
// 

// jwt_decode
import * as jwt_decode from 'jwt-decode';
// 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private gameService: GameService,
    private activatedRoute: ActivatedRoute,
    private titleComponent: Title
  ) {
    this.titleComponent.setTitle('Juegos - Gamescode');
  }

  games: any = [];
  tokenDecoded: any = "";
  token: string = "";
  tokenId = "";

  ngOnInit() {

    this.getLinksGames();

    // setInterval(() => {
    //   this.getLinksGames();
    // }, 30000);

    // console.log("queryParams: ", this.activatedRoute.snapshot.queryParams);
    // console.log("fragment: ", this.activatedRoute.snapshot.fragment);

  }

  getLinksGames() {
    this.gameService.getGames().subscribe(
      (res: any) => {
        this.tokenId = res.tokenId
        this.token = res.games;
        this.tokenDecoded = jwt_decode(res.games);
        this.games = this.tokenDecoded;
      },
      err => {
        this.games = [];
        console.log(err)
      }
    );
  }

}