import { Injectable } from '@angular/core';
import { Player as Player } from "../add-player/player";
import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlayerService } from "../services/player-service"
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable()
export class GameService {
  gameId: Number;
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
   }),
    withCredentials: false
  };

  createGame() {
    this.loadPlayers();
    this.http.post(this.baseUrl + '/api/game', JSON.stringify(this.players), this.httpOptions)
      .subscribe(response => {
        console.log(response);
        },
        error=> {
          console.log(error);
        }
      );
  }

    constructor(http: HttpClient, @Inject('APP_BASE_URL') baseUrl: string, playerService: PlayerService, router: Router) {
      this.http = http;
      this.baseUrl = baseUrl;
      this.playerService = playerService;
      this.router = router;
    }

}
