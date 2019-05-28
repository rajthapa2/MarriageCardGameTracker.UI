import { Component } from '@angular/core';
import { Player as Player } from "./player";
import { PlayerService } from "../services/player-service";

@Component({
  selector: 'add-player',
  templateUrl: './add-player.component.html' 
})

export class AddPlayerComponent {
  numberOfPlayer: number;
  players: Player[];
  playerService: PlayerService;

  constructor(playerService: PlayerService) {
    this.playerService = playerService;
    this.players = playerService.getPlayers();
  }

  onChange(i: number) {
    this.numberOfPlayer = i;
    this.players = new Array<Player>();

    for (var y = 0; y < this.numberOfPlayer; y++) {
        this.players.push(this.createPlayer());
    }
    this.playerService.setPlayers(this.players);
  }
  
  ngOnInit() {

  }

  private createPlayer() {
    return new Player();
  }
}
