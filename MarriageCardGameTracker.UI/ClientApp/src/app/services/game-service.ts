import { Injectable } from '@angular/core';
import { Player as Player } from "../add-player/player";
import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlayerService } from "../services/player-service"
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Game as Game} from "../game/game";


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
        this.router.navigate(['/game/', this.game.id]);
      },
      error => console.error(error));
  }

  constructor(http: HttpClient, @Inject('APP_BASE_URL') baseUrl: string, playerService: PlayerService, router: Router) {
      this.http = http;
      this.baseUrl = baseUrl;
      this.playerService = playerService;
      this.router = router;
    }
}
