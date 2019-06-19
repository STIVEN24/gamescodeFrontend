import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MediaMatcher } from '@angular/cdk/layout';

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
export class DashboardComponent implements OnInit, OnDestroy {

  mobileQuery: MediaQueryList;

  constructor(
    private gameService: GameService,
    private activatedRoute: ActivatedRoute,
    private titleComponent: Title,
    changeDetectorRef: ChangeDetectorRef,
    mediaMatcher: MediaMatcher
  ) {
    this.titleComponent.setTitle('Juegos - Gamescode');

    this.mobileQuery = mediaMatcher.matchMedia(' (max-width: 760px) ');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  private _mobileQueryListener: () => void;

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

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener)
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