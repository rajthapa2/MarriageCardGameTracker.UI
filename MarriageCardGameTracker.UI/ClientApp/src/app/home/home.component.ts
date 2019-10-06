import { Component } from '@angular/core';
import {PlayerService} from "../services/player-service"
import { GameService } from "../services/game-service"
import { Player as Player } from "../add-player/player";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  playerService : PlayerService;
  gameService: GameService;
  players: Array<Player>;

  startNewGame(players: Player[]) {
    players = this.playerService.getPlayers();

    this.gameService.createGame();
  }

  constructor(playerService: PlayerService, gameService: GameService) {
    this.playerService = playerService;
    this.gameService = gameService;
  }

}
