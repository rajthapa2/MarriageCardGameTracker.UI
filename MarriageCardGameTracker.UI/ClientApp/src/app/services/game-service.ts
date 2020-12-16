import { Injectable } from '@angular/core';
import { Player as Player } from "../add-player/player";
import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlayerService } from "../services/player-service"
import { HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Game as Game } from "../game/game";


@Injectable()
export class GameService {
  game: Game;
  http: HttpClient;
  baseUrl: String;
  playerService: PlayerService;
  players: Player[];
  router: Router;

  loadPlayers() {
    this.players = this.playerService.players;
  }

 private httpOptions = {
    headers: new HttpHeaders({
      'content-Type': 'application/json'
   })
  };

  createGame() {
    this.loadPlayers();
    this.http.post<Game>(this.baseUrl + '/api/game', JSON.stringify(this.players), this.httpOptions).subscribe(
      result => {
        this.game = result;
        this.router.navigate(['/game/', this.game.id ]);
      },
      error => console.error(error));
  }

  constructor(http: HttpClient, @Inject('APP_BASE_URL') baseUrl: string, playerService: PlayerService, router: Router) {
    this.http = http;
    this.baseUrl = baseUrl;
    this.playerService = playerService;
    this.router = router;
  }

  public loadGame(gameId: string) {

    return new Promise(resolve => {
      this.http.get<Game>(this.baseUrl + '/api/game/' + gameId)
        .subscribe(
          result => {
            this.game = result;
            resolve(result);
          },
          error => console.error(error));
    });
  }
}
