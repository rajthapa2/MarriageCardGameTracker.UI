import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GameService } from '../services/game-service';
import { RoundService } from '../services/round-service';
import { Injectable } from '@angular/core';
import {Game} from './game'
import { RoundRequest } from '../round/round-request';
import { RoundResponse as RoundResult} from '../round/round-response';
import { RoundPlayer } from '../round/round-player';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent {
  http: HttpClient;
  gameService: GameService;
  roundService: RoundService;
  baseUrl: string;
  game: Game;
  currentRound: RoundRequest;
  errorMessage: string;
  private httpOptions = {
    headers: new HttpHeaders({
      'content-Type': 'application/json'
    })
  };

  constructor(gameService: GameService, private route: ActivatedRoute, roundService: RoundService) {
    this.game = new Game();
    this.gameService = gameService;
    this.roundService = roundService;
    this.currentRound = new RoundRequest;
    var id = this.route.snapshot.paramMap.get('id');

    this.gameService.loadGame(id)
      .then((game: Game) => {
        this.game = game;
        this.makeRoundRequest();
      });
  }

  private makeRoundRequest() {
    let round = new RoundRequest();
    round.roundId = this.game.roundsResults.length + 1;
    this.game.players.forEach(x => {
      let roundPlayer = new RoundPlayer();
      roundPlayer.name = x.name;
      round.playersMaal.push(roundPlayer);
    });
    this.currentRound = round;
  };

  calculateMaal() {
    const id = this.route.snapshot.paramMap.get('id');
    this.roundService.calculate(id, this.currentRound)
      .then((roundResult: RoundResult) => {
          this.errorMessage = null;
          this.game.roundsResults.push(roundResult);
          this.makeRoundRequest();
        },
        (error) => {
          this.errorMessage = error.error.errorMessage;
        });
  }
}
