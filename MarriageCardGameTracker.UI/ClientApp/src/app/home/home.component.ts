import { Component } from '@angular/core';
import { Player as Player } from "../add-player/player";
import {PlayerService} from "../services/player-service"
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  playerService : PlayerService;

  startNewGame() {
    let players = this.playerService.getPlayers();
    alert(players);
  }

  constructor(playerService: PlayerService) {
    this.playerService = playerService;
  }
}
