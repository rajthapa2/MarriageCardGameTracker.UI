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
  
//  private httpOptions = {
//    headers: new HttpHeaders({
//      'content-Type': 'application/json'
//    })
//  };

//  constructor(httpClient: HttpClient, @Inject('APP_BASE_URL') baseUrl: string, gameService: GameService) {
//    this.http = httpClient;
//    this.gameService = gameService;
//    this.baseUrl = baseUrl;
//
//
//    this.http.get<GameViewModel>(this.baseUrl + '/api/game/').subscribe(
//      result => {
//      },
//      error => console.error(error));
//
//
//  }
  
}
