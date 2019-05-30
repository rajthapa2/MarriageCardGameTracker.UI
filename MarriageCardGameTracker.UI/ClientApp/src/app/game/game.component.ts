import { Component, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GameService } from '../services/game-service';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html'
})

export class GameComponent {
  http: HttpClient;
  gameService: GameService;
  baseUrl: string;
  
  private httpOptions = {
    headers: new HttpHeaders({
      'content-Type': 'application/json'
    })
  };

  constructor(gameService: GameService) {
    this.gameService = gameService;

    this.gameService.loadGame();
  }
  
}
