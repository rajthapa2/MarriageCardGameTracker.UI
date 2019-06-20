import { Injectable } from '@angular/core';
import { Player as Player } from "../add-player/player";
import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlayerService } from "../services/player-service"
import { HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Game as Game } from "../game/game";
import { RoundRequest } from '../round/round-request';
import { RoundResponse } from '../round/round-response';


@Injectable()
export class RoundService {
  roundResult: RoundResponse;
  http: HttpClient;
  baseUrl: String;
  playerService: PlayerService;
  players: Player[];
  router: Router;


 private httpOptions = {
    headers: new HttpHeaders({
      'content-Type': 'application/json'
   })
  };

  constructor(http: HttpClient, @Inject('APP_BASE_URL') baseUrl: string, playerService: PlayerService, router: Router) {
    this.http = http;
    this.baseUrl = baseUrl;
    this.playerService = playerService;
    this.router = router;
  }

  public calculate(gameId: string, roundRequest: RoundRequest) {
    // api/{GameId}/rounds
    let promise = new Promise((resolve, reject) => {
      let apiUrl = `${this.baseUrl}/api/${gameId}/rounds`;
      this.http.post<RoundResponse>(apiUrl, JSON.stringify(roundRequest), this.httpOptions)
        .toPromise()
        .then(
          res => { // success
            console.log(res);
            this.roundResult = res;
            resolve(res);
          },
          msg => { // error
            reject(msg);
          }
        );
    });
    return promise;
  }
}
