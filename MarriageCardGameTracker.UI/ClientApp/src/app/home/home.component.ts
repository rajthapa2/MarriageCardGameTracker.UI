import { Component } from '@angular/core';
import {PlayerService} from "../services/player-service"
import { GameService } from "../services/game-service"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  playerService : PlayerService;
  gameService: GameService;

  startNewGame() {
    let players = this.playerService.getPlayers();

    this.gameService.createGame();
  }

  constructor(playerService: PlayerService, gameService: GameService) {
    this.playerService = playerService;
    this.gameService = gameService;
  }

}
